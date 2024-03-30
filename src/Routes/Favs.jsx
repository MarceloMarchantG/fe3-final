import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { state } = useContextGlobal(); 
  console.log(state.theme);
  console.log(state.favs);
  return (
    <div className={state.theme}>
      <h1>Dentistas Destacados</h1>
      <div className="card-grid">
        {state.favs.length === 0 ? <h1>No hay favoritos</h1> : state.favs.map(dentista => <Card key={dentista.id} name={dentista.name} username={dentista.username} id={dentista.id}/> )}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
  );
};

export default Favs;
