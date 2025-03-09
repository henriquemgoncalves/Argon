import React, { useState } from 'react'
import '../styles/components/contact.sass'

const Contact = () => {

    const [status, setStatus] = useState("");
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;

        setStatus("Enviando...");

        const data = new FormData(form);

        try{
            const response = await fetch("https://formspree.io/f/mldeykwk", {
                method: "POST",
                body: data,
                headers: {
                    Accept: "application/json",
                },
            });

            if(response.ok){
                setStatus("Mensagem enviada com Sucesso");
                form.reset();
            } else {
                setStatus("Erro ao enviar a mensagem");
            }
        } catch (error){
            setStatus("Erro ao enviar a mensagem");
                console.error("Erro", error);
        }
        ;
    }

  return (
    <section id='contact'>
        <div className="content">
            <div className="info">
                <h2>Horário de Atendimento</h2>
                <ul>
                    <li>Segunda à Sexta : 8h-18h </li>
                    <li>Sábado : 8h-12h</li>
                </ul>
                <h3>Rua Manoel Pedro vilaboim, 245 - São Caetano do Sul/SP</h3>
                <p>(11) 2668-5392</p>
                <p>argon.arcondicionado@gmail.com</p>
            </div>
            <div className="form">
                <form id='' onSubmit={handleSubmit}>
                    <input type='text' name='nome' placeholder='Nome' required/>
                    <input type='email' name='email' placeholder='E-mail' required/>
                    <textarea name="message" placeholder='Mensagem' required></textarea>
                    <button type="submit">Enviar Mensagem</button>
                    <p className='status'>{status}</p>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact
