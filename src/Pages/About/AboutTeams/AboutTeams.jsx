import Team1 from '../../../assets/Images/Team1_img.png'; // Change to .jpg if needed
import Team2 from '../../../assets/Images/Team2_img.png';
import Team3 from '../../../assets/Images/Team3_img.png';
import './AboutTeams.css';

const teamMembers = [
  {
    image: Team1,
    name: 'Selam Abebe',
    role: 'Founder & Director',
  },
  {
    image: Team2,
    name: 'Daniel Tesfaye',
    role: 'Program Manager',
  },
  {
    image: Team3,
    name: 'Liya Mekonnen',
    role: 'Community Outreach',
  },
];

function AboutTeams() {
  return (
    <section className="container about-teams">
      <div className="teams-title">
        <p className="section-tag">Our Team</p>
        <h2>Meet the Team</h2>
        <p className="teams-subtitle">
          Our mission is to bridge the educational gap for underprivileged students in Ethiopia.
        </p>
      </div>

      <div className="team-members">
        {teamMembers.map(({ image, name, role }) => (
          <div className="team-box" key={name}>
            <div className="team-image-wrapper">
              <img src={image} alt={name} />
            </div>
            <div className="team-info">
              <h3>{name}</h3>
              <p className="team-role">{role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutTeams;