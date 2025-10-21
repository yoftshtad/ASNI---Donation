import React from 'react'
import './Difference.css'
import Difference_img from '../../../assets/Images/Difference_img.png'

function Difference() {
  return (
    <div className="container Difference">
        <div className="left-side-dif">
            <img src={Difference_img} alt='Difference_img'/>
        </div>


        <div className="right-side-dif">
            <p><b>Impact</b></p>
            <h2>How your donation makes a difference</h2>
            <p>Every contribution helps a student pursue their dreams and create lasting change in their community.</p>
            <ul>
                <li>Scholarships provided annually</li>
                <li>Students supported in higher education</li>
                <li>Communities transformed through education</li>
            </ul>
            <div className="buttons">
                <button className='btn'>Donate Now</button>
                <button className='btm2'>Learn more</button>
            </div>
        </div>
    </div>
  )
}

export default Difference
