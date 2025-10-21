import React from 'react'
import './Contact.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <div className='container Contact'>
      <div className="getintouch">
        <h2>Get In Touch</h2>
        <p>We'd love to hear from you. Reach out via phone or email, or send us a message using the form.</p>
      </div>
      <div className="contact-whole" role="region" aria-labelledby="contact-heading">
          <div className="left-contact">
            <div className="contact-infotitle">
              <h3 id="contact-heading">Contact Information</h3>
              <p>Our team is available Monday to Friday, 9am - 5pm.</p>
            </div>

            <ul className="contact-list" aria-label="Contact methods">
              <li className="contact-iconinfo">
                <span className="contact-icon" aria-hidden="true"><FaPhoneAlt /></span>
                <div className="contact-details">
                  <p className="contact-label">Phone</p>
                  <p>+251 *** *** **</p>
                  <p>+251 *** *** **</p>
                </div>
              </li>

              <li className="contact-iconinfo">
                <span className="contact-icon" aria-hidden="true"><MdEmail /></span>
                <div className="contact-details">
                  <p className="contact-label">Email</p>
                  <p>Asnisth@gmail.com</p>
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


          <form className="right-contact" onSubmit={(e) => e.preventDefault()}>
            <div className='fields'>
              <label htmlFor='name'>Your Name</label>
              <input id='name' type='text' name='name' placeholder='Enter your name' required/>
            </div>

            <div className='fields'>
              <label htmlFor='email'>Your Email</label>
              <input id='email' type='email' name='email' placeholder='Enter your email' required/>
            </div>
            <div className='fields'>
              <label htmlFor='message'>Message</label>
              <textarea id='message' name='message' rows='6' placeholder='Enter your message' required/>
            </div>
            <button className='submit-btn' type='submit'>Send Message</button>
          </form>
        </div>
    </div>
  )
}

export default Contact