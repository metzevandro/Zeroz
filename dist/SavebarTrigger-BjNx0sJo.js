'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var Savebar = require('./Savebar-D6pV6nBU.js');
var Progress = require('./Progress-CvhAE7Cu.js');

/**
 * Tracks the `offsetWidth` of `.header-root` and updates on resize.
 * Used by `SavebarTrigger` to pin the SaveBar width to the header container.
 */
function useHeaderWidth() {
    const [width, setWidth] = React.useState(null);
    React.useEffect(() => {
        const update = () => {
            const el = document.querySelector(".header-root");
            if (el)
                setWidth(el.offsetWidth);
        };
        update();
        const observer = new ResizeObserver(update);
        const el = document.querySelector(".header-root");
        if (el)
            observer.observe(el);
        return () => observer.disconnect();
    }, []);
    return width;
}

const TOTAL_MS = 500;
const TICK_MS = 50;
const INCREMENT = 100 / (TOTAL_MS / TICK_MS);
const RESET_DELAY_MS = 400;
/**
 * Manages the animated progress bar shown during a save operation.
 * Increments from 0 → 100 over `TOTAL_MS`, then calls `onComplete`
 * and resets after a short delay.
 */
function useSaveProgress() {
    const [saving, setSaving] = React.useState(false);
    const [progressValue, setProgressValue] = React.useState(0);
    const resetSave = () => {
        setSaving(false);
        setProgressValue(0);
    };
    const startSave = (onComplete) => {
        setSaving(true);
        let current = 0;
        let called = false;
        const id = setInterval(() => {
            current += INCREMENT;
            setProgressValue(Math.min(current, 100));
            if (current >= 100) {
                clearInterval(id);
                if (!called) {
                    called = true;
                    onComplete();
                }
                setTimeout(resetSave, RESET_DELAY_MS);
            }
        }, TICK_MS);
    };
    return { saving, progressValue, startSave, resetSave };
}

/**
 * Returns `true` when every key in both objects has the same value.
 * Treats `undefined` and `""` as equivalent (empty field).
 */
function isFormUnchanged(a, b) {
    const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
    return [...keys].every((k) => (a[k] ?? "") === (b[k] ?? ""));
}

/**
 * Tracks form field values and derives `formChanged` by comparing
 * current values against `initialValues`.
 *
 * - Initializes `formData` from `initialValues`
 * - Re-syncs when `initialValues` changes (e.g. after a successful server fetch)
 * - `formChanged` is `true` when any field differs from `initialValues`
 * - `resetToInitial` restores all fields to `initialValues`
 * - `commitSaved` updates the baseline to the current values post-save
 */
function useFormTracker({ initialValues, }) {
    const [formData, setFormData] = React.useState({ ...initialValues });
    const savedRef = React.useRef({ ...initialValues });
    React.useEffect(() => {
        setFormData({ ...initialValues });
        savedRef.current = { ...initialValues };
    }, [JSON.stringify(initialValues)]);
    const formChanged = !isFormUnchanged(savedRef.current, formData);
    const handleInputChange = React.useCallback((name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    }, []);
    const resetToInitial = React.useCallback(() => {
        setFormData({ ...savedRef.current });
    }, []);
    const commitSaved = React.useCallback(() => {
        savedRef.current = { ...formData };
    }, [formData]);
    const injectControlledProps = React.useCallback((child) => {
        if (!React.isValidElement(child))
            return child;
        const { name } = child.props;
        if (!name)
            return child;
        return React.cloneElement(child, {
            value: formData[name] ?? "",
            onChange: (e) => handleInputChange(name, e.target.value),
            name,
        });
    }, [formData, handleInputChange]);
    return {
        formData,
        formChanged,
        resetToInitial,
        commitSaved,
        injectControlledProps,
    };
}

/**
 * `SavebarTrigger` is a form wrapper that automatically shows a fixed `SaveBar`
 * when any named child input differs from `initialValues`.
 *
 * Pass `initialValues` with the last-saved field values. The component
 * compares current input values against them on every keystroke — the SaveBar
 * appears when anything changes and disappears when everything is reverted.
 *
 * @example
 * ```tsx
 * const [saved, setSaved] = useState({ name: "Jane", email: "jane@example.com" });
 *
 * <SavebarTrigger
 *   initialValues={saved}
 *   onSubmit={(values) => setSaved(values)}
 *   label="You have unsaved changes"
 *   labelSave="Save"
 *   labelCancel="Cancel"
 * >
 *   <Input name="name"  label="Name"  />
 *   <Input name="email" label="Email" />
 * </SavebarTrigger>
 * ```
 */
const SavebarTrigger = ({ children, initialValues, onSubmit, onCancel, label = "You have unsaved changes", labelSave = "Save", labelCancel = "Cancel", }) => {
    const headerWidth = useHeaderWidth();
    const { saving, progressValue, startSave, resetSave } = useSaveProgress();
    const { formData, formChanged, resetToInitial, commitSaved, injectControlledProps, } = useFormTracker({ initialValues });
    const saveBarStyle = headerWidth ? { width: `${headerWidth}px` } : {};
    const handleSave = () => {
        startSave(() => {
            commitSaved();
            onSubmit(formData);
        });
    };
    const handleCancel = () => {
        resetSave();
        resetToInitial();
        onCancel?.();
    };
    const modifiedChildren = React.Children.map(children, injectControlledProps);
    return (jsxRuntime.jsxs("div", { className: "form-register-root", children: [saving && (jsxRuntime.jsx("div", { className: "form-register-progress", children: jsxRuntime.jsx(Progress.Progress, { value: progressValue }) })), jsxRuntime.jsx("div", { className: "form-register-save-bar", style: saveBarStyle, children: formChanged && !saving && (jsxRuntime.jsx(Savebar.Savebar, { label: label, labelSave: labelSave, labelCancel: labelCancel, onClickSave: handleSave, onClickCancel: handleCancel })) }), jsxRuntime.jsx("div", { children: modifiedChildren })] }));
};
SavebarTrigger.displayName = "SavebarTrigger";

exports.SavebarTrigger = SavebarTrigger;
