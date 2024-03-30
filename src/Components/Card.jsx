import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";

const Card = ({ name, username, id }) => {

  const { state, dispatch } = useContextGlobal();
  const isFav = state.favs.some((fav) => fav.id === id);

  const addFav = ()=>{
    dispatch({type: "ADD_FAV", payload: {name, username, id}})
  }

  const remFav = ()=>{
    dispatch({type: "REMOVE_FAV", payload: {name, username, id}})
  }

  return (
    <div className="card">

      <Link to={`/detail/${id}`}><img src="./images/doctor.jpg" alt="" className="card-img" /></Link>
      <h2>{name}</h2>
      <h2>{username}</h2>
      

        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        {isFav ? <button onClick={remFav} className="favButton">remover de favoritos</button> : <button onClick={addFav} className="favButton">agregar a favoritos</button>}
        
    </div>
  );
};

export default Card;
