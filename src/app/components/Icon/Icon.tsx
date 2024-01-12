import "./Icon.scss";

interface IconProps {
  size: "sm" | "md" | "lg";
  icon: string;
  fill?: 0 | 1;
}

const Icon: React.FC<IconProps> = ({ size, fill, icon }) => {
  const sizeClass = size;
  const fillStyle = `'FILL' ${fill || 0}`;

  return (
    <>
      <span
        style={{ fontVariationSettings: fillStyle }}
        className={`material-symbols-outlined ${sizeClass}`}
      >
        {icon}
      </span>
    </>
  );
};

export default Icon;
