import React from 'react'
import './AboutTeams.css'
import Team1 from '../../../assets/Images/Team1_img.png'
import Team2 from '../../../assets/Images/Team2_img.png'
import Team3 from '../../../assets/Images/Team3_img.png'

function AboutTeams() {
  return (
    <div className="container About-teams">
      <div className="Teams-title">
            <p><b>Team</b></p>
            <h2>Meet the Team</h2>
            <p>Our mission is to bridge the educational gap for underprivileged students in Ethiopia</p>
      </div>
      <div className="Team-members">
            <div className="Team-box">
              <img src={Team1} alt='Selam Abebe'/>
              <h3>Selam Abebe</h3>
              <p>Founder & Director</p>
            </div>

            <div className="Team-box">
              <img src={Team2} alt='Selam Abebe'/>
              <h3>Daniel Tesfaye</h3>
              <p>Founder & Director</p>
            </div>

            <div className="Team-box">
              <img src={Team3} alt='Selam Abebe'/>
              <h3>Liya Mekonnen</h3>
              <p>Community Outreach</p>
            </div>
      </div>

    </div>
  )
}

export default AboutTeams