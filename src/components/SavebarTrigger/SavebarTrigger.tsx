import React, { useState, useEffect, ReactNode, ReactElement } from "react";
import SaveBar from "../SaveBar/SaveBar";
import Progress from "../Progress/Progress";
import "./SavebarTrigger.scss";

interface FormData {
  [key: string]: string;
}

interface SavebarTriggerProps {
  children: ReactNode;
  formChanged: boolean;
  handleSubmit: () => void;
  handleCancel: () => void;
  label: string;
  labelSave: string;
  labelCancel: string;
}

const SavebarTrigger: React.FC<SavebarTriggerProps> = ({
  children,
  formChanged,
  handleSubmit,
  label,
  handleCancel: handleCancelProp,
  labelSave,
  labelCancel,
}) => {
  const [formData, setFormData] = useState<FormData>({});
  const [tamanhoPai, setTamanhoPai] = useState<number | null>(null);
  const [saving, setSaving] = useState<boolean>(false);
  const [progressValue, setProgressValue] = useState<number>(0); 
  const [elapsedTime, setElapsedTime] = useState<number | null>(null);

  useEffect(() => {
    const updateTamanhoPai = () => {
      const paiElement = document.querySelector(
        ".header-root",
      ) as HTMLElement | null;
      if (paiElement) {
        setTamanhoPai(paiElement.offsetWidth);
      }
    };

    updateTamanhoPai();

    window.addEventListener("resize", updateTamanhoPai);

    return () => {
      window.removeEventListener("resize", updateTamanhoPai);
    };
  }, []);

  const estiloFilha = tamanhoPai ? { width: `calc(${tamanhoPai}px)` } : {};

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    console.log("Alterações canceladas");
    setSaving(false);
    setProgressValue(0);
    setElapsedTime(null);
    handleCancelProp();
  };

  const handleSave = () => {
    setSaving(true); 
    const totalTime = 500;
    const incrementInterval = 50; 
    const totalIncrements = totalTime / incrementInterval; 
    const incrementAmount = 100 / totalIncrements;
    let currentProgress = 0; 

    const intervalId = setInterval(() => {
      currentProgress += incrementAmount;
      setProgressValue(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(intervalId);
        setTimeout(() => {
          setSaving(false);
          setProgressValue(0);
        }, 500);
      }
      handleSubmit();
    }, incrementInterval); 
  };

  const modifyChild = (child: React.ReactNode, index: number) => {
    if (React.isValidElement(child)) {
      const { name } = child.props;
      return React.cloneElement(child as ReactElement, {
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          handleInputChange(name, e.target.value);
        },
        value: formData[name] || "", 
        name,
      });
    }
    return child;
  };

  const modifiedChildren = React.Children.map(children, modifyChild);

  return (
    <div className="form-register-root">
      {saving && (
        <div className="form-register-progress">
          <Progress value={progressValue} />
        </div>
      )}
      <div className="form-register-save-bar" style={estiloFilha}>
        {formChanged && !saving && (
          <SaveBar
            labelCancel={labelCancel}
            labelSave={labelSave}
            label={label}
            onClickCancel={handleCancel}
            onClickSave={handleSave}
          />
        )}
      </div>
      <div>{modifiedChildren}</div>
    </div>
  );
};

export default SavebarTrigger;
