import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import AccordionHeader from 'react-bootstrap/AccordionHeader'
import '../styles/components/accordion.sass'


const perguntas = [
    {
        id: 0,
        title: "Com que frequência devo fazer a manutenção do meu ar-condicionado?",
        description: "A manutenção preventiva deve ser feita pelo menos a cada 3 meses para garantir o bom funcionamento do aparelho, evitar acúmulo de sujeira e aumentar sua vida útil. Em ambientes com uso intenso, como empresas e comércios, a recomendação é fazer mensalmente."
    },
    {
        id: 1,
        title: "Como saber se meu ar-condicionado pode precisar de manutenção corretiva?",
        description: "Alguns sinais de que seu ar-condicionado pode precisar de manutenção incluem baixo resfriamento, barulhos incomuns, aumento no consumo de energia ou vazamento de água. Se notar qualquer um desses problemas, é importante buscar assistência técnica para evitar danos maiores."
    },
    {
        id: 2,
        title: "Quais os benefícios da manutenção preventiva?",
        description: "A manutenção preventiva evita falhas inesperadas, melhora a eficiência do aparelho, reduz o consumo de energia e garante um ar mais limpo e saudável, evitando problemas respiratórios causados pelo acúmulo de poeira e fungos."
    },
    {
        id: 3,
        title: "O que preciso saber antes de instalar um ar-condicionado?",
        description: "Antes da instalação, é importante verificar a capacidade do aparelho em BTUs para garantir que ele seja adequado ao tamanho do ambiente. Além disso, a instalação deve ser feita por um profissional para evitar vazamentos, garantir a eficiência do equipamento e prolongar sua vida útil. Também é essencial verificar a rede elétrica, a posição da unidade externa e a necessidade de suporte adequado para fixação."
    },
    {
        id: 4,
        title: "Qual a diferença entre manutenção preventiva e corretiva?",
        description: "A manutenção preventiva é realizada regularmente para evitar problemas futuros, garantindo o bom funcionamento do aparelho. Já a manutenção corretiva ocorre quando o ar-condicionado já apresenta falhas ou defeitos, exigindo reparos para restaurar seu desempenho."
    },
]

const AccordionSection = () => {
  return (
    <section id='perguntas'>
        <div className="content">
            <h1>Perguntas Frequentes</h1>
            <Accordion className='accordion p-4'>
                {perguntas.map((pergunta) => (
                <Accordion.Item key={pergunta.id} className='item' eventKey={pergunta.id}>
                    <AccordionHeader>{pergunta.title}</AccordionHeader>
                        <Accordion.Body>
                            {pergunta.description}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}         
            </Accordion>
        </div>
    </section> 
    
  )
}

export default AccordionSection
