
import "./app.scss"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"


const App = () => {
  return <div>
    <section id="Home">
      <Navbar />
      <Hero />
    </section>
    <section id="Portfolio">Parallax</section>
    <section>Projects</section>
    <section id="Services">Parallax</section>
    <section>Services</section>
    <section id="Certificates">Certificates</section>
    <section id="Contact">Contact</section>
    
  
  </div>
}

export default App
