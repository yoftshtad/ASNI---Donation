import './Valuecard.css';

const Valuecard = ({ image, title, text }) => {
  return (
    <div className="valuecard">
      <div className="valuecard-icon">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Valuecard;