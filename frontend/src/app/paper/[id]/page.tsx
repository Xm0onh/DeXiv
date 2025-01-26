'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import styles from '@/styles/pages/paper.module.css';

type SectionKey = 'abstract' | 'introduction' | 'methodology' | 'results' | 'discussion' | 'conclusion';

type Version = {
  version: string;
  date: string;
  changes: string;
};

export default function PaperView() {
  const [activeTab, setActiveTab] = useState<SectionKey>('abstract');
  const [showVersions, setShowVersions] = useState(false);
  
  // Mock data - replace with real data
  const paper = {
    title: "Quantum Neural Networks in Decentralized Systems",
    authors: ["Dr. Alice Johnson", "Prof. Bob Smith", "Dr. Carol Williams"],
    abstract: "This groundbreaking research explores the intersection of quantum computing and neural networks in decentralized systems...",
    date: "2024-03-15",
    doi: "10.1234/quantum.2024.001",
    citations: 42,
    downloads: 1337,
    keywords: ["Quantum Computing", "Neural Networks", "DeSci", "Blockchain"],
    sections: {
      abstract: "Detailed abstract content...",
      introduction: "Introduction content...",
      methodology: "Methodology content...",
      results: "Results content...",
      discussion: "Discussion content...",
      conclusion: "Conclusion content..."
    } as Record<SectionKey, string>,
    versions: [
      { version: "v1.2", date: "2024-03-15", changes: "Updated methodology section" },
      { version: "v1.1", date: "2024-02-28", changes: "Minor revisions to results" },
      { version: "v1.0", date: "2024-02-01", changes: "Initial publication" }
    ] as Version[]
  };

  return (
    <div className={styles.container}>
      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.glowOrb}></div>
        <div className={styles.glowOrb2}></div>
        <div className={styles.matrixBg}></div>
        <div className={styles.hexGrid}></div>

        <article className={styles.paper}>
          <header className={styles.header}>
            <h1 className={styles.title}>{paper.title}</h1>
            
            <div className={styles.authors}>
              {paper.authors.map((author, index) => (
                <span key={index} className={styles.author}>
                  {author}
                </span>
              ))}
            </div>

            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Published</span>
                <span className={styles.metaValue}>{paper.date}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>DOI</span>
                <span className={styles.metaValue}>{paper.doi}</span>
              </div>
            </div>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{paper.citations}</span>
                <span className={styles.statLabel}>Citations</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{paper.downloads}</span>
                <span className={styles.statLabel}>Downloads</span>
              </div>
            </div>

            <div className={styles.keywords}>
              {paper.keywords.map((keyword, index) => (
                <span key={index} className={styles.keyword}>
                  {keyword}
                </span>
              ))}
            </div>
          </header>

          <div className={styles.actions}>
            <button className={styles.actionButton}>
              Download PDF
            </button>
            <button className={styles.actionButton}>
              Cite Paper
            </button>
            <button className={styles.actionButton}>
              Share
            </button>
            <button 
              className={`${styles.actionButton} ${showVersions ? styles.active : ''}`}
              onClick={() => setShowVersions(!showVersions)}
            >
              Versions
            </button>
          </div>

          {showVersions && (
            <div className={styles.versions}>
              {paper.versions.map((v, index) => (
                <div key={index} className={styles.versionItem}>
                  <div className={styles.versionHeader}>
                    <span className={styles.versionNumber}>{v.version}</span>
                    <span className={styles.versionDate}>{v.date}</span>
                  </div>
                  <p className={styles.versionChanges}>{v.changes}</p>
                </div>
              ))}
            </div>
          )}

          <nav className={styles.tabs}>
            {Object.keys(paper.sections).map((section) => (
              <button
                key={section}
                className={`${styles.tab} ${activeTab === section ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(section as SectionKey)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>

          <section className={styles.content}>
            <div className={styles.pixelCorner}></div>
            <div className={styles.pixelCorner}></div>
            <div className={styles.pixelCorner}></div>
            <div className={styles.pixelCorner}></div>
            
            {paper.sections[activeTab]}
          </section>
        </article>
      </main>
    </div>
  );
} 