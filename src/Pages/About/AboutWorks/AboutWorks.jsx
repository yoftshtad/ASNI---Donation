import Works_img from '../../../assets/Images/Works_image.png'; // Change to .jpg if needed
import Donate_icon from '../../../assets/Icons/Donate.png';
import Support_icon from '../../../assets/Icons/Support.png';
import Impact_icon from '../../../assets/Icons/Impact.png';
import './AboutWorks.css';

const steps = [
  {
    icon: Donate_icon,
    title: 'Donate',
    text: 'Choose an amount or project to support.',
  },
  {
    icon: Support_icon,
    title: 'Support a Student',
    text: 'Your donation helps pay for tuition, books, or school supplies.',
  },
  {
    icon: Impact_icon,
    title: 'See the Impact',
    text: 'We share stories and updates about the students you\'ve helped.',
  },
];

function AboutWorks() {
  return (
    <section className="container about-works">
      
      {/* Left Side: Layered Image */}
      <div className="left-side-works">
        <div className="works-image-wrapper">
          <img src={Works_img} alt="How ASNI works" />
          <div className="works-image-accent"></div>
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="right-side-works">
        <div className="top-right-works">
          <p className="section-tag">Impact</p>
          <h2>How It Works</h2>
          <p className="works-subtitle">
            Every contribution helps a student pursue their dreams and create lasting change in their community.
          </p>
        </div>

        <div className="bottom-right-works">
          {steps.map(({ icon, title, text }, index) => (
            <div className="bottom-content" key={title}>
              <div className="step-icon">
                <img src={icon} alt={`${title} icon`} />
              </div>
              <div className="step-text">
                <h3>
                  <span className="step-number">{index + 1}.</span> {title}
                </h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutWorks;