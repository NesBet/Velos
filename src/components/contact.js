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

  // Check form validity whenever inputs change
  useEffect(() => {
    setIsFormValid(
      name.trim() !== "" && email.trim() !== "" && message.trim() !== "",
    );
  }, [name, email, message]);

  const sendEmail = (e) => {
    e.preventDefault();

    // Double-check validity before submitting
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
          // Clear form fields
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
    <>
      <div id="Contact" className="contact-outer-div">
        <div className="contact-left-side">
          <div className="contact-header">
            <h2>Contact us</h2>
            <p>We love conversations. Let us talk!</p>
          </div>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <input
                className="contact-input"
                type="text"
                name="from_name"
                placeholder="Your full name..."
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="contact-input"
                type="email"
                name="from_email"
                placeholder="Your email address..."
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <textarea
                className="contact-textarea"
                name="message"
                placeholder="Write your message here..."
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              className={`contact-submit ${isFormValid ? "active" : "disabled"}`}
              type="submit"
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? (
                <span className="loading-spinner"></span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
        <div className="contact-right-side">
          <img
            src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="Contact Us"
            className="contact-img"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
