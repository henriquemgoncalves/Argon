import React, { useEffect } from 'react'
import '../styles/components/gallery.sass'
import  ImageGallery  from  "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import AOS from 'aos'

const images = [
    { 
        original: "/images/trabalhos/img01.jpg",
        thumbnail: '/images/trabalhos/img01.jpg'
    },
    { 
        original: "/images/trabalhos/img02.jpg",
        thumbnail: '/images/trabalhos/img02.jpg'
    },
    { 
        original: "/images/trabalhos/img03.jpg",
        thumbnail: '/images/trabalhos/img03.jpg'
    },
    { 
        original: "/images/trabalhos/img04.jpg",
        thumbnail: '/images/trabalhos/img04.jpg'
    },
    { 
        original: "/images/trabalhos/img05.jpg",
        thumbnail: '/images/trabalhos/img05.jpg'
    },
    { 
        original: "/images/trabalhos/img06.jpg",
        thumbnail: '/images/trabalhos/img06.jpg'
    },
    { 
        original: "/images/trabalhos/img07.jpg",
        thumbnail: '/images/trabalhos/img07.jpg'
    },
    { 
        original: "/images/trabalhos/img08.jpg",
        thumbnail: '/images/trabalhos/img08.jpg'
    },
    { 
        original: "/images/trabalhos/img09.jpg",
        thumbnail: '/images/trabalhos/img09.jpg'
    },
    { 
        original: "/images/trabalhos/img10.jpg",
        thumbnail: '/images/trabalhos/img10.jpg'
    },
    { 
        original: "/images/trabalhos/img11.jpg",
        thumbnail: '/images/trabalhos/img11.jpg'
    },
    { 
        original: "/images/trabalhos/img12.jpg",
        thumbnail: '/images/trabalhos/img12.jpg'
    },
    { 
        original: "/images/trabalhos/img13.jpg",
        thumbnail: '/images/trabalhos/img13.jpg'
    },
    { 
        original: "/images/trabalhos/img14.jpg",
        thumbnail: '/images/trabalhos/img14.jpg'
    },
    { 
        original: "/images/trabalhos/img15.jpg",
        thumbnail: '/images/trabalhos/img15.jpg'
    },
]

const Gallery = () => {

    useEffect(() => {
        AOS.init();
    }, [])

  return (
    <section id='galeria'>
        <div className="overlay"></div>
        <div className="content" data-aos="zoom-in-up" data-aos-duration="1000">
            <div className="fotos">
                <ImageGallery 
                    items={images}
                    autoPlay={true}
                    slideInterval={3000}
                    infinite={true}
                    showNav={false}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showThumbnails={false}
                    additionalClass='custom-gallery'
                    renderItem={(image) => (
                        <img
                            src={image.original}
                            alt='Trabalhos'
                            className='clickable-image'
                            onClick={() => window.open(image.original, '_blank')}
                        />
                    )}
                />
            </div>
            <div className="text">
                <h1>Nosso Trabalho: <span>Sua garantia de qualidade!</span></h1>
                <p>
                    A qualidade do nosso serviço fala por si! Aqui você pode conferir algumas imagens dos nossos trabalhos, desde instalações até manutenções realizadas com precisão e profissionalismo. Nosso compromisso é entregar sempre o melhor resultado para nossos clientes.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Gallery
