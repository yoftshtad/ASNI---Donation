import React from 'react'
import './Blog.css'
import Card from '../Blog/Cards/Cards'
import Blog1_img from '../../../assets/Images/Blog1_img.png'
import Blog2_img from '../../../assets/Images/Blog2_img.png'
import Blog3_img from '../../../assets/Images/Blog3_img.png'

function Blog() {
  return (
    
    <div className="container Blog">
        <div className="title">
            <p><b>Blogs</b></p>
            <h2>Student Journey</h2>
            <p>Real stories of transformation and hope from our scholarship recipients</p>
        </div>
        <div className="Cards">
            <Card image={Blog1_img} date='20-6-2025' title='Empowering Girls Through Education' text='We’re focused on breaking barriers and supporting young girls in rural communities...'/>
            <Card image={Blog2_img} date='20-7-2025' title='Providing School Supplies to 500 Students' text='From books to uniforms, our latest initiative gave hope to hundreds of children...'/>
            <Card image={Blog3_img} date='20-8-2025' title='Art and Creativity in the Classroom' text='Promoting creative subjects to inspire innovation and self-expression'/>
        </div>

    </div>
  )
}

export default Blog