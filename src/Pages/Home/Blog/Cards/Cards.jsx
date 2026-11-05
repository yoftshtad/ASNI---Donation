import { MdArrowOutward } from "react-icons/md";
import './Cards.css';

const Card = ({ image, title, text, date }) => {
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img src={image} alt={title} />
      </div>

      <div className="card-content">
        <p className='date-badge'>{date}</p>
        <h3 className="blog-title">{title}</h3>
        <p className="blog-text">{text}</p>

        <button className='btn3'>
          Read Article <MdArrowOutward />
        </button>
      </div>
    </div>
  );
};

export default Card;