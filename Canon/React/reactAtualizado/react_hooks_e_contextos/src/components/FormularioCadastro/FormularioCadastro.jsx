import React, { useState, useEffect } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { Typography, Stepper, StepLabel, Step } from "@material-ui/core";

const FormulatioCadastro = ({ handleSubmit }) => {
  const [step, setStep] = useState(0);
  const [dados, setDados] = useState("");

  const forms = [
    <DadosUsuario setStep={proximo} />,
    <DadosPessoais setStep={proximo} handleSubmit={handleSubmit} />,
    <DadosEntrega handleSubmit={proximo} dados={dados} />,
    <Typography>Cadastro realizado</Typography>,
  ];
  useEffect(() => {
    if (step === forms.length - 1) {
      handleSubmit(dados);
    }
  }, [dados]);

  function proximo(props) {
    setDados({ ...dados, ...props });
    setStep(step + 1);
  }

  const stepEvaluator = () => {
    return forms[step];
  };

  return (
    <>
      <Stepper activeStep={step}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {stepEvaluator()}
    </>
  );
};

export default FormulatioCadastro;
