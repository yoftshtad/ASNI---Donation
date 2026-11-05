import { useState, useEffect, useCallback } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import './Gallery.css';

// --- IMPORT YOUR 12 REAL PHOTOS ---
import IMG1 from '../../assets/Images/Gallery/IMG-1.jpg';
import IMG2 from '../../assets/Images/Gallery/IMG-2.jpg';
import IMG3 from '../../assets/Images/Gallery/IMG-3.jpg';
import IMG4 from '../../assets/Images/Gallery/IMG-4.jpg';
import IMG5 from '../../assets/Images/Gallery/IMG-5.jpg';
import IMG6 from '../../assets/Images/Gallery/IMG-6.jpg';
import IMG7 from '../../assets/Images/Gallery/IMG-7.jpg';
import IMG8 from '../../assets/Images/Gallery/IMG-8.jpg';
import IMG9 from '../../assets/Images/Gallery/IMG-9.jpg';
import IMG10 from '../../assets/Images/Gallery/IMG-10.jpg';
import IMG11 from '../../assets/Images/Gallery/IMG-11.jpg';
import IMG12 from '../../assets/Images/Gallery/IMG-12.jpg';

// --- IMPORT YOUR 2 VIDEOS ---
import video1 from '../../assets/Videos/VID-1.mp4';
import video2 from '../../assets/Videos/VID-2.mp4';

// --- SET UP THE PHOTO DATA ---
const photos = [
  { id: 1, src: IMG1, alt: 'Students in class' },
  { id: 2, src: IMG2, alt: 'Community gathering' },
  { id: 3, src: IMG3, alt: 'Learning moment' },
  { id: 4, src: IMG4, alt: 'School supplies' },
  { id: 5, src: IMG5, alt: 'Graduation day' },
  { id: 6, src: IMG6, alt: 'Teacher and student' },
  { id: 7, src: IMG7, alt: 'Playground' },
  { id: 8, src: IMG8, alt: 'Study session' },
  { id: 9, src: IMG9, alt: 'Classroom project' },
  { id: 10, src: IMG10, alt: 'Community event' },
  { id: 11, src: IMG11, alt: 'School environment' },
  { id: 12, src: IMG12, alt: 'Students smiling' },
];

// --- SET UP THE VIDEO DATA ---
const videos = [
  { 
    id: 'v1', 
    src: video1, 
    poster: IMG1, 
    title: 'The Class Rooms', 
    description: 'This is the class room the students are learning in', 
    duration: '1:49' 
  },
  { 
    id: 'v2', 
    src: video2, 
    poster: IMG2, 
    title: 'Giving', 
    description: 'A videos of us giving the bags to the children', 
    duration: '2:45' 
  }
];

function Gallery() {
  const [activeTab, setActiveTab] = useState('photos');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => setLightboxIndex((i) => (i === 0 ? photos.length - 1 : i - 1)), []);
  const goNext = useCallback(() => setLightboxIndex((i) => (i === photos.length - 1 ? 0 : i + 1)), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex, goPrev, goNext]);

  useEffect(() => {
    document.body.style.overflow = activeVideo ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeVideo]);

  return (
    <main className="gallery-page">
      <section className="container gallery-header">
        <p className="section-tag">Gallery</p>
        <h1>Moments of Impact</h1>
        <p className="gallery-subtitle">
          A glimpse into the classrooms, communities, and students whose lives you're changing.
        </p>
      </section>

      <div className="container gallery-tabs">
        <button className={`tab-btn ${activeTab === 'photos' ? 'active' : ''}`} onClick={() => setActiveTab('photos')}>
          Photos <span className="tab-count">({photos.length})</span>
        </button>
        <button className={`tab-btn ${activeTab === 'videos' ? 'active' : ''}`} onClick={() => setActiveTab('videos')}>
          Videos <span className="tab-count">({videos.length})</span>
        </button>
      </div>

      {activeTab === 'photos' && (
        <section className="container photo-grid">
          {photos.map((photo, i) => (
            <button key={photo.id} className="photo-item" onClick={() => openLightbox(i)} aria-label={`View photo: ${photo.alt}`}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="photo-hover-overlay"><span>View</span></div>
            </button>
          ))}
        </section>
      )}

      {activeTab === 'videos' && (
        <section className="container videos-grid-gallery">
          {videos.map((video) => (
            <button key={video.id} className="video-card-gallery" onClick={() => setActiveVideo(video)} aria-label={`Play video: ${video.title}`}>
              <div className="video-thumb">
                <img src={video.poster} alt={video.title} loading="lazy" />
                <div className="video-play-overlay"><div className="play-circle"><FaPlay /></div></div>
                <span className="video-duration-badge">{video.duration}</span>
              </div>
              <div className="video-meta">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </button>
          ))}
        </section>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}><FaTimes /></button>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); goPrev(); }}><FaChevronLeft /></button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={photos[lightboxIndex].src} alt={photos[lightboxIndex].alt} />
            <p className="lightbox-counter">{lightboxIndex + 1} / {photos.length}</p>
          </div>
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); goNext(); }}><FaChevronRight /></button>
        </div>
      )}

      {/* Video Modal */}
      {activeVideo && (
        <div className="video-modal" onClick={() => setActiveVideo(null)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setActiveVideo(null)}><FaTimes /></button>
            <video src={activeVideo.src} poster={activeVideo.poster} controls autoPlay playsInline />
            <h3 className="video-modal-title">{activeVideo.title}</h3>
          </div>
        </div>
      )}
    </main>
  );
}

export default Gallery;