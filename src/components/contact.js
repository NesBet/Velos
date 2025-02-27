import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsFormValid(
      name.trim().length >= 2 && // At least 2 characters for name
        emailRegex.test(email.trim()) && // Valid email format
        message.trim().length >= 10, // At least 10 characters for message
    );
  }, [name, email, message]);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID,
      )
      .then(
        (result) => {
          console.log("Email sent!", result.text);
          alert("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
          setIsSubmitting(false);
        },
        (error) => {
          console.error("Failed to send:", error.text);
          alert("Failed to send message. Please try again.");
          setIsSubmitting(false);
        },
      );
  };

  return (
    <section className="contact-section">
      <div id="Contact" className="contact-outer-div">
        <div className="contact-left-side">
          <div className="contact-header">
            <h2>Get in Touch</h2>
            <p>Have questions? We'd love to hear from you.</p>
          </div>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <input
                className={`contact-input ${
                  name.trim().length > 0 && name.trim().length < 2
                    ? "invalid"
                    : ""
                }`}
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {name.trim().length > 0 && name.trim().length < 2 && (
                <small className="error-message">
                  Name must be at least 2 characters
                </small>
              )}
            </div>

            <div className="form-group">
              <input
                className={`contact-input ${
                  email.trim().length > 0 &&
                  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
                    ? "invalid"
                    : ""
                }`}
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {email.trim().length > 0 &&
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && (
                  <small className="error-message">
                    Please enter a valid email address
                  </small>
                )}
            </div>

            <div className="form-group">
              <textarea
                className={`contact-textarea ${
                  message.trim().length > 0 && message.trim().length < 10
                    ? "invalid"
                    : ""
                }`}
                name="message"
                placeholder="Your Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {message.trim().length > 0 && message.trim().length < 10 && (
                <small className="error-message">
                  Message must be at least 10 characters
                </small>
              )}
            </div>

            <button
              className={`contact-submit ${isFormValid ? "active" : "disabled"}`}
              type="submit"
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? (
                <span className="button-content">
                  <span className="spinner"></span>
                  Sending...
                </span>
              ) : (
                <span className="button-content">Send Message</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
