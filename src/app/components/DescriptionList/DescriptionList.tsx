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
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </>
  );
};

export default DescriptionList;
