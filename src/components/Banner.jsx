import React from 'react'
import '../styles/components/banner.sass'

const Banner = () => {
  return (
    <section id='banner'>
        <video autoPlay playsInline muted loop>
            <source src="/videos/bg-banner.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="content">
            <img src='/images/argon-back.png' alt=''/>
        </div>
    </section>
  )
}

export default Banner
