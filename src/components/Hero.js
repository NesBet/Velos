import  "./Hero.css";
import Nav from "./Nav"
const Hero=()=>
{
    return(
        <>
        <section  className="Hero" id="Home">
        <Nav/>

            <div  className="Hero-banner">
                <h1 className='Hero-Head'>VELOS LIFETIME LODGE</h1>
                <p>
                 Simply for You
                </p>
                <a href="#Services" className="Hero-btn">Our Services</a>
            </div>
      </section>
      </>
        );
}
export default Hero;
