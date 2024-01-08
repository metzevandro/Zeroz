import React, { useState, useEffect, ReactNode, ReactElement } from "react";
import SaveBar from "../SaveBar/SaveBar";
import Progress from "../Progress/Progress";
import "./FormRegister.scss";

interface FormData {
  [key: string]: string;
}

interface FormRegisterProps {
  children: ReactNode;
}

const FormRegister: React.FC<FormRegisterProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({});
  const [tamanhoPai, setTamanhoPai] = useState<number | null>(null);
  const [formChanged, setFormChanged] = useState<boolean>(false);
  const [saving, setSaving] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number | null>(null);

  useEffect(() => {
    const updateTamanhoPai = () => {
      const paiElement = document.querySelector(
        ".Header"
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
    if (name === "save" || name === "cancel") {
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setFormChanged(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (saving) {
      return handleSave();
    }

    setSaving(true);

    try {
      await handleSave();
    } finally {
      setSaving(false);
    }
  };

  const handleSave = async () => {
    const start = Date.now();
    setStartTime(start);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Dados salvos:", formData);
      setFormChanged(false);

      setElapsedTime((prevElapsedTime) => {
        const elapsed = Date.now() - start;
        return prevElapsedTime !== null ? prevElapsedTime + elapsed : elapsed;
      });
    } catch (error) {}
  };

  const handleCancel = () => {
    console.log("Alterações canceladas");
    setFormChanged(false);
    setSaving(false);
    setElapsedTime(null);
  };

  const modifyChild = (child: ReactNode, index: number) => {
    if (React.isValidElement(child)) {
      const { name } = child.props;
      return React.cloneElement(child as ReactElement, {
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          handleInputChange(name, e.target.value);
        },
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
          <Progress
            value={elapsedTime ? Math.min((elapsedTime / 2000) * 100, 100) : 0}
          />
        </div>
      )}
      <div className="form-register-save-bar" style={estiloFilha}>
        {formChanged && !saving && (
          <SaveBar onClickCancel={handleCancel} onClickSave={handleSubmit} />
        )}
      </div>
      <form onSubmit={handleSubmit}>{modifiedChildren}</form>
    </div>
  );
};

export default FormRegister;
