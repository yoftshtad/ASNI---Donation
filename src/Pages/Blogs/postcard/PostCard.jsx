import './PostCard.css';
import React from "react";
import { urlFor } from '../../../SanityClient.js';
import { PortableText } from "@portabletext/react";


export default function PostCard({ post }) {
  const formattedDate = new Date(post._createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="post-card">
      {post.mainImage ? (
        <img
          src={urlFor(post.mainImage).width(600).height(400).url()}
          alt={post.title}
          className="post-image"
        />
      ) : null}
      <div className="post-content">
        <p className="post-meta">{formattedDate}</p>
        <h2 className="post-title">{post.title}</h2>
        {post.body ? (
          <div className="post-body">
            <PortableText value={post.body} />
          </div>
        ) : null}
      </div>
    </div>
  );
}


