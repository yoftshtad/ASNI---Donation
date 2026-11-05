import { useEffect, useState } from "react";
import { client } from "../../SanityClient.js";
import PostCard from "./postcard/PostCard.jsx"; // Adjusted path
import './Blogs.css';

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    client
      .fetch(`*[_type == "post"] | order(_createdAt desc){
        _id,
        title,
        slug,
        mainImage,
        body,
        _createdAt
      }`)
      .then((data) => {
        setPosts(data);
        setError(null);
      })
      .catch((err) => {
        console.error('Sanity fetch error:', err);
        setError('Failed to load posts. Please try again later.');
      })
      .finally(() => setLoading(false));
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="blogs-page">
      {/* --- Page Header --- */}
      <section className="blogs-hero">
        <div className="container blogs-hero-content">
          <p className="section-tag">Our Blog</p>
          <h1>Stories of Change</h1>
          <p className="blogs-hero-subtitle">
            Real journeys of students and communities transformed through the power of education.
          </p>
        </div>
      </section>

      {/* --- Posts Grid --- */}
      <section className="container blogs-main">
        {loading && (
          <div className="blogs-status">
            <div className="loading-spinner" />
            <p>Loading posts...</p>
          </div>
        )}

        {error && (
          <div className="blogs-status">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="blogs-status">
            <p>No posts yet. Check back soon!</p>
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <>
            <div className="post-grid">
              {currentPosts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}