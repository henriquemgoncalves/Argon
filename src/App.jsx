import About from './components/About'
import AccordionSection from './components/Accordion'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import NavBar from './components/NavBar'
import Service from './components/Service'
import Worked from './components/Worked'
import './styles/app.sass'

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Banner/>
      <Service/>
      <About/>
      <Worked/>
      <Gallery/>
      <AccordionSection/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

// https://colorhunt.co/palette/000957344cb7577bc1ffeb00