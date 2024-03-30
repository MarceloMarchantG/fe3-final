import React , { useState, useEffect } from 'react'
import Card from '../Components/Card'
import { useContext } from 'react'
import { ContextGlobal, useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  
  // const [ dentistas, setDentistas ] =  useState([])

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then(data => setDentistas(data))
  // })

  const { state } = useContextGlobal();

  console.log(state);


  return (
    <main className={state.theme} >
      <h1>Dentistas</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.dentistas.map(dentista => <Card key={dentista.id} name={dentista.name} username={dentista.username} id={dentista.id} />)}
      </div>
    </main>
  )
}

export default Home