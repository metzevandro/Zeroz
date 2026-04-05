'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

/**
 * Detects whether an element's content overflows its visible width.
 * Uses `ResizeObserver` for accurate tracking when the container is resized.
 *
 * The `isOverflowed` flag is used to apply a CSS class that enables
 * a horizontal scroll shadow/indicator on the table.
 */
function useOverflowDetection() {
    const containerRef = React.useRef(null);
    const [isOverflowed, setIsOverflowed] = React.useState(false);
    React.useEffect(() => {
        const el = containerRef.current;
        if (!el)
            return;
        const check = () => setIsOverflowed(el.scrollWidth > el.clientWidth);
        check();
        const observer = new ResizeObserver(check);
        observer.observe(el);
        return () => observer.disconnect();
    }, []);
    return { containerRef, isOverflowed };
}

/**
 * Transposes a row-major 2D array into a column-major one.
 *
 * The original data format is rows × columns (each row = one entry).
 * The table renders column-by-column, so we transpose to columns × rows
 * so each column div gets all its cells in order.
 *
 * @example
 * Input (rows):    [["Alice", "Eng"], ["Bob", "Design"]]
 * Output (cols):   [["Alice", "Bob"], ["Eng", "Design"]]
 */
function transposeData(columns, data) {
    return columns.map((_, colIndex) => data.map((row) => row[colIndex]));
}

/**
 * Renders the table header row with column labels.
 */
function TableHeader({ columns }) {
    return (jsxRuntime.jsx("div", { className: "table-container", children: columns.map((column, index) => (jsxRuntime.jsx("div", { className: "th", children: column }, index))) }));
}

/**
 * Renders the table body as a set of column divs,
 * each containing the cells for that column.
 */
function TableBody({ columns, size }) {
    return (jsxRuntime.jsx("div", { className: "table-container", children: columns.map((column, colIndex) => (jsxRuntime.jsx("div", { className: "table-column", children: column.map((cell, cellIndex) => (jsxRuntime.jsx("div", { className: `td ${size} border`, children: cell }, cellIndex))) }, colIndex))) }));
}

/**
 * `TableList` renders a column-oriented data table with header labels,
 * configurable cell density, and automatic horizontal scroll detection.
 *
 * When the table content overflows its container width, the `overflow-ativo`
 * class is applied — typically used in CSS to show a scroll shadow or indicator.
 *
 * Cell content accepts any `React.ReactNode`, so you can render icons, badges,
 * or custom components alongside plain text.
 *
 * @example
 * ```tsx
 * <TableList
 *   size="md"
 *   columns={["Name", "Role", "Status"]}
 *   data={[
 *     ["Alice", "Engineer", <Tag content="Active" variant="success" />],
 *     ["Bob",   "Designer", <Tag content="Away"   variant="warning" />],
 *   ]}
 * />
 * ```
 */
const TableList = ({ columns, data, size }) => {
    const { containerRef, isOverflowed } = useOverflowDetection();
    const transposedData = transposeData(columns, data);
    return (jsxRuntime.jsx("div", { className: `table-list-root ${isOverflowed ? "overflow-ativo" : ""}`, ref: containerRef, children: jsxRuntime.jsxs("div", { className: "table", children: [jsxRuntime.jsx(TableHeader, { columns: columns }), jsxRuntime.jsx(TableBody, { columns: transposedData, size: size })] }) }));
};

exports.TableList = TableList;
