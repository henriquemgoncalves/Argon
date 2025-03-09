import React, { useEffect } from 'react'
import '../styles/components/banner.sass'
import AOS from 'aos'

const Banner = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section id='banner'>
        <video autoPlay playsInline muted loop>
            <source src="/videos/bg-banner.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div 
          className="content"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="400"
          data-aos-duration="2000"
          data-aos-offset="0"
        >
            <img src='/images/argon-back.png' alt=''/>
        </div>
    </section>
  )
}

export default Banner
