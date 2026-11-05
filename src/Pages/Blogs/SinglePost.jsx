import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import { client, urlFor } from '../../SanityClient';
import './SinglePost.css';

export default function SinglePost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const query = `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      mainImage,
      body,
      _createdAt
    }`;

    client
      .fetch(query, { slug })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Sanity fetch error:', err);
        setError('Failed to load this post.');
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="container single-post-status">
        <div className="loading-spinner" />
        <p>Loading post...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container single-post-status">
        <h2>Post not found</h2>
        <p>The post you're looking for doesn't exist or has been removed.</p>
        <Link to="/blogs" className="btn">Back to all posts</Link>
      </div>
    );
  }

  const formattedDate = new Date(post._createdAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article className="single-post-page">
      {/* Hero */}
      <div className="single-post-hero">
        <div className="single-post-hero-overlay" />
        <div className="container single-post-hero-content">
          <Link to="/blogs" className="back-link">← Back to all posts</Link>
          <p className="single-post-meta">{formattedDate}</p>
          <h1>{post.title}</h1>
        </div>
      </div>

      {/* Body */}
      <div className="container single-post-body">
        {post.mainImage && (
          <img
            src={urlFor(post.mainImage).width(1200).url()}
            alt={post.title}
            className="single-post-image"
            loading="lazy"
          />
        )}

        <PortableText value={post.body} />

        <div className="single-post-footer">
          <Link to="/blogs" className="back-btn">← Back to all posts</Link>
          <Link to="/donation" className="support-btn">Support a Student</Link>
        </div>
      </div>
    </article>
  );
}