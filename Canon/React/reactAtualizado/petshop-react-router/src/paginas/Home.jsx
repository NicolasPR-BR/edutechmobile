import React from "react";
import ListaPost from "../assets/css/componentes/ListaPost";
import ListaCategorias from "../assets/css/componentes/ListaCategorias";

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <ListaCategorias />
      <ListaPost url="/posts"></ListaPost>
    </main>
  );
};

export default Home;
