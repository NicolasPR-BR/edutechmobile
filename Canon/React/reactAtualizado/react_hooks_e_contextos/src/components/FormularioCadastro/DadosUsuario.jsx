import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

const DadosUsuario = () => {
  return (
    <>
      <form>
        <TextField
          id="email"
          label="email"
          type="email"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="senha"
          label="senha"
          type="password"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>
    </>
  );
};

export default DadosUsuario;
