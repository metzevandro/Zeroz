'use strict';

var AppShell = require('./AppShell-B21BhD9k.js');
var useAside = require('./useAside-BhtH5yDW.js');
require('./Avatar-DXpNIyf-.js');
require('./Badge-C7dp9eyi.js');
require('./Brand-DIre-fJE.js');
require('./Breadcrumb-mzGIIrHm.js');
var Button = require('./Button-CzlgwZOQ.js');
require('./ButtonIcon-D_zBPQVl.js');
var Card = require('./Card-CFqNqJtP.js');
var Carddropdown = require('./Carddropdown-7YRoeVxo.js');
var Checkbox = require('./Checkbox-BRo1-vUi.js');
var DataPicker = require('./DataPicker-CHn3V_CM.js');
var DataTable = require('./DataTable-CG6t4DHK.js');
var DescriptionList = require('./DescriptionList-cIn-0Ubo.js');
var Dropdown = require('./Dropdown-Df2CnmB1.js');
var EmptyState = require('./EmptyState-BwOewAIp.js');
var FileUploader = require('./FileUploader-D-kJ8Vs_.js');
var HeaderProfile = require('./HeaderProfile-BXM5cXOv.js');
var Icon = require('./Icon-BUoiqqF-.js');
var Image = require('./Image-zhgx1kv3.js');
var ImageUploader = require('./ImageUploader-ChAvLE_K.js');
var Input = require('./Input-a2RZGh4A.js');
var InputNumber = require('./InputNumber-CzMuSSab.js');
var InputSearch = require('./InputSearch-D_yDg_jR.js');
var InputSelect = require('./InputSelect-CuCkpDc3.js');
var TextArea = require('./TextArea-DnQFCMs_.js');
var InputTime = require('./InputTime-p2UbKuAa.js');
require('./Layout-D6P7ErLj.js');
var Link = require('./Link-vV25O-FN.js');
var Loading = require('./Loading-DUId8axY.js');
var ModalSlots = require('./ModalSlots-DpHYv87M.js');
var NotificationContainer = require('./NotificationContainer-BATGFbgB.js');
var Page = require('./Page-CW11aV6e.js');
var Pagination = require('./Pagination-BXch9eFJ.js');
var Progress = require('./Progress-CvhAE7Cu.js');
var ProgressIndicator = require('./ProgressIndicator-Czu3DaY1.js');
var RadioButton = require('./RadioButton-BgjGQWQD.js');
require('./Savebar-D6pV6nBU.js');
require('./SavebarTrigger-BjNx0sJo.js');
var SidebarSubItem = require('./SidebarSubItem-y-4AX6RJ.js');
var Skeleton = require('./Skeleton-CzoMYdQv.js');
var Slider = require('./Slider-CqPqrQ12.js');
var Switch = require('./Switch-CmvASsQS.js');
var TableList = require('./TableList-BLNctTxh.js');
var Tabs = require('./Tabs-DoI-MzVJ.js');
var Tag = require('./Tag-DzKIs37H.js');
var Tooltip = require('./Tooltip-DZrnbaGn.js');
var jsxRuntime = require('react/jsx-runtime');
var recharts = require('recharts');
var React = require('react');
require('react-dom');

const CustomTooltip = ({ active, payload, label, formatter, }) => {
    if (active && payload && payload.length) {
        return (jsxRuntime.jsxs("div", { className: "TooltipContent", children: [jsxRuntime.jsx("small", { className: "label", children: `${label ? label : ""}` }), payload.slice(0, 10).map((entry, index) => {
                    let valueContent = entry.value;
                    if (formatter) {
                        const formatted = formatter(entry.value ?? 0, entry.name ?? "", entry, index, payload);
                        valueContent = Array.isArray(formatted)
                            ? formatted.join(" ")
                            : formatted;
                    }
                    return (jsxRuntime.jsxs("div", { style: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                        }, children: [(entry.color || entry.payload.fill) && (jsxRuntime.jsx("div", { style: {
                                    borderRadius: "2px",
                                    width: 10,
                                    height: 10,
                                    backgroundColor: entry.color || entry.payload.fill,
                                } })), jsxRuntime.jsxs("div", { style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    gap: "var(--s-spacing-nano)",
                                    alignItems: "center",
                                }, children: [jsxRuntime.jsx("small", { className: "intro", style: {
                                            color: "var(--s-color-content-light)",
                                        }, children: `${entry.name ? entry.name : ""}: ` }), jsxRuntime.jsx("small", { style: { color: "var(--s-color-content-default)" }, children: valueContent })] })] }, `item-${index}`));
                })] }));
    }
    return null;
};

function CustomCaption({ payload = [] }) {
    return (jsxRuntime.jsx("div", { style: {
            display: "flex",
            justifyContent: "center",
            gap: "var(--s-spacing-small)",
            marginTop: "var(--s-spacing-medium)",
        }, children: payload.map((entry, index) => (jsxRuntime.jsxs("div", { style: {
                display: "flex",
                alignItems: "center",
                gap: "var(--s-spacing-nano)",
                position: "relative",
            }, children: [jsxRuntime.jsx("div", { style: {
                        backgroundColor: entry.color,
                        width: 8,
                        height: 8,
                        borderRadius: "100%",
                        marginRight: "var(--s-spacing-nano)",
                    } }), jsxRuntime.jsx("small", { style: {
                        color: "var(--s-color-content-default)",
                        whiteSpace: "nowrap",
                    }, children: typeof entry.payload === "object" &&
                        entry.payload &&
                        "keyName" in entry.payload
                        ? entry.payload.keyName
                        : entry.value })] }, `item-${index}`))) }));
}

/**
 * Extrai as chaves de série de um objeto de dados,
 * excluindo a chave reservada do eixo X (`month`).
 */
function extractSeriesKeys$1(dataRow) {
    return Object.keys(dataRow).filter((key) => key !== "month");
}
/**
 * Resolve o `borderRadius` de uma barra com base na sua posição
 * na pilha (modo stacked) ou como barra isolada.
 */
function resolveBarRadius(index, totalKeys, stacked) {
    if (!stacked)
        return [4, 4, 4, 4];
    if (index === 0)
        return [0, 0, 4, 4];
    if (index === totalKeys - 1)
        return [4, 4, 0, 0];
    return [0, 0, 0, 0];
}
/**
 * Gera uma linha de dados aleatória para o estado skeleton.
 * As chaves vazias (" " e "") simulam séries sem significado semântico.
 */
function generateSkeletonRow$1() {
    return {
        month: "",
        "": Math.floor(Math.random() * 100),
        " ": Math.floor(Math.random() * 100),
    };
}

const SKELETON_ROW_COUNT$1 = 10;
const SKELETON_INTERVAL_MS$1 = 1500;
/**
 * Gera e anima dados fictícios para o estado skeleton do BarChart.
 * Os dados são regenerados a cada `SKELETON_INTERVAL_MS` ms para
 * criar o efeito de animação das barras.
 */
function useSkeletonData$1() {
    const [skeletonData, setSkeletonData] = React.useState(() => Array.from({ length: SKELETON_ROW_COUNT$1 }, generateSkeletonRow$1));
    React.useEffect(() => {
        const interval = setInterval(() => {
            setSkeletonData(Array.from({ length: SKELETON_ROW_COUNT$1 }, generateSkeletonRow$1));
        }, SKELETON_INTERVAL_MS$1);
        return () => clearInterval(interval);
    }, []);
    return skeletonData;
}

const SKELETON_BAR_COLOR = "var(--s-color-fill-default-light)";
/**
 * ## BarChart
 *
 * Gráfico de barras construído sobre Recharts.
 * Suporta barras agrupadas ou empilhadas, tooltip, legenda,
 * labels de valor e estado skeleton animado.
 *
 * ### Quando usar
 * - Comparação de valores entre categorias (ex: vendas por mês)
 * - Visualização de composição proporcional (modo `stacked`)
 *
 * @example
 * // Barras agrupadas com tooltip
 * <BarChart
 *   data={[{ month: "Jan", vendas: 120, devoluções: 30 }]}
 *   seriesStyles={{ vendas: { color: "#4CAF50" }, devoluções: { color: "#F44336" } }}
 *   width={600}
 *   height={300}
 * />
 *
 * @example
 * // Empilhado com legenda e skeleton
 * <BarChart
 *   data={data}
 *   seriesStyles={styles}
 *   width={600}
 *   height={300}
 *   stacked
 *   caption
 *   skeleton={isLoading}
 * />
 */
const BarChart = ({ data, seriesStyles, height, width, stacked = false, caption = false, label = false, skeleton = false, tooltipFormatter, xAxisFormatter, }) => {
    const skeletonData = useSkeletonData$1();
    const displayData = skeleton ? skeletonData : data;
    if (!skeleton && displayData.length === 0)
        return null;
    const seriesKeys = extractSeriesKeys$1(displayData[0]);
    if (seriesKeys.length === 0)
        return null;
    return (jsxRuntime.jsxs(recharts.BarChart, { accessibilityLayer: true, data: displayData, height: height, width: width, margin: { top: 20, left: 20, right: 20 }, children: [jsxRuntime.jsx(recharts.CartesianGrid, { vertical: false, stroke: "var(--s-color-border-default)" }), jsxRuntime.jsx(recharts.XAxis, { dataKey: "month", tickLine: false, tickMargin: 10, axisLine: false, tickFormatter: xAxisFormatter, style: { font: "var(--s-typography-caption-regular)" }, stroke: "var(--s-color-content-light)" }), !skeleton && (jsxRuntime.jsx(recharts.Tooltip, { formatter: tooltipFormatter, content: jsxRuntime.jsx(CustomTooltip, {}) })), !skeleton && caption && jsxRuntime.jsx(recharts.Legend, { content: jsxRuntime.jsx(CustomCaption, {}) }), seriesKeys.map((key, index) => {
                const radius = resolveBarRadius(index, seriesKeys.length, stacked);
                const color = skeleton
                    ? SKELETON_BAR_COLOR
                    : (seriesStyles[key]?.color ?? "black");
                return (jsxRuntime.jsx(recharts.Bar, { dataKey: key, stackId: stacked ? "a" : undefined, fill: color, stroke: color, radius: radius, children: !skeleton && label && (jsxRuntime.jsx(recharts.LabelList, { position: "top", style: { font: "var(--s-typography-caption-regular)" }, fill: "var(--s-color-content-light)", offset: 12 })) }, key));
            })] }));
};
BarChart.displayName = "BarChart";

/**
 * Extrai as chaves de série de um objeto de dados,
 * excluindo a chave reservada do eixo X (`month`).
 */
function extractSeriesKeys(dataRow) {
    return Object.keys(dataRow).filter((key) => key !== "month");
}
/**
 * Gera uma linha de dados aleatória para o estado skeleton.
 */
function generateSkeletonRow() {
    return {
        month: "",
        value1: Math.floor(Math.random() * 100),
        value2: Math.floor(Math.random() * 100),
    };
}

const SKELETON_ROW_COUNT = 10;
const SKELETON_INTERVAL_MS = 1500;
/**
 * Gera e anima dados fictícios para o estado skeleton do LineChart.
 * Os dados são regenerados a cada `SKELETON_INTERVAL_MS` ms para
 * criar o efeito de animação das linhas.
 */
function useSkeletonData() {
    const [skeletonData, setSkeletonData] = React.useState(() => Array.from({ length: SKELETON_ROW_COUNT }, generateSkeletonRow));
    React.useEffect(() => {
        const interval = setInterval(() => {
            setSkeletonData(Array.from({ length: SKELETON_ROW_COUNT }, generateSkeletonRow));
        }, SKELETON_INTERVAL_MS);
        return () => clearInterval(interval);
    }, []);
    return skeletonData;
}

const SKELETON_LINE_COLOR = "var(--s-color-fill-disable)";
/**
 * ## LineChart
 *
 * Gráfico de linhas construído sobre Recharts.
 * Suporta múltiplas séries, diferentes tipos de curva, tooltip,
 * legenda, labels de valor e estado skeleton animado.
 *
 * ### Quando usar
 * - Evolução de valores ao longo do tempo (ex: receita mensal)
 * - Comparação de tendências entre séries
 *
 * @example
 * // Uso básico com duas séries
 * <LineChart
 *   data={[{ month: "Jan", receita: 120, despesas: 80 }]}
 *   seriesStyles={{
 *     receita:  { color: "#4CAF50" },
 *     despesas: { color: "#F44336" },
 *   }}
 *   width={600}
 *   height={300}
 * />
 *
 * @example
 * // Com skeleton durante carregamento
 * <LineChart
 *   data={data}
 *   seriesStyles={styles}
 *   width={600}
 *   height={300}
 *   skeleton={isLoading}
 * />
 */
const LineChart = ({ data, seriesStyles, height, width, curveType = "natural", caption = false, dots = false, label = false, skeleton = false, tooltipFormatter, xAxisFormatter, }) => {
    const skeletonData = useSkeletonData();
    const displayData = skeleton ? skeletonData : data;
    if (!displayData || displayData.length === 0)
        return null;
    const seriesKeys = extractSeriesKeys(displayData[0]);
    if (seriesKeys.length === 0)
        return null;
    return (jsxRuntime.jsxs(recharts.LineChart, { height: height, width: width, accessibilityLayer: true, data: displayData, margin: { top: 20, left: 20, right: 20 }, children: [jsxRuntime.jsx(recharts.CartesianGrid, { vertical: false, stroke: "var(--s-color-border-default)" }), jsxRuntime.jsx(recharts.XAxis, { dataKey: "month", tickLine: false, tickMargin: 10, axisLine: false, tickFormatter: xAxisFormatter, style: { font: "var(--s-typography-caption-regular)" }, stroke: "var(--s-color-content-light)" }), !skeleton && caption && jsxRuntime.jsx(recharts.Legend, { content: jsxRuntime.jsx(CustomCaption, {}) }), !skeleton && (jsxRuntime.jsx(recharts.Tooltip, { cursor: false, formatter: tooltipFormatter, content: jsxRuntime.jsx(CustomTooltip, {}) })), seriesKeys.map((key) => {
                const color = skeleton
                    ? SKELETON_LINE_COLOR
                    : (seriesStyles[key]?.color ?? "black");
                return (jsxRuntime.jsx(recharts.Line, { dataKey: key, type: curveType, stroke: color, strokeWidth: 2, dot: dots, children: !skeleton && label && (jsxRuntime.jsx(recharts.LabelList, { dataKey: key, position: "top", style: { font: "var(--s-typography-caption-regular)" }, fill: "var(--s-color-content-light)", offset: 12 })) }, key));
            })] }));
};
LineChart.displayName = "LineChart";

const DEFAULT_COLORS = [
    "var(--s-color-chart-1)",
    "var(--s-color-chart-2)",
    "var(--s-color-chart-3)",
    "var(--s-color-chart-4)",
    "var(--s-color-chart-5)",
    "var(--s-color-chart-6)",
    "var(--s-color-chart-7)",
    "var(--s-color-chart-9)",
    "var(--s-color-chart-10)",
];
const OTHERS_COLOR = "var(--s-color-chart-8)";
const MAX_VISIBLE_ITEMS = 5;
const OTHERS_LABEL = "Outros";
/**
 * Quando há mais de `MAX_VISIBLE_ITEMS` itens, agrupa os excedentes
 * (ordenados por quantidade decrescente) em uma fatia "Outros",
 * preservando os subitens para exibição detalhada no tooltip.
 */
function processChartData(data) {
    if (data.length <= MAX_VISIBLE_ITEMS)
        return data;
    const sorted = [...data].sort((a, b) => b.quantity - a.quantity);
    const mainItems = sorted.slice(0, MAX_VISIBLE_ITEMS - 1);
    const othersItems = sorted.slice(MAX_VISIBLE_ITEMS - 1);
    const othersTotal = othersItems.reduce((acc, curr) => acc + curr.quantity, 0);
    return [
        ...mainItems,
        {
            quantity: othersTotal,
            keyName: OTHERS_LABEL,
            fill: OTHERS_COLOR,
            others: othersItems,
        },
    ];
}
/**
 * Resolve a cor de preenchimento de uma célula do gráfico.
 * Fatias "Outros" sempre recebem `OTHERS_COLOR`.
 */
function resolveCellColor(entry, index) {
    if (entry.keyName === OTHERS_COLOR)
        return OTHERS_COLOR;
    return entry.fill || DEFAULT_COLORS[index % DEFAULT_COLORS.length];
}

const DURATION = 1800;
function usePieSkeletonData() {
    const [progress, setProgress] = React.useState(0);
    React.useEffect(() => {
        let start = performance.now();
        let frame;
        const animate = (time) => {
            const elapsed = time - start;
            const p = (elapsed % DURATION) / DURATION;
            setProgress(p);
            frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, []);
    return buildSkeletonData(progress);
}
function buildSkeletonData(progress) {
    const total = 100;
    // ondas suaves
    const w1 = 0.5 + 0.5 * Math.sin(progress * 2 * Math.PI);
    const w2 = 0.5 + 0.5 * Math.sin(progress * 2 * Math.PI + 2);
    const w3 = 0.5 + 0.5 * Math.sin(progress * 2 * Math.PI + 4);
    const sum = w1 + w2 + w3;
    const values = [
        Math.round((w1 / sum) * total),
        Math.round((w2 / sum) * total),
        total - Math.round((w1 / sum) * total) - Math.round((w2 / sum) * total),
    ];
    const baseData = [
        {
            quantity: values[0],
            keyName: "skeleton-a",
            fill: "var(--s-color-fill-default-light)",
        },
        {
            quantity: values[1],
            keyName: "skeleton-b",
            fill: "var(--s-color-fill-default)",
        },
        {
            quantity: values[2],
            keyName: "skeleton-c",
            fill: OTHERS_COLOR,
        },
    ];
    const shift = Math.floor(progress * baseData.length);
    return rotateArray(baseData, shift);
}
function rotateArray(arr, shift) {
    const s = shift % arr.length;
    return [...arr.slice(s), ...arr.slice(0, s)];
}

/**
 * ## PieChart
 *
 * Gráfico de pizza ou rosca construído sobre Recharts.
 * Quando há mais de 5 itens, os excedentes são agrupados
 * automaticamente em uma fatia "Outros" com tooltip detalhado.
 *
 * ### Quando usar
 * - Composição proporcional de um todo (ex: distribuição de categorias)
 * - Modo `donut` quando se quer exibir um total central
 *
 * @example
 * // Donut com total formatado
 * <PieChart
 *   type="donut"
 *   data={[{ quantity: 60, keyName: "A", fill: "#4CAF50" }]}
 *   label="transações"
 *   labelFormatter={(v) => v.toLocaleString()}
 *   dataKey="quantity"
 *   nameKey="keyName"
 *   innerRadius={60}
 *   outerRadius={90}
 *   width={300}
 *   height={300}
 * />
 */
const PieChart = ({ data, label, caption = false, innerRadius, outerRadius, type, tooltipFormatter, labelFormatter, height, width, dataKey, nameKey, skeleton = false, }) => {
    const skeletonData = usePieSkeletonData();
    const processedData = React.useMemo(() => processChartData(data), [data]);
    const displayData = skeleton ? skeletonData : processedData;
    const totalQuantity = React.useMemo(() => data.reduce((acc, curr) => acc + curr.quantity, 0), [data]);
    const formatTooltipValue = (value, name, item, index, payload) => {
        if (!tooltipFormatter)
            return value;
        return tooltipFormatter(value, name, item, 0, []);
    };
    return (jsxRuntime.jsxs(recharts.PieChart, { height: height, width: width, margin: { top: 20, left: 20, right: 20 }, children: [!skeleton && (jsxRuntime.jsx(recharts.Tooltip, { formatter: tooltipFormatter, content: ({ active, payload, label: ttLabel }) => {
                    if (!active || !payload?.length)
                        return null;
                    const item = payload[0].payload;
                    // Fatia "Outros" — exibe subitens detalhados
                    if (item.keyName === "Outros" && item.others?.length) {
                        return (jsxRuntime.jsxs("div", { className: "TooltipContent pie-chart-tooltip", children: [jsxRuntime.jsxs("div", { className: "tooltip-others-header", children: [jsxRuntime.jsx("div", { className: "tooltip-color-dot", style: { backgroundColor: item.fill } }), jsxRuntime.jsxs("div", { className: "tooltip-row", children: [jsxRuntime.jsx("small", { className: "tooltip-label", children: "Outros:" }), jsxRuntime.jsx("small", { className: "tooltip-value", children: tooltipFormatter
                                                        ? formatTooltipValue(item.quantity, item.keyName)
                                                        : item.quantity })] })] }), jsxRuntime.jsx("div", { children: item.others.map((o, idx) => (jsxRuntime.jsxs("div", { className: "tooltip-row", children: [jsxRuntime.jsxs("small", { className: "tooltip-label", children: [o.keyName, ":"] }), jsxRuntime.jsx("small", { className: "tooltip-value", children: tooltipFormatter
                                                    ? formatTooltipValue(o.quantity, o.keyName)
                                                    : o.quantity })] }, idx))) })] }));
                    }
                    return (jsxRuntime.jsx(CustomTooltip, { active: active, payload: payload, label: ttLabel, formatter: tooltipFormatter }));
                } })), !skeleton && caption && (jsxRuntime.jsx(recharts.Legend, { content: (props) => (jsxRuntime.jsx(CustomCaption, { ...props, width: typeof props.width === "string"
                        ? Number(props.width)
                        : props.width, height: typeof props.height === "string"
                        ? Number(props.height)
                        : props.height })) })), jsxRuntime.jsxs(recharts.Pie, { data: displayData, dataKey: dataKey, nameKey: nameKey, innerRadius: skeleton ? 0 : type === "donut" ? innerRadius : 0, outerRadius: outerRadius, strokeWidth: 1, isAnimationActive: !skeleton, children: [displayData.map((entry, index) => {
                        const color = resolveCellColor(entry, index);
                        return jsxRuntime.jsx(recharts.Cell, { fill: color, stroke: color }, `cell-${index}`);
                    }), type === "donut" && (jsxRuntime.jsx(recharts.Label, { content: ({ viewBox }) => {
                            if (!viewBox || !("cx" in viewBox) || !("cy" in viewBox)) {
                                return null;
                            }
                            const { cx, cy } = viewBox;
                            return (jsxRuntime.jsxs("text", { x: cx, y: cy, textAnchor: "middle", dominantBaseline: "middle", children: [jsxRuntime.jsx("tspan", { style: {
                                            font: "var(--s-typography-heading-medium)",
                                            fill: skeleton
                                                ? "transparent"
                                                : "var(--s-color-content-default)",
                                        }, x: cx, y: cy, children: skeleton
                                            ? ""
                                            : labelFormatter
                                                ? labelFormatter(totalQuantity)
                                                : totalQuantity }), jsxRuntime.jsx("tspan", { style: {
                                            font: "var(--s-typography-caption-regular)",
                                            fill: skeleton
                                                ? "transparent"
                                                : "var(--s-color-content-light)",
                                        }, x: cx, y: cy + 24, children: skeleton ? "" : label })] }));
                        } }))] })] }));
};
PieChart.displayName = "PieChart";

exports.AppShell = AppShell.AppShell;
exports.Aside = useAside.Aside;
exports.AsideContent = useAside.AsideContent;
exports.AsideFooter = useAside.AsideFooter;
exports.useAside = useAside.useAside;
exports.Button = Button.Button;
exports.ButtonComponent = Button.Button;
exports.CardContent = Card.CardContent;
exports.CardFooter = Card.CardFooter;
exports.CardHeader = Card.CardHeader;
exports.CardImage = Card.CardImage;
exports.CardDropdown = Carddropdown.CardDropdown;
exports.Checkbox = Checkbox.Checkbox;
exports.DatePicker = DataPicker.DatePicker;
exports.DataTable = DataTable.DataTable;
exports.DescriptionList = DescriptionList.DescriptionList;
exports.Dropdown = Dropdown.Dropdown;
exports.DropdownItem = Dropdown.DropdownItem;
exports.DropdownTitle = Dropdown.DropdownTitle;
exports.EmptyState = EmptyState.EmptyState;
exports.FileUploader = FileUploader.FileUploader;
exports.Header = HeaderProfile.Header;
exports.HeaderProfile = HeaderProfile.HeaderProfile;
exports.Icon = Icon.Icon;
exports.Image = Image.Image;
exports.ImageUploader = ImageUploader.ImageUploader;
exports.Input = Input.Input;
exports.InputNumber = InputNumber.InputNumber;
exports.InputSearch = InputSearch.InputSearch;
exports.InputSelect = InputSelect.InputSelect;
exports.TextArea = TextArea.TextArea;
exports.InputTime = InputTime.InputTime;
exports.Link = Link.Link;
exports.Loading = Loading.Loading;
exports.ContentModal = ModalSlots.ContentModal;
exports.FooterModal = ModalSlots.FooterModal;
exports.Modal = ModalSlots.Modal;
exports.Notification = NotificationContainer.Notification;
exports.NotificationContainer = NotificationContainer.NotificationContainer;
exports.Page = Page.Page;
exports.Pagination = Pagination.Pagination;
exports.Progress = Progress.Progress;
exports.ProgressIndicator = ProgressIndicator.ProgressIndicator;
exports.RadioButton = RadioButton.RadioButton;
exports.Sidebar = SidebarSubItem.Sidebar;
exports.SidebarItem = SidebarSubItem.SidebarItem;
exports.SidebarSubItem = SidebarSubItem.SidebarSubItem;
exports.SidebarTitle = SidebarSubItem.SidebarTitle;
exports.Skeleton = Skeleton.Skeleton;
exports.Slider = Slider.Slider;
exports.Switch = Switch.Switch;
exports.TableList = TableList.TableList;
exports.Tabs = Tabs.Tabs;
exports.Tag = Tag.Tag;
exports.Tooltip = Tooltip.Tooltip;
exports.BarChart = BarChart;
exports.LineChart = LineChart;
exports.PieChart = PieChart;
