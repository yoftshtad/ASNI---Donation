import React from 'react'
import Email from '../../assets/Icons/Email.png'
import Phone from '../../assets/Icons/Phone.png'
import './Secondary_header.css'

function Secondary_header() {
  return (
    <div className="container header">
      <div className="Email">
        <img src={Email} alt='Email_icon'/>
        <p>Email: Asnitata@gmail.com</p>
      </div>

      <div className="Phone">
        <img src={Phone} alt='Email_icon'/>
        <p>Phone: +251 *** *** ***</p>
      </div>
    </div>
  )
}

export default Secondary_header