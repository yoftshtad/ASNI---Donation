import React from 'react'
import './Footer.css'
import Logofooter from '../../assets/Icons/Logo.png'
import {Link} from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";


function Footer() {
  return (
    <div className="container Footer">
      <div className="top-footer">
        <div className="logontext">
          <img src={Logofooter} alt='Footer_logo'/>
          <p>Lorem ipsum dolor sit amet consectetur. Ultrices pellentesque ut venenatis fermentum mattis. Malesuada id nec cum gravida lectus id.</p>         
        </div>
        <div className="navigation"> 

          <h3>Navigation</h3>
          <ul>
            <Link to='/'>
              <li>Home</li>
            </Link>
            <Link to='/about'>
              <li>About</li>
            </Link>
            <Link to='/blogs'>
              <li>Blogs</li>
            </Link>

            <Link to='/contact'>
              <li>Contact</li>
            </Link>            
          </ul>
          
        </div>

        <div className="terms">
          <h3>Important</h3>
          <ul>
          <Link to=''>
              <li>Terms & Conditions</li>
            </Link>
            <Link to=''>
              <li>Privacy Policy</li>
            </Link>
            </ul>

        </div>
        <div className="contact-info">
          <h3>Contact</h3>
          <ul>
            <li>asnisth@gmail.com</li>
            <li>+251 *** ** **</li>
            <li>+251 *** ** **</li>
          </ul>
          <div className="footer-icons">
            <FaFacebook />
            <AiFillTwitterCircle />

          </div>
        </div>

      </div>

      <div className="bottom-footer">
      <p>© 2025 YourWebsiteName. All rights reserved.</p>


      </div>

    </div>
  )
}

export default Footer;