// src/app/api/posts/route.ts

import { NextResponse } from 'next/server';

// Mock posts data for now (you will replace this with a database call)
const mockPosts = [
  { id: 1, title: 'First Post', content: 'This is the first post', author: 'Admin', created_at: '2024-09-01' },
  { id: 2, title: 'Second Post', content: 'This is the second post', author: 'Editor', created_at: '2024-09-05' },
];

export async function GET() {
  return NextResponse.json(mockPosts);
}

export async function POST(request: Request) {
  const data = await request.json();
  mockPosts.push({ ...data, id: mockPosts.length + 1, created_at: new Date().toISOString() });
  return NextResponse.json({ message: 'Post created successfully!' });
}
