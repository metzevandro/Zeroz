import "./DescriptionList.scss";

interface DescriptionListProps {
  title: string;
  description?: string;
  direction: "row" | "column";
}

const DescriptionList: React.FC<DescriptionListProps> = ({
  title,
  description,
  direction,
}) => {
  return (
    <>
      <div className={`description-list-root ${direction}`}>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </>
  );
};

export default DescriptionList;
