import { AboutIntro, AboutStory, AboutValues, AboutWorks, AboutTeams } from './index';
import './About.css';

function About() {
  return (
    <main className="About">
      <AboutIntro />
      <AboutStory />
      <AboutValues />
      <AboutWorks />
      <AboutTeams />
    </main>
  );
}

export default About;