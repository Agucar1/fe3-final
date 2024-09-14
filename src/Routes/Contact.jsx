import React, { useContext } from 'react';
import { GlobalContext } from '../Components/utils/global.context';
import Form from '../Components/Form';

const Contact = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <div className={`contact-page ${theme}`}>
      <h1>Contactanos para agendar tu hora!</h1>
      <Form /> 
    </div>
  );
};

export default Contact;