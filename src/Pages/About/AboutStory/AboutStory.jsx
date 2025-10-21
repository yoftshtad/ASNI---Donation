import React from 'react'
import './AboutStory.css'
import Story_img from '../../../assets/Images/Story_img.png'

function AboutStory() {
  return (
    <div className="container About-story">
      
      <div className="left-side-story">
        <img src={Story_img} alt='story_img'/>
      </div>


      <div className="right-side-story">
        <p><b>Who we are</b></p>
        <h2>Our Story</h2>
        <p>Founded in 2015, Asni has grown from a small volunteer initiative into a nationwide effort dedicated to improving education in Ethiopia. We work hand-in-hand with communities, providing essential tools, modern facilities, and training that help children succeed.</p>
        <p>Every project is rooted in local collaboration, ensuring that schools receive the support they need for long-term success.</p>

      </div>

    </div>
  )
}

export default AboutStory