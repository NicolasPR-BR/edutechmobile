import React, { Component } from "react";
import imagem from "../assets/img/doguito404.svg";
import "../assets/css/404.css";

const Pagina404 = () => {
  return (
    <>
      <main className="container flex flex--centro flex--coluna">
        <img className="doguito-imagem" src={imagem} alt="" />
        <p className="naoencontrado-texto">404, Página não encontrada</p>
      </main>
    </>
  );
};
export default Pagina404;
