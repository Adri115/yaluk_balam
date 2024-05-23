import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import arrow from '../../assets/white-arrow.png'

const access_key = import.meta.env.VITE_ACCESS_KEY;

const Contact = () => {
   
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key",access_key);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
 
    return (
    <div className='contact-container'>
         <div className='contact-col'>
            <h3>Contactanos <img src={msg_icon} id='msg-icon'/></h3>
            <p>La informacion de contacto es la siguiente</p>
            <ul>
                <li>yalukbalam@gmail.com</li>
                <li>Tel: (999) 1567474</li>
            </ul>
         </div>
         <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Empresa/Organización</label>
                <input type='text' name='name' placeholder='Yaluk-balam' required/>
                <label>Numero de Contacto</label>
                <input type='tel' name='phone' placeholder='999-156-7474' required/>
                <label>Escribe tu mensaje aqui</label>
                <textarea name='message' rows={10} placeholder='Agrega un comentario'></textarea>
                <button type='submit' className='btn-form'> Enviar <img src={arrow}/></button>
            </form>
            <span>{result}</span>
         </div>
    </div>
  ) 
}

export default Contact  