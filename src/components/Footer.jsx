import React from 'react'
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa"
import '../styles/components/footer.sass'

const Footer = () => {
  return (
    <footer id='rodape'>
        <div className="content">
            
                <h2>
                    &copy;{new Date().getFullYear()} - Argon Manutenção e Instalação de Ar Condicionado. Todos os direitos reservados. <a href="/">Politica de Privacidade.</a>
                </h2>
                <div className="sociais">
                    <a href="https://www.instagram.com/argon.arcondicionado/" target='_blank'><FaInstagram/></a>
                    <a href="https://www.facebook.com/argonarcondicionado/?locale=pt_BR" target='_blank'><FaFacebook/></a>
                    <a href="https://wa.me/551126685392" target='_blank'><FaWhatsapp/></a>
                </div>
                <p>(11) 2668-5392</p>
                <p>argon.arcondicionado@gmail.com</p>
            
            
                <h3>Desenvolvido por Henrique.</h3>
                <div className="henrique-sociais">
                    <a 
                        href="https://www.linkedin.com/in/henrique-madruga-gonçalves-044a072aa" 
                        target='_blank'
                    >
                        <FaLinkedinIn />
                    </a>
                    <a 
                        href="https://www.github.com/henriquemgoncalves" 
                        target='_blank'
                    >
                        <FaGithub/>
                    </a>
                    <a 
                        href="https://wa.me/5511940007976" 
                        target='_blank'
                    >
                        <FaWhatsapp/>
                    </a>
                </div>
            
        </div>
    </footer>
  )
}

export default Footer
