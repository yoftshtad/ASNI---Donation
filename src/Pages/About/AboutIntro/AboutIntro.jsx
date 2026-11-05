import './AboutIntro.css';

function AboutIntro() {
  return (
    <section className="about-intro">
      <div className="about-intro-overlay" />
      <div className="container about-intro-content">
        <p className="page-tag">Who We Are</p>
        <h1>About Us</h1>
        <p className="page-subtitle">
          Learn about our mission, our team, and the students whose lives we're changing.
        </p>
      </div>
    </section>
  );
}

export default AboutIntro;