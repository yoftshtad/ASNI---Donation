import { Link } from 'react-router-dom';
import Whoweare_img from '../../../assets/Images/Whoweare_img.png'; // Ensure this is .png or .jpg
import './Whoweare.css';

function Whoweare() {
  return (
    <section className="container whoweare">
      <div className="left-side-who">
        <p className="section-tag">About Us</p>
        <h2>Who we are and what we do</h2>
        <p className="section-description">
          We are a dedicated organization committed to transforming lives through 
          education in Ethiopia. Our mission is to provide opportunities for 
          talented students who lack financial resources.
        </p>

        <div className="vna">
          <div className="info-card">
            <div className="card-icon">🎯</div>
            <div>
              <h4>Our Vision</h4>
              <p>Create sustainable pathways for education and economic empowerment.</p>
            </div>
          </div>

          <div className="info-card">
            <div className="card-icon">💡</div>
            <div>
              <h4>Our Approach</h4>
              <p>Direct support and mentorship to help students achieve their academic and professional goals.</p>
            </div>
          </div>
        </div>

        <div className="buttons" style={{ marginTop: '10px' }}>
          <Link to="/about" className="btn">Learn More</Link>
        </div>
      </div>

      <div className="right-side-who">
        <div className="who-image-wrapper">
          <img src={Whoweare_img} alt="Our team in Ethiopia" />
          {/* Decorative background shape */}
          <div className="who-image-accent"></div>
        </div>
      </div>
    </section>
  );
}

export default Whoweare;