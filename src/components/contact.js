import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_tkskhxq', // Your EmailJS Service ID
        'template_74miyb1', // Your EmailJS Template ID
        form.current,
        'B7ob43yQQVno5LqcW' // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log('Email sent!', result.text);
          alert('Message sent successfully!');
          // Clear form fields
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.error('Failed to send:', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  const isFormValid = name && email && message;

  return (
    <>
      <div id="Contact" className="contact-outer-div">
        <div className="contact-left-side">
          <p>
            <span style={{ fontSize: '40px' }}>Contact us </span><br />
            <span style={{ fontSize: "20px" }}>We love conversations. Let us talk!</span>
          </p>
          <br />
          <form ref={form} onSubmit={sendEmail}>
            <input
              className="contact-input"
              type="text"
              name="from_name" // Match EmailJS template variable
              placeholder="Enter full name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              className="contact-input"
              type="email"
              name="from_email" // Match EmailJS template variable
              placeholder="Enter email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <textarea
              className="contact-textarea"
              name="message" // Match EmailJS template variable
              placeholder="Tell us about your message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <br />
            <input
              className="contact-submit"
              type="submit"
              value="Send"
              disabled={!isFormValid}
              style={{ backgroundColor: isFormValid ? 'orange' : 'grey' }}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
