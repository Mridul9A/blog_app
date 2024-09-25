// src/app/posts/[id]/page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Use useParams in Next.js 13+
import { Post } from '../../../types';

const PostDetailPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null); // Track error state

  useEffect(() => {
    if (id) {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}/`)
            .then((response) => {
                if (!response.ok) throw new Error('Post not found');
                return response.json();
            })
            .then((data) => setPost(data))
            .catch((err) => setError(err.message));
    }
}, [id]);


  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!post) return <div>Loading...</div>;

  return (
    <article className="p-8">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
};

export default PostDetailPage;
