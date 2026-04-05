import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { I as Input } from './Input-tFlJmOA5.js';

/**
 * Generates a zero-padded array of strings from `0` to `max` (inclusive).
 * e.g. `buildRange(3)` → `["00", "01", "02", "03"]`
 */
function buildRange(max) {
    return Array.from({ length: max + 1 }, (_, i) => (i < 10 ? `0${i}` : `${i}`));
}
/**
 * Applies a `HH:MM` mask to a raw digit string.
 * Automatically inserts `:` after two digits.
 */
function applyTimeMask(raw) {
    const digits = raw.replace(/[^\d]/g, "").slice(0, 4);
    if (digits.length > 2) {
        return `${digits.slice(0, 2)}:${digits.slice(2)}`;
    }
    return digits;
}
/**
 * Parses a `HH:MM` string into `{ hour, minute }`.
 * Returns empty strings for both when the input is invalid or empty.
 */
function parseTime(value) {
    const [hour = "", minute = ""] = value.split(":");
    return { hour, minute };
}
/** Height in pixels of each item cell in the scroll column. */
const ITEM_HEIGHT = 36;
/** Number of visible items in the picker column. */
const VISIBLE_ITEMS = 5;
/**
 * How many times the value list is repeated to simulate infinite scrolling.
 *
 * Kept intentionally small (5) to minimize DOM nodes:
 * - Hours:   24 × 5 = 120 nodes
 * - Minutes: 60 × 5 = 300 nodes
 *
 * The scroll position is silently reset to the middle repetition whenever
 * the user leaves the middle third, so the edges are never reachable in practice.
 */
const REPEAT_COUNT = 5;

/**
 * Manages all state and interaction logic for `InputTime`:
 * - Syncs internal hour/minute state from the controlled `value` prop
 * - Handles typed input with auto-masking (`HH:MM`)
 * - Coordinates picker open/close state
 * - Fires `onChange` on every mutation
 */
function useInputTime({ value, onChange, }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedHour, setSelectedHour] = useState("");
    const [selectedMinute, setSelectedMinute] = useState("");
    // Sync from controlled value
    useEffect(() => {
        if (value === undefined) {
            setSelectedHour("");
            setSelectedMinute("");
            return;
        }
        const { hour, minute } = parseTime(value);
        setSelectedHour(hour);
        setSelectedMinute(minute);
    }, [value]);
    const togglePicker = useCallback(() => setIsOpen((prev) => !prev), []);
    const closePicker = useCallback(() => setIsOpen(false), []);
    const handleHourSelect = useCallback((hour) => {
        setSelectedHour(hour);
        onChange(`${hour}:${selectedMinute}`);
    }, [onChange, selectedMinute]);
    const handleMinuteSelect = useCallback((minute) => {
        setSelectedMinute(minute);
        onChange(`${selectedHour}:${minute}`);
    }, [onChange, selectedHour]);
    const handleInputChange = (e) => {
        const masked = applyTimeMask(e.target.value);
        e.target.value = masked;
        onChange(masked);
    };
    const displayValue = value !== undefined && value !== null
        ? value
        : selectedHour && selectedMinute
            ? `${selectedHour}:${selectedMinute}`
            : "";
    return {
        isOpen,
        selectedHour,
        selectedMinute,
        displayValue,
        togglePicker,
        closePicker,
        handleHourSelect,
        handleMinuteSelect,
        handleInputChange,
    };
}

/**
 * Fires `callback` when a mousedown event occurs outside `ref`.
 */
function useClickOutside(ref, callback) {
    useEffect(() => {
        const handler = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [ref, callback]);
}

/**
 * Implements an infinite drum-roll scroll column (iOS-style picker).
 *
 * Strategy:
 * - Renders `values` repeated `REPEAT_COUNT` times (kept intentionally small).
 * - Always starts scrolled to the middle repetition so the user has equal
 *   room in both directions.
 * - On scroll end, snaps to the nearest item and fires `onSelect`.
 * - Whenever the user leaves the middle third of the list, silently resets
 *   the scroll position back to the middle repetition (same visual value,
 *   different scroll offset) — creating the infinite loop illusion with
 *   minimal DOM nodes.
 */
function useInfiniteScroll({ values, selected, onSelect, }) {
    const scrollRef = useRef(null);
    const snapTimer = useRef();
    const totalItems = values.length * REPEAT_COUNT;
    const midOffset = Math.floor(REPEAT_COUNT / 2) * values.length;
    const paddingItems = Math.floor(VISIBLE_ITEMS / 2);
    const scrollToIndex = useCallback((index, behavior = "smooth") => {
        const el = scrollRef.current;
        if (!el)
            return;
        el.scrollTo({
            top: (index + paddingItems) * ITEM_HEIGHT -
                el.clientHeight / 2 +
                ITEM_HEIGHT / 2,
            behavior,
        });
    }, [paddingItems]);
    const getIndexForValue = useCallback((val, offset = midOffset) => {
        const localIndex = values.indexOf(val);
        return localIndex === -1 ? offset : offset + localIndex;
    }, [values, midOffset]);
    // Scroll to selected on mount and when it changes externally
    useEffect(() => {
        if (!selected)
            return;
        scrollToIndex(getIndexForValue(selected), "instant");
    }, [selected]);
    const snapToNearest = useCallback(() => {
        const el = scrollRef.current;
        if (!el)
            return;
        const centerOffset = el.clientHeight / 2 - ITEM_HEIGHT / 2;
        const rawIndex = (el.scrollTop + centerOffset) / ITEM_HEIGHT - paddingItems;
        const snappedIndex = Math.max(0, Math.min(Math.round(rawIndex), totalItems - 1));
        const value = values[snappedIndex % values.length];
        scrollToIndex(snappedIndex, "smooth");
        // Reset to the middle third when the user leaves it.
        // Threshold: outside the middle third of the total list.
        const third = Math.floor(totalItems / 3);
        if (snappedIndex < third || snappedIndex > totalItems - third) {
            setTimeout(() => scrollToIndex(getIndexForValue(value), "instant"), 300);
        }
        onSelect(value);
    }, [
        values,
        totalItems,
        paddingItems,
        scrollToIndex,
        getIndexForValue,
        onSelect,
    ]);
    useEffect(() => {
        const el = scrollRef.current;
        if (!el)
            return;
        const handleScroll = () => {
            clearTimeout(snapTimer.current);
            snapTimer.current = setTimeout(() => snapToNearest(), 150);
        };
        const handleScrollEnd = () => {
            clearTimeout(snapTimer.current);
            snapToNearest();
        };
        el.addEventListener("scroll", handleScroll, { passive: true });
        el.addEventListener("scrollend", handleScrollEnd, { passive: true });
        return () => {
            el.removeEventListener("scroll", handleScroll);
            el.removeEventListener("scrollend", handleScrollEnd);
            clearTimeout(snapTimer.current);
        };
    }, [snapToNearest]);
    return { scrollRef };
}

/**
 * A single infinite-scroll drum-roll column for the time picker.
 *
 * Renders `values` repeated many times and uses `useInfiniteScroll`
 * to implement snap-to-item behavior with seamless looping.
 * A fixed highlight overlay indicates the selected (center) item.
 */
function TimeColumn({ values, selected, onSelect }) {
    const { scrollRef } = useInfiniteScroll({ values, selected, onSelect });
    const repeatedValues = useMemo(() => Array.from({ length: REPEAT_COUNT }, () => values).flat(), [values]);
    const columnHeight = VISIBLE_ITEMS * ITEM_HEIGHT;
    return (jsxs("div", { className: "time-column", style: { height: columnHeight, position: "relative" }, children: [jsx("div", { className: "time-column-highlight", style: {
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    right: 0,
                    height: ITEM_HEIGHT,
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                    zIndex: 1,
                } }), jsxs("div", { ref: scrollRef, className: "time-column-scroll", style: {
                    height: "100%",
                    overflowY: "scroll",
                    scrollbarWidth: "none",
                }, children: [jsx("div", { style: { height: Math.floor(VISIBLE_ITEMS / 2) * ITEM_HEIGHT } }), repeatedValues.map((value, index) => (jsx("button", { className: `input-time-buttons ${value === selected ? "selected" : ""}`, style: {
                            height: ITEM_HEIGHT,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                        }, onClick: () => onSelect(value), "aria-label": value, tabIndex: value === selected ? 0 : -1, children: value }, index))), jsx("div", { style: { height: Math.floor(VISIBLE_ITEMS / 2) * ITEM_HEIGHT } })] })] }));
}

const HOURS = buildRange(23);
const MINUTES = buildRange(59);
/**
 * `InputTime` is a time selection field with a drum-roll picker dropdown.
 *
 * The picker uses an infinite scroll column (iOS-style) for both hours and
 * minutes — the list loops seamlessly so the user can scroll in either
 * direction without hitting a boundary. Items snap to the center on scroll end.
 *
 * The input also supports direct typing with auto-masking (`HH:MM`).
 *
 * @example
 * ```tsx
 * // Uncontrolled
 * <InputTime label="Start time" placeholder="HH:MM" onChange={console.log} />
 *
 * // Controlled
 * <InputTime label="Meeting time" placeholder="HH:MM" value={time} onChange={setTime} />
 * ```
 */
const InputTime = ({ label, placeholder, disabled = false, error = false, textError, onChange, value, ...rest }) => {
    const modalRef = useRef(null);
    const { isOpen, selectedHour, selectedMinute, displayValue, togglePicker, closePicker, handleHourSelect, handleMinuteSelect, handleInputChange, } = useInputTime({ value, onChange });
    useClickOutside(modalRef, closePicker);
    return (jsxs("div", { className: "input-time", ref: modalRef, children: [jsx(Input, { label: label, type: "text", value: displayValue, placeholder: placeholder, icon: "schedule", disabled: disabled, onClick: togglePicker, onChange: handleInputChange, error: error, textError: textError, inputMode: "numeric", pattern: "[0-9]*", ...rest }), isOpen && (jsxs("div", { className: "input-time-modal", children: [jsx("div", { className: "modal-section", children: jsx(TimeColumn, { values: HOURS, selected: selectedHour, onSelect: handleHourSelect }) }), jsx("div", { className: "modal-section", children: jsx(TimeColumn, { values: MINUTES, selected: selectedMinute, onSelect: handleMinuteSelect }) })] }))] }));
};

export { InputTime as I };
