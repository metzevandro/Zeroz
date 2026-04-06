export { A as AppShell } from './AppShell-ivqc1qoe.js';
export { A as Aside, a as AsideContent, b as AsideFooter, u as useAside } from './useAside-5WUt7zjx.js';
import './Avatar-CcNXADW-.js';
import './Badge-wZ0tYI1n.js';
import './Brand-B8BMxunc.js';
import './Breadcrumb-dBR9u4WB.js';
export { B as Button, B as ButtonComponent } from './Button-CX8HjbAK.js';
import './ButtonIcon-DWB2zXvl.js';
export { c as CardContent, d as CardFooter, b as CardHeader, a as CardImage } from './Card-sW5ig-bf.js';
export { C as CardDropdown } from './Carddropdown-BJMvmAfQ.js';
export { C as Checkbox } from './Checkbox-CYLfDHHd.js';
export { D as DatePicker } from './DataPicker-C_6WTX-o.js';
export { D as DataTable } from './DataTable-3vU-pM3W.js';
export { D as DescriptionList } from './DescriptionList-DCeS3iBm.js';
export { b as Dropdown, a as DropdownItem, D as DropdownTitle } from './Dropdown-BEXhdcTr.js';
export { E as EmptyState } from './EmptyState-DM0C-SUZ.js';
export { F as FileUploader } from './FileUploader-iYIx-z4T.js';
export { H as Header, a as HeaderProfile } from './HeaderProfile-BZ0QIx8_.js';
export { I as Icon } from './Icon-93G3RH-i.js';
export { I as Image } from './Image-DeetXkYr.js';
export { I as ImageUploader } from './ImageUploader-BqH4XHsa.js';
export { I as Input } from './Input-tFlJmOA5.js';
export { I as InputNumber } from './InputNumber-CkI6zm8X.js';
export { I as InputSearch } from './InputSearch-Cp_POJCm.js';
export { I as InputSelect } from './InputSelect-DjVKJHTW.js';
export { T as TextArea } from './TextArea-Ds900mA0.js';
export { I as InputTime } from './InputTime-6_dI3S-e.js';
import './Layout-jIzbyJMp.js';
export { L as Link } from './Link-CEdlCzxX.js';
export { L as Loading } from './Loading-DHMiKOAP.js';
export { C as ContentModal, F as FooterModal, M as Modal } from './ModalSlots-Y_q5GZEM.js';
export { N as Notification, a as NotificationContainer } from './NotificationContainer-j7vSuH4G.js';
export { P as Page } from './Page-C62LhPyD.js';
export { P as Pagination } from './Pagination-Iif0t6it.js';
export { P as Progress } from './Progress-C6p1sVTR.js';
export { P as ProgressIndicator } from './ProgressIndicator-Cc0ruAK_.js';
export { R as RadioButton } from './RadioButton-201hXkVG.js';
import './Savebar-jjGzvADE.js';
import './SavebarTrigger-BIHZ-H12.js';
export { S as Sidebar, b as SidebarItem, c as SidebarSubItem, a as SidebarTitle } from './SidebarSubItem-sxDvfbSk.js';
export { S as Skeleton } from './Skeleton-CvObjom8.js';
export { S as Slider } from './Slider-Cyoukcav.js';
export { S as Switch } from './Switch-CaUecgPL.js';
export { T as TableList } from './TableList-9kK8I2fQ.js';
export { T as Tabs } from './Tabs-DzQple3V.js';
export { T as Tag } from './Tag-BEs2U7Td.js';
export { T as Tooltip } from './Tooltip-DsjqsHqZ.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { BarChart as BarChart$1, CartesianGrid, XAxis, Tooltip, Legend, Bar, LabelList, LineChart as LineChart$1, Line, PieChart as PieChart$1, Pie, Cell, Label } from 'recharts';
import React, { useState, useEffect } from 'react';
import 'react-dom';

const CustomTooltip = ({ active, payload, label, formatter, }) => {
    if (active && payload && payload.length) {
        return (jsxs("div", { className: "TooltipContent", children: [jsx("small", { className: "label", children: `${label ? label : ""}` }), payload.slice(0, 10).map((entry, index) => {
                    let valueContent = entry.value;
                    if (formatter) {
                        const formatted = formatter(entry.value ?? 0, entry.name ?? "", entry, index, payload);
                        valueContent = Array.isArray(formatted)
                            ? formatted.join(" ")
                            : formatted;
                    }
                    return (jsxs("div", { style: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                        }, children: [(entry.color || entry.payload.fill) && (jsx("div", { style: {
                                    borderRadius: "2px",
                                    width: 10,
                                    height: 10,
                                    backgroundColor: entry.color || entry.payload.fill,
                                } })), jsxs("div", { style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    gap: "var(--s-spacing-nano)",
                                    alignItems: "center",
                                }, children: [jsx("small", { className: "intro", style: {
                                            color: "var(--s-color-content-light)",
                                        }, children: `${entry.name ? entry.name : ""}: ` }), jsx("small", { style: { color: "var(--s-color-content-default)" }, children: valueContent })] })] }, `item-${index}`));
                })] }));
    }
    return null;
};

function CustomCaption({ payload = [] }) {
    return (jsx("div", { style: {
            display: "flex",
            justifyContent: "center",
            gap: "var(--s-spacing-small)",
            marginTop: "var(--s-spacing-medium)",
        }, children: payload.map((entry, index) => (jsxs("div", { style: {
                display: "flex",
                alignItems: "center",
                gap: "var(--s-spacing-nano)",
                position: "relative",
            }, children: [jsx("div", { style: {
                        backgroundColor: entry.color,
                        width: 8,
                        height: 8,
                        borderRadius: "100%",
                        marginRight: "var(--s-spacing-nano)",
                    } }), jsx("small", { style: {
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
    const [skeletonData, setSkeletonData] = useState(() => Array.from({ length: SKELETON_ROW_COUNT$1 }, generateSkeletonRow$1));
    useEffect(() => {
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
    return (jsxs(BarChart$1, { accessibilityLayer: true, data: displayData, height: height, width: width, margin: { top: 20, left: 20, right: 20 }, children: [jsx(CartesianGrid, { vertical: false, stroke: "var(--s-color-border-default)" }), jsx(XAxis, { dataKey: "month", tickLine: false, tickMargin: 10, axisLine: false, tickFormatter: xAxisFormatter, style: { font: "var(--s-typography-caption-regular)" }, stroke: "var(--s-color-content-light)" }), !skeleton && (jsx(Tooltip, { formatter: tooltipFormatter, content: jsx(CustomTooltip, {}) })), !skeleton && caption && jsx(Legend, { content: jsx(CustomCaption, {}) }), seriesKeys.map((key, index) => {
                const radius = resolveBarRadius(index, seriesKeys.length, stacked);
                const color = skeleton
                    ? SKELETON_BAR_COLOR
                    : (seriesStyles[key]?.color ?? "black");
                return (jsx(Bar, { dataKey: key, stackId: stacked ? "a" : undefined, fill: color, stroke: color, radius: radius, children: !skeleton && label && (jsx(LabelList, { position: "top", style: { font: "var(--s-typography-caption-regular)" }, fill: "var(--s-color-content-light)", offset: 12 })) }, key));
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
    const [skeletonData, setSkeletonData] = useState(() => Array.from({ length: SKELETON_ROW_COUNT }, generateSkeletonRow));
    useEffect(() => {
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
    return (jsxs(LineChart$1, { height: height, width: width, accessibilityLayer: true, data: displayData, margin: { top: 20, left: 20, right: 20 }, children: [jsx(CartesianGrid, { vertical: false, stroke: "var(--s-color-border-default)" }), jsx(XAxis, { dataKey: "month", tickLine: false, tickMargin: 10, axisLine: false, tickFormatter: xAxisFormatter, style: { font: "var(--s-typography-caption-regular)" }, stroke: "var(--s-color-content-light)" }), !skeleton && caption && jsx(Legend, { content: jsx(CustomCaption, {}) }), !skeleton && (jsx(Tooltip, { cursor: false, formatter: tooltipFormatter, content: jsx(CustomTooltip, {}) })), seriesKeys.map((key) => {
                const color = skeleton
                    ? SKELETON_LINE_COLOR
                    : (seriesStyles[key]?.color ?? "black");
                return (jsx(Line, { dataKey: key, type: curveType, stroke: color, strokeWidth: 2, dot: dots, children: !skeleton && label && (jsx(LabelList, { dataKey: key, position: "top", style: { font: "var(--s-typography-caption-regular)" }, fill: "var(--s-color-content-light)", offset: 12 })) }, key));
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
    const [progress, setProgress] = useState(0);
    useEffect(() => {
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
    return (jsxs(PieChart$1, { height: height, width: width, margin: { top: 20, left: 20, right: 20 }, children: [!skeleton && (jsx(Tooltip, { formatter: tooltipFormatter, content: ({ active, payload, label: ttLabel }) => {
                    if (!active || !payload?.length)
                        return null;
                    const item = payload[0].payload;
                    // Fatia "Outros" — exibe subitens detalhados
                    if (item.keyName === "Outros" && item.others?.length) {
                        return (jsxs("div", { className: "TooltipContent pie-chart-tooltip", children: [jsxs("div", { className: "tooltip-others-header", children: [jsx("div", { className: "tooltip-color-dot", style: { backgroundColor: item.fill } }), jsxs("div", { className: "tooltip-row", children: [jsx("small", { className: "tooltip-label", children: "Outros:" }), jsx("small", { className: "tooltip-value", children: tooltipFormatter
                                                        ? formatTooltipValue(item.quantity, item.keyName)
                                                        : item.quantity })] })] }), jsx("div", { children: item.others.map((o, idx) => (jsxs("div", { className: "tooltip-row", children: [jsxs("small", { className: "tooltip-label", children: [o.keyName, ":"] }), jsx("small", { className: "tooltip-value", children: tooltipFormatter
                                                    ? formatTooltipValue(o.quantity, o.keyName)
                                                    : o.quantity })] }, idx))) })] }));
                    }
                    return (jsx(CustomTooltip, { active: active, payload: payload, label: ttLabel, formatter: tooltipFormatter }));
                } })), !skeleton && caption && (jsx(Legend, { content: (props) => (jsx(CustomCaption, { ...props, width: typeof props.width === "string"
                        ? Number(props.width)
                        : props.width, height: typeof props.height === "string"
                        ? Number(props.height)
                        : props.height })) })), jsxs(Pie, { data: displayData, dataKey: dataKey, nameKey: nameKey, innerRadius: skeleton ? 0 : type === "donut" ? innerRadius : 0, outerRadius: outerRadius, strokeWidth: 1, isAnimationActive: !skeleton, children: [displayData.map((entry, index) => {
                        const color = resolveCellColor(entry, index);
                        return jsx(Cell, { fill: color, stroke: color }, `cell-${index}`);
                    }), type === "donut" && (jsx(Label, { content: ({ viewBox }) => {
                            if (!viewBox || !("cx" in viewBox) || !("cy" in viewBox)) {
                                return null;
                            }
                            const { cx, cy } = viewBox;
                            return (jsxs("text", { x: cx, y: cy, textAnchor: "middle", dominantBaseline: "middle", children: [jsx("tspan", { style: {
                                            font: "var(--s-typography-heading-medium)",
                                            fill: skeleton
                                                ? "transparent"
                                                : "var(--s-color-content-default)",
                                        }, x: cx, y: cy, children: skeleton
                                            ? ""
                                            : labelFormatter
                                                ? labelFormatter(totalQuantity)
                                                : totalQuantity }), jsx("tspan", { style: {
                                            font: "var(--s-typography-caption-regular)",
                                            fill: skeleton
                                                ? "transparent"
                                                : "var(--s-color-content-light)",
                                        }, x: cx, y: cy + 24, children: skeleton ? "" : label })] }));
                        } }))] })] }));
};
PieChart.displayName = "PieChart";

export { BarChart, LineChart, PieChart };
