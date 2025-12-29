import "./Tag.scss";
type typeVariant = "primary" | "secondary" | "success" | "warning";
interface TagProps {
    content: string;
    variant: typeVariant;
    onClose?: () => void;
}
declare function Tag(props: TagProps): import("react/jsx-runtime").JSX.Element;
export default Tag;
