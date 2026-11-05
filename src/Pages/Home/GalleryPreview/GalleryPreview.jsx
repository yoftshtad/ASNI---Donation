import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './GalleryPreview.css';

// Import the first 4 photos for the home page teaser
import IMG1 from '../../../assets/Images/Gallery/IMG-1.jpg';
import IMG2 from '../../../assets/Images/Gallery/IMG-2.jpg';
import IMG3 from '../../../assets/Images/Gallery/IMG-3.jpg';
import IMG4 from '../../../assets/Images/Gallery/IMG-4.jpg';

const previews = [IMG1, IMG2, IMG3, IMG4];

function GalleryPreview() {
  return (
    <section className="container gallery-preview-section">
      <div className="gallery-preview-header">
        <p className="section-tag">Gallery</p>
        <h2>See Your Impact</h2>
        <p className="gallery-preview-subtitle">
          Every donation creates moments like these. Explore the full gallery.
        </p>
      </div>

      <div className="gallery-preview-grid">
        {previews.map((src, i) => (
          <div className="preview-item" key={i}>
            <img src={src} alt={`Preview ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      <div className="gallery-preview-cta">
        <Link to="/gallery" className="btn">
          View Full Gallery <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}

export default GalleryPreview;