/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/post/all`);
      setPosts(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch posts');
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="posts-container">
      <h1>Community Issues</h1>
      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post._id} className="post-card">
            <div className="post-image">
              <img 
                src={`${import.meta.env.VITE_API_URL}/${post.image}`} 
                alt={post.title} 
              />
            </div>
            <div className="post-content">
              <h2>{post.title}</h2>
              <p className="post-address">{post.address}</p>
              <div className="post-tags">
                <span className={`priority-tag ${post.tags.priority.toLowerCase()}`}>
                  {post.tags.priority}
                </span>
                <span className="category-tag">{post.tags.category}</span>
                <span className={`status-tag ${post.tags.status.toLowerCase().replace(' ', '-')}`}>
                  {post.tags.status}
                </span>
              </div>
              <div className="post-footer">
                <span className="post-author">Posted by: {post.name}</span>
                <span className="post-date">
                  {new Date(post.date).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .posts-container {
          padding: 2rem;
        }

        h1 {
          color: #1f2937;
          margin-bottom: 2rem;
        }

        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .post-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }

        .post-card:hover {
          transform: translateY(-4px);
        }

        .post-image {
          height: 200px;
          overflow: hidden;
        }

        .post-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .post-content {
          padding: 1.5rem;
        }

        .post-content h2 {
          margin: 0 0 0.5rem 0;
          font-size: 1.25rem;
          color: #1f2937;
        }

        .post-address {
          color: #6b7280;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .post-tags {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .post-tags span {
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .priority-tag {
          background-color: #fee2e2;
          color: #dc2626;
        }

        .priority-tag.medium {
          background-color: #fef3c7;
          color: #d97706;
        }

        .priority-tag.low {
          background-color: #d1fae5;
          color: #059669;
        }

        .category-tag {
          background-color: #e0e7ff;
          color: #4f46e5;
        }

        .status-tag {
          background-color: #f3f4f6;
          color: #374151;
        }

        .status-tag.in-progress {
          background-color: #dbeafe;
          color: #2563eb;
        }

        .status-tag.resolved {
          background-color: #d1fae5;
          color: #059669;
        }

        .post-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
          font-size: 0.875rem;
          color: #6b7280;
        }
      `}</style>
    </div>
  );
}

export default Posts;
