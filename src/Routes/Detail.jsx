import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const { state } = useContextGlobal();
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const { id } = useParams();

  const [ detDentista, setDetDentista ] =  useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then(data => setDetDentista(data))
  })

  return (
    <div className= {state.theme}>
      <h1>Detalle dentistas </h1>
      <div className='table'>
          <table className={state.theme}>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Sitio Web</th>
            </tr>
            <tr>
              <td>{detDentista.name}</td>
              <td>{detDentista.email}</td>
              <td>{detDentista.phone}</td>
              <td>{detDentista.website}</td>
            </tr>
          </table>
      
     
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      </div>
    </div>
  )
}

export default Detail