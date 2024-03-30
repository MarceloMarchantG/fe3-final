import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContextGlobal();
  return (
    <nav className={state.theme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to="/">Home</Link>
      <Link to="/favs">Destacados</Link>
      <Link to="/contact">Contacto</Link>
      <button onClick={() => dispatch({type: "CHANGE_THEME"})}>Change theme</button>
    </nav>
  )
}

export default Navbar