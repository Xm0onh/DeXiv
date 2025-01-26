'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import styles from '@/styles/pages/browse.module.css';

export default function BrowsePapers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Mock data - replace with real data
  const papers = [
    {
      id: 1,
      title: "Quantum Computing in Neural Networks",
      authors: "Alice Johnson, Bob Smith",
      abstract: "This paper explores the intersection of quantum computing and neural networks...",
      date: "2024-03-15",
      category: "Quantum Computing"
    },
    // Add more mock papers...
  ];

  return (
    <div className={styles.container}>
      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.glowOrb}></div>
        <div className={styles.glowOrb2}></div>

        <header className={styles.header}>
          <h1 className={styles.title}>Browse Research Papers</h1>
          <p className={styles.subtitle}>Explore the latest in decentralized research</p>
          
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search papers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>SEARCH</button>
          </div>

          <div className={styles.filters}>
            <select className={styles.filterSelect}>
              <option value="">All Categories</option>
              <option value="quantum">Quantum Computing</option>
              <option value="ai">Artificial Intelligence</option>
              <option value="blockchain">Blockchain</option>
            </select>
            <select className={styles.filterSelect}>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="cited">Most Cited</option>
            </select>
          </div>
        </header>

        <section className={styles.papers}>
          {papers.map((paper) => (
            <article key={paper.id} className={styles.paperCard}>
              <div className={styles.pixelCorner}></div>
              <div className={styles.pixelCorner}></div>
              <div className={styles.pixelCorner}></div>
              <div className={styles.pixelCorner}></div>
              
              <h2 className={styles.paperTitle}>{paper.title}</h2>
              <p className={styles.paperAuthors}>{paper.authors}</p>
              <p className={styles.paperAbstract}>{paper.abstract}</p>
              
              <div className={styles.paperMeta}>
                <span className={styles.paperDate}>{paper.date}</span>
                <span className={styles.paperCategory}>{paper.category}</span>
              </div>
              
              <div className={styles.paperActions}>
                <Link 
                  href={`/paper/${paper.id}`} 
                  className={styles.actionButton}
                >
                  View Paper
                </Link>
                <button className={styles.actionButton}>Download PDF</button>
              </div>
            </article>
          ))}
        </section>

        <div className={styles.pagination}>
          <button 
            className={styles.pageButton}
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          >
            {'< PREV'}
          </button>
          <span className={styles.pageNumber}>PAGE {currentPage}</span>
          <button 
            className={styles.pageButton}
            onClick={() => setCurrentPage(p => p + 1)}
          >
            {'NEXT >'}
          </button>
        </div>
      </main>
    </div>
  );
} 