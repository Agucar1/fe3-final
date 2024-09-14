import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';  
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(GlobalContext);

  return (
    <nav className={`navi ${theme}`}>
      <Link className={`navi ${theme}`} to="/home">Inicio</Link>
      <Link className={`navi ${theme}`} to="/contact">Contacto</Link>
      <Link className={`navi ${theme}`} to="/favs">Favs</Link>
      
      <button class = "togglebotton" onClick={toggleTheme}>
        {theme === 'light' ? 'Dark🌙 ' : 'Light 💡'}
      </button>
    </nav>
  );
};

export default Navbar;