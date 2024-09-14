import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

const Card = ({ dentist }) => {
  const { theme } = useContext(GlobalContext);
  const [isFavorite, setIsFavorite] = useState(false);
  
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFav = favs.some(fav => fav.id === dentist.id);
    setIsFavorite(isFav);
  }, [dentist.id]);

  const toggleFavorite = (dentist) => {
    let favs = JSON.parse(localStorage.getItem('favorites')) || [];

    if (isFavorite) {
      
      favs = favs.filter(fav => fav.id !== dentist.id);
      alert(`${dentist.name} ha sido eliminado de favoritos`);
    } else {
      
      favs.push(dentist);
      alert(`${dentist.name} ha sido añadido a favoritos`);
    }

    localStorage.setItem('favorites', JSON.stringify(favs));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={`card ${theme}`}>
      <Link to={`/dentist/${dentist.id}`} className="card-content">
      <img class = "imgcard" src="../images/doctor.jpg" alt="doctor" />
        <h2>{dentist.name}</h2>
        <p>{dentist.username}</p>
      </Link>
      <button onClick={() => toggleFavorite(dentist)}>
      {isFavorite ? 'Favorito ⭐' : 'Agregar a favortios'}
      </button>
    </div>
  );
};

export default Card;