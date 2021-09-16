import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

const DadosEntrega = () => {
  return (
    <>
      <form style={{ textAlign: "start" }} className="DadosEntrega">
        <TextField
          id="cep"
          label="CEP"
          type="number"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="endereco"
          label="Endereço"
          type="number"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="numero"
          label="Número"
          type="number"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="estado"
          label="Estado"
          type="text"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="cidade"
          label="Cidade"
          type="text"
          margin="normal"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Finalizar cadastro
        </Button>
      </form>
    </>
  );
};

export default DadosEntrega;
