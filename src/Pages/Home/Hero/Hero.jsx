import React from 'react'
import Hero_img from '../../../assets/Images/Hero_img.png'
import './Hero.css'
import {Link} from 'react-router-dom'

function Hero() {
  return (
    <div className=" container Hero">
        <div className="left-side-home">
          <h1>Empowering students in Ethiopia through education</h1>
          <p>Every contribution helps a student break the cycle of poverty. We connect donors with talented students who need support to pursue their dreams.</p>
          <div className="buttons">
            <Link to='/donation'>
            <button className='btn' type='button'>Donate Now</button>
            </Link>
            <Link to='/about'>
            <button className='btn2' type='button'>Learn more</button>
            </Link>
          </div>
        </div>

        <div className="right-side-home">
          <img src={Hero_img} alt='Hero_img'/>

        </div>
    </div>
  )
}

export default Hero