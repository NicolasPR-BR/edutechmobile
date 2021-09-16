import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { StepButton, Typography } from "@material-ui/core";

const FormulatioCadastro = ({ handleSubmit, validarCPF }) => {
  const [step, setStep] = useState(0);

  const stepEvaluator = () => {
    switch (step) {
      case 0:
        return <DadosUsuario setStep={setStep} casse={step} />;
      case 1:
        return (
          <DadosPessoais
            setStep={setStep}
            casse={step}
            handleSubmit={handleSubmit}
            validarCPF={validarCPF}
          />
        );
      case 2:
        return <DadosEntrega setStep={setStep} casse={step} />;
      default:
        return <Typography>Erro, passo do formulário invalido</Typography>;
    }
  };

  return <>{stepEvaluator()}</>;
};

export default FormulatioCadastro;
