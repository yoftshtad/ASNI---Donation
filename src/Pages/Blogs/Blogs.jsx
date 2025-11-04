import React, { useEffect, useState } from "react";
import { client } from "../../SanityClient.js";
import PostCard from "../Blogs/postcard/PostCard.jsx";
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
        console.log('Fetched posts:', data)
        setPosts(data)
        setError(null)
      })
      .catch((err) => {
        console.error('Sanity fetch error:', err)
        setError('Failed to load posts')
      })
      .finally(() => setLoading(false))
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="home-container">
      <h1 className="home-title">Latest Blog Posts</h1>
      {loading && <p>Loading posts…</p>}
      {error && <p>{error}</p>}
      {!loading && !error && posts.length === 0 && (
        <p>No posts found. Create and publish posts in Sanity Studio.</p>
      )}

      <div className="post-grid">
        {currentPosts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
