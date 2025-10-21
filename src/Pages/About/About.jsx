import React from 'react';
import './About.css';
import {AboutIntro, AboutStory, AboutValues, AboutWorks, AboutTeams} from './index'


function About() {
  return (
    <div className="About">
      <AboutIntro/>
      <AboutStory/>
      <AboutValues/>
      <AboutWorks/>
      <AboutTeams/>
      
    </div>
    
  )
}

export default About