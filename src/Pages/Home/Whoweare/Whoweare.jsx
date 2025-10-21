import React from 'react'
import './Whoweare.css'
import Whoweare_img from '../../../assets/Images/Whoweare_img.png'

function Whoweare() {
  return (
    <div className="container whowerare">
        <div className="left-side-who">
            <p><b>About</b></p>
            <h2>Who we are and What we do</h2>
            <p>We are a dedicated organization committed to transforming lives through education in Ethiopia. Our mission is to provide opportunities for talented students who lack financial resources.</p>
            <div className="vna">
                <div className="vision">
                    <p><b>Our Vision</b></p>
                    <p>Create sustainable pathways for education and economic empowerment</p>
                </div>

                <div className="approach">
                    <p><b>Our Approach</b></p>
                    <p>Direct support and mentorship to help students achieve their academic and professional goals</p>
                </div>
            </div>
            <div className="buttons">
            <button className='btn'>Learn more</button>
            </div>
            

        </div>


        <div className="right-side-who">
            <img src={Whoweare_img} alt='Whoweare_img'/>
        </div>

    </div>
  )
}

export default Whoweare