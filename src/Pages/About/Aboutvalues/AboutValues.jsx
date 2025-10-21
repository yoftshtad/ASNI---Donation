import React from 'react'
import './AboutValues.css'
import Valuecard from './Valuecard/Valuecard'
import Transparency_img from '../../../assets/Icons/transparency.png' 
import Equality_img from '../../../assets/Icons/equality.png'
import Community_img from '../../../assets/Icons/community.png'


function AboutValues() {
  return (
    <div className="container About-values">
      <div className="Values-title">
            <p><b>Goals</b></p>
            <h2>Our Values</h2>
            <p>Our mission is to bridge the educational gap for underprivileged students in Ethiopia</p>
      </div>
      <div className="Values-sections">
        <Valuecard image={Transparency_img} title='Transparency' text='Every donation is tracked and used responsibly'/>
        <Valuecard image={Equality_img} title='Equality' text='We believe education should be accessible to everyone.'/>
        <Valuecard image={Community_img} title='Community' text='Together, we lift each other up through understanding.'/>
      </div>
    </div>
  )
}

export default AboutValues