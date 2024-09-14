import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({ name: '', email: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    let isValid = true;
    let newErrors = { name: '', email: '' };

    if (formData.name.length < 5) {
      newErrors.name = 'El nombre debe tener más de 5 caracteres';
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Ingrese un email válido';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccessMessage(`Gracias ${formData.name}, te contactaremos cuanto antes vía email`);
      console.log('Form Data:', formData);
    } else {
      setSuccessMessage('');
    }
  };

  return (
    <form className= "form" onSubmit={handleSubmit}>
      <div className= "form">
        <label>Nombre completo: </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div className= "form">
        <label>Email: </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <button className= "submit" type="submit">Enviar</button>
      {successMessage && <p className="success">{successMessage}</p>}
    </form>
  );
};

export default ContactForm;