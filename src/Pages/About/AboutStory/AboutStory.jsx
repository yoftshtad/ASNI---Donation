import Story_img from '../../../assets/Images/Story_img.png'; // Change to .jpg if needed
import './AboutStory.css';

function AboutStory() {
  return (
    <section className="container about-story">
      <div className="left-side-story">
        <div className="story-image-wrapper">
          <img src={Story_img} alt="ASNI story" />
          
          {/* Gold Frame behind the image */}
          <div className="story-image-accent"></div>
          
          {/* Floating "Since 2015" Badge */}
          <div className="story-badge">
            <span className="story-badge-number">10+</span>
            <span className="story-badge-text">Years of Impact</span>
          </div>
        </div>
      </div>

      <div className="right-side-story">
        <p className="section-tag">Who We Are</p>
        <h2>Our Story</h2>
        <p className="story-text">
          Founded in 2015, ASNI has grown from a small volunteer initiative into 
          a nationwide effort dedicated to improving education in Ethiopia. We 
          work hand-in-hand with communities, providing essential tools, modern 
          facilities, and training that help children succeed.
        </p>
        <p className="story-text">
          Every project is rooted in local collaboration, ensuring that schools 
          receive the support they need for long-term success.
        </p>
      </div>
    </section>
  );
}

export default AboutStory;