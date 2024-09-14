import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

const Detail = () => {
  const { theme } = useContext(GlobalContext);
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => setDentist(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!dentist) {
    return <p>Cargando detalles del dentista:</p>;
  }

  return (
    <div className={`detail ${theme}`}>
      <h1>Detalles de {dentist.name}</h1>
      <p>Email: {dentist.email}</p>
      <p>Celular: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
    </div>
  );
};

export default Detail;