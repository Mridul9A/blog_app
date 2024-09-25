// src/app/create/page.tsx
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ReactQuill from 'react-quill'; // Rich text editor
import 'react-quill/dist/quill.bubble.css'; // Import Quill styles
import styles from './CreatePost.module.css'; // Import your styles

interface CreatePostPageProps {
  onPostCreated: () => void; // Function to call when a post is created
}

const CreatePostPage: React.FC<CreatePostPageProps> = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!title || !content) {
      setError('Title and content are required.');
      return;
    }
  
    setError(null);
  
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });
  
    if (response.ok) {
      onPostCreated(); // Call the function here
      router.push('/posts');
    } else {
      setError('Failed to create post.');
    }
  };
  
  
  

  return (
    <div className={styles.container}>
      <h1 className="text-3xl font-bold mb-4">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && <div className="text-red-500">{error}</div>}

        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="content" className={styles.label}>Content</label>
          <ReactQuill
            value={content}
            onChange={setContent}
            className={styles.textarea}
            theme="bubble"
          />
        </div>

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePostPage;
