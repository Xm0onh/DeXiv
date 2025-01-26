'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import styles from '@/styles/pages/browse.module.css';

type Paper = {
  id: number;
  title: string;
  authors: string[];
  abstract: string;
  category: string;
  date: string;
  citations: number;
  downloads: number;
};

export default function BrowsePapers() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  // This is placeholder data - replace with actual API call
  const papers: Paper[] = [
    {
      id: 1,
      title: "Quantum Computing: A New Approach to Machine Learning",
      authors: ["John Doe", "Jane Smith"],
      abstract: "This paper presents a novel approach to quantum computing applications in machine learning...",
      category: "cs.AI",
      date: "2024-03-20",
      citations: 45,
      downloads: 1234,
    },
    {
      id: 2,
      title: "Decentralized Networks in Modern Computing",
      authors: ["Alice Johnson", "Bob Wilson"],
      abstract: "An analysis of decentralized networks and their impact on modern computing systems...",
      category: "cs.DC",
      date: "2024-03-19",
      citations: 32,
      downloads: 891,
    },
    // Add more papers as needed
  ];

  return (
    <div className={styles.container}>
      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.glowOrb}></div>
        <div className={styles.glowOrb2}></div>
        
        <div className={styles.header}>
          <h1 className={styles.title}>Browse Research Papers</h1>
          <p className={styles.description}>
            Explore groundbreaking research from the academic community
          </p>
        </div>

        <div className={styles.searchSection}>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search papers, authors, or keywords..."
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>Search</button>
          </div>
        </div>

        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Category:</label>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={styles.select}
            >
              <option value="all">All Categories</option>
              <option value="cs.AI">Computer Science - AI</option>
              <option value="cs.CL">Computation and Language</option>
              <option value="cs.CR">Cryptography</option>
              <option value="cs.DC">Distributed Computing</option>
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={styles.select}
            >
              <option value="date">Most Recent</option>
              <option value="citations">Most Cited</option>
              <option value="downloads">Most Downloaded</option>
            </select>
          </div>
        </div>

        <div className={styles.papers}>
          {papers.map((paper) => (
            <article key={paper.id} className={styles.paper}>
              <h2 className={styles.paperTitle}>
                <a href={`/paper/${paper.id}`}>{paper.title}</a>
              </h2>
              
              <div className={styles.paperMeta}>
                <span className={styles.authors}>
                  {paper.authors.join(", ")}
                </span>
                <span className={styles.category}>{paper.category}</span>
                <span className={styles.date}>{paper.date}</span>
              </div>

              <p className={styles.abstract}>{paper.abstract}</p>

              <div className={styles.paperStats}>
                <div className={styles.stat}>
                  <span className={styles.statIcon}>📚</span>
                  <span>{paper.citations} citations</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statIcon}>⬇️</span>
                  <span>{paper.downloads} downloads</span>
                </div>
                <button className={styles.downloadButton}>
                  Download PDF
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.pagination}>
          <button className={styles.pageButton}>Previous</button>
          <span className={styles.pageNumber}>Page 1 of 10</span>
          <button className={styles.pageButton}>Next</button>
        </div>
      </main>
    </div>
  );
} 