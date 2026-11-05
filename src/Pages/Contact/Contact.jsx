import { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to your backend / Formspree / EmailJS
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="contact-page">
      {/* --- Header --- */}
      <div className="container contact-header">
        <p className="section-tag">Contact Us</p>
        <h1>Get In Touch</h1>
        <p className="contact-subtitle">
          We'd love to hear from you. Reach out via phone or email, or send us a message using the form below.
        </p>
      </div>

      {/* --- Contact Card --- */}
      <div className="container contact-whole">
        {/* Left: Info */}
        <div className="left-contact">
          <div className="contact-infotitle">
            <h3>Contact Information</h3>
            <p>Our team is available Monday to Friday, 9am – 5pm.</p>
          </div>

          <ul className="contact-list" aria-label="Contact methods">
            <li className="contact-iconinfo">
              <span className="contact-icon" aria-hidden="true"><FaPhoneAlt /></span>
              <div className="contact-details">
                <p className="contact-label">Phone</p>
                <a href="tel:+251000000000">+251 *** *** **</a>
                <a href="tel:+251000000000">+251 *** *** **</a>
              </div>
            </li>

            <li className="contact-iconinfo">
              <span className="contact-icon" aria-hidden="true"><MdEmail /></span>
              <div className="contact-details">
                <p className="contact-label">Email</p>
                <a href="mailto:Asnisth@gmail.com">Asnisth@gmail.com</a>
              </div>
            </li>

            <li className="contact-iconinfo">
              <span className="contact-icon" aria-hidden="true"><FaLocationDot /></span>
              <div className="contact-details">
                <p className="contact-label">Location</p>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right: Form */}
        <form className="right-contact" onSubmit={handleSubmit}>
          <div className="fields">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="fields">
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="fields">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button className="submit-btn" type="submit">
            {submitted ? '✓ Message Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;