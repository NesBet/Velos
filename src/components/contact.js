import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import "./contact.css";

const Contact=()=>
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS send function
        const templateParams = {
            from_name: name, // Set the user's name
            from_email: email,
            message: message,
        };

        emailjs.send("service_tkskhxq", "template_74miyb1", templateParams)
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                // Clear the input fields after sending the email
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((err) => {
                console.error('Failed to send email. Error:', err);
            });
    };

    const isFormValid = name && email && message;

    return(
        <>
            <div id="Contact" className="contact-outer-div">
                <div className="contact-left-side">
                    <p><span style={{fontSize:'40px'}}>Contact us </span><br/><span style={{fontSize:"20px"}}>We love conversations. Let us talk ! </span></p>
                    <br/>
                    <input className="contact-input" type="text" name="Name" placeholder="Enter full name" required value={name} onChange={(e) => setName(e.target.value)} /> <br/>
                    <input className="contact-input" type="email" name="Email" placeholder="Enter email address" required value={email} onChange={(e) => setEmail(e.target.value)} /> <br/>
                    <textarea className="contact-textarea" name="Message" placeholder="Tell us about your message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea> <br/>
                    <input className="contact-submit" type="submit" name="submit" onClick={handleSubmit} disabled={!isFormValid} style={{ backgroundColor: isFormValid ? 'orange' : 'grey' }}/>
                </div>
            </div>
        </>
    )
}

export default Contact;