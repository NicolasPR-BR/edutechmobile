import React from 'react';
import { validarCpf, validarSenha } from '../models/cadastro';
const ValidacoesDeCadastro = React.createContext({cpf: validarCpf, senha: validarSenha});

export default ValidacoesDeCadastro;