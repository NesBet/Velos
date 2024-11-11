import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Service from "./components/Services.js";
import Footer from "./components/footer.js";
import Contact from "./components/contact.js";
import Gallery from "./components/gallery.js";
import "./App.css"
const App=()=>
{
    return(
        <>
        <Hero/>
        <About/>
        <Service/>
        <Gallery/>
        <Contact/>
        <Footer />
        </>
    )
}

export default App;