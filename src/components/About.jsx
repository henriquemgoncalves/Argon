import React from 'react'
import '../styles/components/about.sass'

const About = () => {
  return (
    <section id='about'>
        <div className="content">
            <h1>A <span>Empresa</span></h1>
            <p>
                A Argon é uma empresa altamente comprometida com os seus clientes e encontrará a solução definitiva para o seu sistema de Refrigeração, Ar condicionado, Ventilação e Aquecimento.
            </p>

            <h1>Nossos <span>Serviços</span></h1>
            <p>
                Atuamos de forma completa em se tratando de climatização, estamos preparados e treinados para prestar todos os serviços ligados a essa área.
            </p>

            <h1>Excelência em <span>Qualidade</span></h1>
            <p>
                Atendemos normas e ética, realizamos manutenção preventiva e corretiva sempre com a transparência necessária para um bom serviço prestado.
            </p>
        </div>
    </section>
  )
}

export default About