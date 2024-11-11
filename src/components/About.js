import "./About.css";
const About=()=>{
    return (
        <>
        <div id="About" className="Aboutpage">
            <h1 className="About-title">About</h1>
        </div>
        <div className="About">
            <div className="About-img"><img className="About_img" src="https://static.wixstatic.com/media/68a265_1bf2b8fd7f2e43c6b003a123b51a5a0f~mv2.jpg/v1/fill/w_640,h_426,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/68a265_1bf2b8fd7f2e43c6b003a123b51a5a0f~mv2.jpg" alt="Something went wrong"/></div>
             <div className="About-content">
                <p className="About-para">
                Nestled in the heart of the African wilderness, the Velos Lifetime Lodge offers an unparalleled luxury safari experience that will leave you with memories to last a lifetime.<br/>
                    <ul>
                        <li> Host lavish weddings and corporate events at the elegant indoor and outdoor event venues with state-of-the-art facilities.</li>
                        <li> At Velos, we are committed to sustainable tourism practices that minimize our environmental impact and uplift the local community.</li>
                        <li> Whether you're planning a romantic getaway, a family adventure, or a once-in-a-lifetime safari, the Velos Lifetime Lodge offers an authentic, personalized experience that will leave a lasting impression.</li>
                        <li> Our expert guides are passionate about sharing their knowledge and ensuring you have a safe and unforgettable experience.</li>
                        <li>Book your stay today and embark on an unforgettable journey through the heart of Africa.</li>
                    </ul>
                </p>
            </div>
         </div>
        </>
    );
}
export default About;
