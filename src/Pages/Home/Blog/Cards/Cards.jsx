import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import './Cards.css'

const Card = ({ image, title, text , date}) => {
    return (
      <div className="card">
        <img src={image} alt={title} />

        <div className="card-content">
            <p className='date'>{date}</p>
            <h3 className="blog-title">{title}</h3>
            <p className="blog-text">{text}</p>

            <button className='btn3'>Read more <MdArrowOutward/></button>
        </div>
      </div>
    );
  };

export default Card
