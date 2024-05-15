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
}

const SavebarTrigger: React.FC<SavebarTriggerProps> = ({
  children,
  formChanged,
  handleSubmit,
  handleCancel: handleCancelProp, // Renomeie handleCancel para evitar conflitos de nomes
}) => {
  const [formData, setFormData] = useState<FormData>({});
  const [tamanhoPai, setTamanhoPai] = useState<number | null>(null);
  const [saving, setSaving] = useState<boolean>(false);
  const [progressValue, setProgressValue] = useState<number>(0); // Progresso inicial é 0%
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
    // Chame a função handleCancel recebida por props
    handleCancelProp();
  };

  const handleSave = () => {
    setSaving(true); // Define saving como true ao clicar em Save
    const totalTime = 500; // Tempo total em milissegundos para alcançar 100%
    const incrementInterval = 50; // Intervalo de tempo em milissegundos entre cada incremento
    const totalIncrements = totalTime / incrementInterval; // Número total de incrementos
    const incrementAmount = 100 / totalIncrements; // Quantidade de incremento para cada intervalo

    let currentProgress = 0; // Inicializa o progresso atual como 0
    const intervalId = setInterval(() => {
      // Aumenta o valor do progresso gradualmente até 100%
      currentProgress += incrementAmount;
      setProgressValue(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(intervalId); // Limpa o intervalo quando o progresso atinge 100%
        setTimeout(() => {
          // Após um breve intervalo, redefine os estados para o estado inicial
          setSaving(false);
          setProgressValue(0);
        }, 500); // Define aqui o tempo em milissegundos antes de redefinir o estado
      }
      handleSubmit();
    }, incrementInterval); // Define aqui o intervalo de tempo entre cada aumento do progresso
  };

  const modifyChild = (child: React.ReactNode, index: number) => {
    if (React.isValidElement(child)) {
      const { name } = child.props;
      return React.cloneElement(child as ReactElement, {
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          handleInputChange(name, e.target.value);
        },
        value: formData[name] || "", // Atualiza o valor do input de acordo com o estado atual do formulário
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
          <SaveBar onClickCancel={handleCancel} onClickSave={handleSave} />
        )}
      </div>
      <div>{modifiedChildren}</div>
    </div>
  );
};

export default SavebarTrigger;
