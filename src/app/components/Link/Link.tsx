import "./Link.scss";

interface LinkProps {
  href?: string;
  content: string;
  disabled?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

const Link: React.FC<LinkProps> = ({ content, disabled, ...rest }) => {
  return (
    <>
      <a className={`link ${disabled ? "disabled" : ""}`} {...rest}>
        {content}
      </a>
    </>
  );
};

export default Link;
