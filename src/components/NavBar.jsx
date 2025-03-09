import React, { useEffect, useState } from 'react'
import '../styles/components/navbar.sass'
import { RiMenu4Fill } from "react-icons/ri";

const NavBar = () => {

  const [scrolling, setScrolling] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);

  const toggleMenu = () => {
    setMenuMobile(!menuMobile)
};

  const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if(section){
          section.scrollIntoView({behavior:"smooth"});
      }
  }

  useEffect(() => {
    const handleScroll = () => {
        if(window.scrollY > 50){
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    }
}, []);

  return (
    <header className={scrolling ? "scrolled" : ""}>
        <div className="content">
            <nav className='menu-desk'>
                <a onClick={() => scrollToSection("service")}>Serviços</a>
                <a onClick={() => scrollToSection("about")}>Sobre nós</a>
                <img src='/images/argon-back.png' alt='Logo da Argon'/>
                <a onClick={() => scrollToSection("perguntas")}>Perguntas</a>
                <a onClick={() => scrollToSection("contact")}>Contato</a>
            </nav>
            

            <div className={`menu-mobile ${menuMobile ? "active":""}`}>
                <img src='/images/argon-back.png' alt='Logo da Argon'/>
                <button className='btn' onClick={toggleMenu}>
                    <RiMenu4Fill/>
                </button>
                <nav className='nav-mobile'>
                    <a onClick={() => scrollToSection("service")}>Serviços</a>
                    <a onClick={() => scrollToSection("about")}>Sobre nós</a>
                    <a onClick={() => scrollToSection("perguntas")}>Perguntas</a>
                    <a onClick={() => scrollToSection("contact")}>Contato</a>
                </nav>
            </div>           
        </div>
    </header>
  )
}

export default NavBar
