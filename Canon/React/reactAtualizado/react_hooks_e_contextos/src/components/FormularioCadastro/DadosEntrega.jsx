import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

const DadosEntrega = ({ handleSubmit, dados }) => {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ ...dados, cep, endereco, numero, estado, cidade });
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        style={{ textAlign: "start" }}
        className="DadosEntrega"
      >
        <TextField
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          id="cep"
          label="CEP"
          type="number"
          margin="normal"
          variant="outlined"
        />
        <TextField
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          id="endereco"
          label="Endereço"
          type="text"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          id="numero"
          label="Número"
          type="number"
          margin="normal"
          variant="outlined"
        />
        <TextField
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
          id="estado"
          label="Estado"
          type="text"
          margin="normal"
          variant="outlined"
        />
        <TextField
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          id="cidade"
          label="Cidade"
          type="text"
          margin="normal"
          variant="outlined"
        />
        <Button
          onClick={onSubmit}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Finalizar cadastro
        </Button>
      </form>
    </>
  );
};

export default DadosEntrega;
