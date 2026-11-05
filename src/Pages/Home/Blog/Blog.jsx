import './Blog.css';
import Card from './Cards/Cards'; // Adjusted path based on your folder structure
import Blog1_img from '../../../assets/Images/Blog1_img.png'; // Change to .jpg if needed
import Blog2_img from '../../../assets/Images/Blog2_img.png';
import Blog3_img from '../../../assets/Images/Blog3_img.png';

function Blog() {
  return (
    <section className="Blog container">
      <div className="title">
        <p className="section-tag">Blogs</p>
        <h2>Student Journey</h2>
        <p className="section-subtitle">
          Real stories of transformation and hope from our scholarship recipients.
        </p>
      </div>

      <div className="Cards">
        <Card 
          image={Blog1_img} 
          date="20 Jun 2025" 
          title="Empowering Girls Through Education" 
          text="We’re focused on breaking barriers and supporting young girls in rural communities..."
        />
        <Card 
          image={Blog2_img} 
          date="20 Jul 2025" 
          title="Providing School Supplies to 500 Students" 
          text="From books to uniforms, our latest initiative gave hope to hundreds of children..."
        />
        <Card 
          image={Blog3_img} 
          date="20 Aug 2025" 
          title="Art and Creativity in the Classroom" 
          text="Promoting creative subjects to inspire innovation and self-expression"
        />
      </div>
    </section>
  );
}

export default Blog;