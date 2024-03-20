import Button from "../Button/Button";
import "./ButtonGroup.scss";

type ButtonVariant = "primary" | "secondary" | "success" | "warning";

interface ButtonGroupProps {
  disableFirstButton?: boolean;
  disableSecondButton?: boolean;
  direction: "row" | "column";
  variantFirstButton: ButtonVariant;
  variantSecondButton: ButtonVariant;
  contentFirstButton: string;
  contentSecondButton: string;
  typeIconFirstButton?: string;
  typeIconSecondButton?: string;
  onClickFirstButton?: (e: React.MouseEvent) => void;
  onClickSecondButton?: (e: React.MouseEvent) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  direction,
  onClickSecondButton,
  typeIconSecondButton,
  contentSecondButton,
  variantSecondButton,
  disableSecondButton,
  disableFirstButton,
  onClickFirstButton,
  contentFirstButton,
  typeIconFirstButton,
  variantFirstButton,
}) => {
  return (
    <>
      <div className={`button-group ${direction}`}>
        <Button
          size="md"
          disabled={disableFirstButton}
          onClick={onClickFirstButton}
          label={contentFirstButton}
          typeIcon={typeIconFirstButton}
          variant={variantFirstButton}
        />
        <Button
          size="md"
          disabled={disableSecondButton}
          onClick={onClickSecondButton}
          label={contentSecondButton}
          typeIcon={typeIconSecondButton}
          variant={variantSecondButton}
        />
      </div>
    </>
  );
};

export default ButtonGroup;
