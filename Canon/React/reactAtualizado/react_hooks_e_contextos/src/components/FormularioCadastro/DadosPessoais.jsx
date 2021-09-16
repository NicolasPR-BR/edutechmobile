import React, { useState, useContext } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesDeCadastro from "./contexts/ValidacoesDeCadastro";
import useErros from "../../hooks/useErros";

const DadosPessoais = ({ handleSubmit, setStep }) => {
  const [nome, setNome] = useState("");
  const [sobreNome, setSobreNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(ValidacoesDeCadastro);
  const [erros, validarCampos, readyToSend] = useErros(validacoes);

  const enviar = (e) => {
    e.preventDefault();
    if (readyToSend()) {
      setStep({ nome, sobreNome, cpf, promocoes, novidades, erros });
    }
  };

  return (
    <>
      <form onSubmit={(e) => enviar(e)} style={{ textAlign: "center" }}>
        <TextField
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          margin="normal"
          variant="outlined"
          id="nome"
          label="nome"
          fullWidth
        />
        <TextField
          value={sobreNome}
          onChange={(e) => setSobreNome(e.target.value)}
          id="Sobrenome"
          label="Sobrenome"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          error={!erros.cpf.valido}
          helperText={erros.cpf.texto}
          onBlur={validarCampos}
          value={cpf}
          name="cpf"
          onChange={(e) => setCpf(e.target.value)}
          margin="normal"
          variant="outlined"
          id="cpf"
          label="cpf"
          fullWidth
        />

        <FormControlLabel
          value={promocoes}
          onChange={(e) => setPromocoes(e.target.checked)}
          label="Promoções"
          control={
            <Switch name="promocoes" color="primary" defaultChecked={true} />
          }
        ></FormControlLabel>
        <FormControlLabel
          value={novidades}
          onChange={() => setNovidades(!novidades)}
          label="Novidades"
          control={
            <Switch
              name="novidades"
              color="primary"
              defaultChecked={true}
            ></Switch>
          }
        ></FormControlLabel>

        <Button type="submit" varieant="contained" color="primary">
          Cadastrar
        </Button>
      </form>
    </>
  );
};

export default DadosPessoais;
