interface LineChartProps {
    data: any;
    caption?: boolean;
    lineStyles: {
        [key: string]: {
            color: string;
        };
    };
    dots?: boolean;
    label?: boolean;
    tooltipFormatter?: (value: any) => string;
    XAxisFormatter?: (value: any) => string;
    height: number;
    width: number;
    type?: "basis" | "basisClosed" | "basisOpen" | "bumpX" | "bumpY" | "bump" | "linear" | "linearClosed" | "natural" | "monotoneX" | "monotoneY" | "monotone" | "step" | "stepBefore" | "stepAfter";
    skeleton?: boolean;
}
export default function LineChart(props: LineChartProps): import("react/jsx-runtime").JSX.Element | null;
export {};
