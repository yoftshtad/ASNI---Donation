import Valuecard from './Valuecard/Valuecard';
import Transparency_img from '../../../assets/Icons/transparency.png';
import Equality_img from '../../../assets/Icons/equality.png';
import Community_img from '../../../assets/Icons/community.png';
import './AboutValues.css';

const values = [
  {
    image: Transparency_img,
    title: 'Transparency',
    text: 'Every donation is tracked and used responsibly.',
  },
  {
    image: Equality_img,
    title: 'Equality',
    text: 'We believe education should be accessible to everyone.',
  },
  {
    image: Community_img,
    title: 'Community',
    text: 'Together, we lift each other up through understanding.',
  },
];

function AboutValues() {
  return (
    <section className="container about-values">
      <div className="values-title">
        <p className="section-tag">Our Goals</p>
        <h2>Our Values</h2>
        <p className="values-subtitle">
          Our mission is to bridge the educational gap for underprivileged students in Ethiopia.
        </p>
      </div>

      <div className="values-sections">
        {values.map(({ image, title, text }) => (
          <Valuecard key={title} image={image} title={title} text={text} />
        ))}
      </div>
    </section>
  );
}

export default AboutValues;