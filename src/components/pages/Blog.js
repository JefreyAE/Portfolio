import React from 'react';
import { Link } from 'react-router-dom';

export const Blog = () => {
  const posts = ['first-post']; // Esto puede venir de un JSON en el futuro

  return (
    <div className='page'>
      <h2 className='heading'>Blog</h2>
      <ul>
        {posts.map((slug) => (
          <li key={slug}>
            <Link to={`/blog/${slug}`}>Ver post: {slug}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
