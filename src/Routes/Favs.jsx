import React, { useContext } from 'react';
import { GlobalContext } from '../Components/utils/global.context';
import Card from '../Components/Card';

const Favs = () => {
  const { theme } = useContext(GlobalContext);
  const favs = JSON.parse(localStorage.getItem('favorites')) || [];

  return (
    <div className={`favs-page ${theme}`}>
      <h1 className={`h1dark ${theme}`}>Tus dentistas favoritos</h1>
      <div className="grid">
        {favs.length > 0 ? (
          favs.map(dentist => <Card key={dentist.id} dentist={dentist} />)
        ) : (
          <p>No hay favoritos aún</p>
        )}
      </div>
    </div>
  );
};

export default Favs;