import React from 'react'
import Button from '@mui/material/Button';
import { useForm, ValidationError } from '@formspree/react';
import Alert from '@mui/material/Alert';

import '../Assets/Styles/Contacto.css';
const Contacto = () => {
  const [state, handleSubmit] = useForm("moqrrrrp");
  if (state.succeeded) {
    return alert(" Mensaje Enviado. Gracias Por Contactarme!");
  }
  return (

    <section className="contact">
    <div className="u-wrapper">
      <div className="contact-content">
        <form onSubmit={handleSubmit} id="form" action="" className="form">
          <h3 className="tag"><span>Contactarme</span></h3>
          <label for="name">Nombre Completo <span>*</span></label>
          <input  name="name" required type="text" id="name" placeholder="Juan"/>
          <label for="email">Correo electrónico <span>*</span></label>
            <input name="email" type="text" id="email" required placeholder="juan@gmail.com" />
            <ValidationError 
               prefix="Email" 
               field="email"
               errors={state.errors}
             />
          <label for="message">Mensaje</label>
            <textarea id="message" name="message" cols="30" rows="10"></textarea>
            <ValidationError 
               prefix="Message" 
              field="message"
              errors={state.errors}
             /> <div className='button'>
              <Button  disabled={state.submitting} variant='contained' type="submit">enviar mensaje</Button>
              </div>
        </form>
      </div>
    </div>
  </section>
  )
}

export default Contacto