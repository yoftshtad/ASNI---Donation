import React from 'react'
import './AboutWorks.css'
import Works_img from '../../../assets/Images/Works_image.png'
import Donate_icon from '../../../assets/Icons/Donate.png'
import Support_icon from '../../../assets/Icons/Support.png'
import Impact_icon from '../../../assets/Icons/Impact.png'

function AboutWorks() {
  return (
    <div className="container About-works">
        <div className="left-side-works">
          <img src={Works_img} alt='Works_img'/>
        </div>


        <div className="right-side-works">
          <div className="top-right-works">
            <p><b>Impact</b></p>
            <h2>How It Works</h2>
            <p>Every contribution helps a student pursue their dreams and create lasting change in their community.</p>
          </div>
          <div className="bottom-right-works"></div>
            <div className="bottom-content">
              <img src={Donate_icon} alt='Donate_icon'/>
              <p><b>Donate: </b>Choose an amount or project to support.</p>
            </div>
            <div className="bottom-content">
            <img src={Support_icon} alt='Support_icon'/>
            <p><b>Support a Student: </b>Your donation helps pay for tuition, books, or school supplies.</p>
            </div>
            <div className="bottom-content">
            <img src={Impact_icon} alt='Impact_icon'/>
            <p><b>See the Impact: </b>We share stories and updates about the students you’ve helped.</p>

            </div>
          </div>
      </div>
  )
}

export default AboutWorks