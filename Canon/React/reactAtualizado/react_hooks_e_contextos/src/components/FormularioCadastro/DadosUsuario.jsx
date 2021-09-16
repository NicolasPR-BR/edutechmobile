import React, { useState, useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import ValidacoesDeCadastro from "./contexts/ValidacoesDeCadastro";
import useErros from "../../hooks/useErros";

const DadosUsuario = ({ setStep }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  //const [erros, setErros] = useState({ senha: { valido: true, texto: "" } });
  const validacoes = useContext(ValidacoesDeCadastro);
  const [erros, validarCampos, readyToSend] = useErros(validacoes);

  function submitHandler(e) {
    e.preventDefault();
    if (readyToSend()) {
      setStep({ email, senha });
    }
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          label="email"
          type="email"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          error={!erros.senha.valido}
          helperText={erros.senha.texto}
          onBlur={validarCampos}
          name="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          id="senha"
          label="senha"
          type="password"
          required
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <Button
          onClick={submitHandler}
          type="submit"
          variant="contained"
          color="primary"
        >
          Cadastrar
        </Button>
      </form>
    </>
  );
};

export default DadosUsuario;
