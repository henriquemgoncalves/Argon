import React from 'react'
import '../styles/components/worked.sass'

const marcas = [
    {id: 1,img: "/images/carrier.png"},
    {id: 2,img: "/images/daikin.png"},
    {id: 3,img: "/images/elgin.png"},
    {id: 4,img: "/images/fujitsu.png"},
    {id: 5,img: "/images/gree.png"},
    {id: 6,img: "/images/lg.png"},
    {id: 7,img: "/images/midea.png"},
    {id: 8,img: "/images/philco.png"},
    {id: 9,img: "/images/samsung.png"},
]

const Worked = () => {
  return (
    <section id='worked'>
        <div className="content">
            <h1>Trabalhamos com as melhores Marcas do mercado!</h1>
            <div className="itens">
                {marcas.map((marca) => (
                    <div key={marca.id} className="item">
                        <img src={marca.img} alt='Logo Marca'/>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Worked
