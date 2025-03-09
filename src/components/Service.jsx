import React from 'react'
import '../styles/components/service.sass'
import { FaTools, FaClipboardCheck, FaScrewdriver } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

const services = [
    {id: 1, icon: <FaScrewdriver size={50} color='#078ed0'/>, title: "Instalação", description: '"Garantimos a instalação segura e eficiênte do seu ar-condicionado"'},
    {id: 2, icon: <FaClipboardCheck size={50} color='#078ed0'/>, title: "Manutenção Preventiva", description: '"Evite problemas futuros com nossa manutenção regular"'},
    {id: 3, icon: <FaTools size={50} color='#078ed0'/>, title: "Manutenção Corretiva", description: '"Resolvemos falhas e deixamos seu equipamento como novo"'},
    {id: 4, icon: <MdContactPhone size={50} color='#078ed0'/>, title: "Assistência técnica", description: '"Suporte especializado para qualquer necessidade do seu ar-condicionado"'},
]

const Service = () => {
  return (
    <section id='service'>
        <div className="content">
            <div className="title-text">
                <h3>Nossos Serviços: <span>Conforto e Eficiência para você!</span></h3>
                <p>
                    Manter seu ambiente climatizado com qualidade é essencial. Oferecemos serviços completos para garantir o melhor desempenho do seu ar-condicionado, com segurança, eficiência e suporte especializado.
                </p>
            </div>
            <div className="info-services">
                {services.map((service) => (
                    <div key={service.id} className="services">
                        <>{service.icon}</>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div> 
                ))}
            </div>
        </div>
    </section>
  )
}

export default Service
