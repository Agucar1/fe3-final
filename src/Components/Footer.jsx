import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext'; 


const Footer = () => {

  const { theme } = useContext(GlobalContext);

  return (
    <footer className={`footer ${theme}`}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
        <img className= "icons" src="./images/ico-facebook.png" alt='DH-logo' />
        <img className= "icons" src="./images/ico-instagram.png" alt='DH-logo' />
        <img className= "icons" src="./images/ico-tiktok.png" alt='DH-logo' />
        <img className= "icons" src="./images/ico-whatsapp.png" alt='DH-logo' />
       
    </footer>
  )
}

export default Footer
