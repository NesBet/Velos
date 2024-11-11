import "./contact.css"
const Contact=()=>
{
    return(
        <>
            <div id="Contact" className="contact-outer-div">
	            <div className="contact-left-side">
		        	<p><span style={{fontSize:'40px'}}>Contact us </span><br/><span style={{fontSize:"20px"}}>We love conversations. Let us talk ! </span></p>
			        <br/>
			        <input  className="contact-input" type="text" name="Name" placeholder="Enter full name" required/> <br/>
			        <input  className="contact-input" type="email" name="Email" placeholder="Enter email address" required/> <br/>
			        <textarea className="contact-textarea" name="Message" placeholder="Tell us about your message" required></textarea> <br/>
			        <input className="contact-submit" type="submit" name="submit"/>
                </div>
              	<div className="contact-right-side">
                    <img className="contact-img" src="https://speakers-forum.co.in/Assets/Images/contactus.png" alt="contact.jpeg"/>
            	</div>
            </div>
        </>
    )
}

export default Contact;