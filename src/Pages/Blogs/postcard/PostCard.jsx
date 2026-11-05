import { Link } from 'react-router-dom';
import { urlFor } from '../../../SanityClient';
import './PostCard.css';

export default function PostCard({ post }) {
  const formattedDate = new Date(post._createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const getExcerpt = (body) => {
    if (!body || !Array.isArray(body)) return '';
    const firstTextBlock = body.find(block => block._type === 'block');
    if (!firstTextBlock?.children?.[0]?.text) return '';
    const text = firstTextBlock.children[0].text;
    return text.length > 120 ? `${text.substring(0, 120)}...` : text;
  };

  const excerpt = getExcerpt(post.body);

  return (
    <Link to={`/blogs/${post.slug?.current}`} className="post-card">
      {post.mainImage && (
        <div className="post-image-wrapper">
          <img
            src={urlFor(post.mainImage).width(600).height(400).url()}
            alt={post.title}
            className="post-image"
            loading="lazy"
          />
        </div>
      )}

      <div className="post-content">
        <p className="post-meta">{formattedDate}</p>
        <h3 className="post-title">{post.title}</h3>
        {excerpt && <p className="post-excerpt">{excerpt}</p>}

        <span className="post-read-more">
          Read Article
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
    </Link>
  );
}