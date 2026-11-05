import { Link } from 'react-router-dom';
import Hero_img from '../../../assets/Images/Gallery/Hero_img.jpg'; 
import './Hero.css';

function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="container hero-inner">
        
        {/* Left Side: Text */}
        <div className="left-side-home">
          <h1>Empowering students in Ethiopia to <span className="highlight">dream bigger.</span></h1>
          <p className="hero-description">
            Every contribution helps a student break the cycle of poverty. 
            We connect donors with talented students who need support to pursue their dreams.
          </p>
          <div className="buttons">
            <Link to="/donation" className="btn">Donate Now</Link>
            <Link to="/about" className="btn2">Learn More</Link>
          </div>
          <div className="hero-trust">
            <div className="avatars">
              <img src="https://i.pravatar.cc/100?img=1" alt="Donor" />
              <img src="https://i.pravatar.cc/100?img=2" alt="Donor" />
              <img src="https://i.pravatar.cc/100?img=3" alt="Donor" />
            </div>
            <p>Join <b>2,000+</b> monthly donors</p>
          </div>
        </div>

        {/* Right Side: Organic Image Shape */}
        <div className="right-side-home">
          <div className="hero-image-container">
            {/* CSS Blob Shape */}
            <div className="image-blob">
              <img src={Hero_img} alt="Ethiopian student" />
            </div>
            
            {/* Floating Badge */}
            <div className="floating-badge">
              <div className="badge-icon">💛</div>
              <div>
                <p className="badge-title">100% Secure</p>
                <p className="badge-sub">Goes to students</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;