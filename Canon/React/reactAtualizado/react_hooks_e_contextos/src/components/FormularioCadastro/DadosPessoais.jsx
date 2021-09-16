import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

const DadosPessoais = ({ handleSubmit, validarCPF }) => {
  const [nome, setNome] = useState("");
  const [sobreNome, setSobreNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

  const enviar = (e) => {
    e.preventDefault();
    handleSubmit({ nome, sobreNome, cpf, promocoes, novidades });
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
          onBlur={(e) => {
            const res = validarCPF(e.target.value);
            setErros({ cpf: res });
          }}
          value={cpf}
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
