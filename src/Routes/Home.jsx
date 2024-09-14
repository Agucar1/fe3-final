import React, { useContext } from 'react';
import { GlobalContext } from '../Components/utils/global.context';
import Card from '../Components/Card';

const Home = () => {
  const { dentists } = useContext(GlobalContext); 

  return (
    <div>
      <h1>Dentistas Disponibles</h1>
      <div className="grid">
        {dentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </div>
  );
};

export default Home;