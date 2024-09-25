// src/components/Header.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css'; // Ensure this path is correct

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className="flex">
          <li>
            <Link href="/" className={styles.navLink}>Home</Link>
          </li>
          <li>
            <Link href="/posts" className={styles.navLink}>Posts</Link>
          </li>
          <li>
            <Link href="/create" className={styles.navLink}>Create Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
