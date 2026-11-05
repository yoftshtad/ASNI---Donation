import { Link } from 'react-router-dom';
import Difference_img from '../../../assets/Images/Difference_img.png'; // Change to .jpg if needed
import './Difference.css';

function Difference() {
  return (
    <section className="container Difference">
      
      {/* Left Side: Layered Image */}
      <div className="left-side-dif">
        <div className="dif-image-wrapper">
          <img src={Difference_img} alt="Students making a difference" />
          <div className="dif-image-bg"></div>
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="right-side-dif">
        <p className="section-tag">Impact</p>
        <h2>How your donation makes a difference</h2>
        <p className="section-subtitle">
          Every contribution helps a student pursue their dreams and create lasting change in their community.
        </p>
        
        <ul className="impact-list">
          <li>
            <span className="check-icon">✓</span>
            Scholarships provided annually
          </li>
          <li>
            <span className="check-icon">✓</span>
            Students supported in higher education
          </li>
          <li>
            <span className="check-icon">✓</span>
            Communities transformed through education
          </li>
        </ul>

        <div className="buttons">
          <Link to="/donation" className="btn">Donate Now</Link>
          <Link to="/about" className="btn2">Learn more</Link>
        </div>
      </div>

    </section>
  );
}

export default Difference;