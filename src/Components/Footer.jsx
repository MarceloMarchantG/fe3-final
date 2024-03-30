import React from 'react'
import { useContextGlobal } from '../Components/utils/global.context'
const Footer = () => {
  const{ state} = useContextGlobal();
  return (
    <footer className={state.theme}>
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
