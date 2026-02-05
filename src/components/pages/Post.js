import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { marked } from 'marked';

export const Post = () => {
  const { id } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      const res = await fetch(`/posts/${id}.md`);
      const text = await res.text();
      const html = await marked.parse(text);
      setContent(html); 
    };

    fetchMarkdown();
  }, [id]);

  return (
    <div className='page'>
      <div className='markdown-body' dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};
