'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import styles from '@/styles/pages/paper.module.css';
import Link from 'next/link';

type PaperDetails = {
  id: number;
  title: string;
  authors: string[];
  abstract: string;
  category: string;
  date: string;
  citations: number;
  downloads: number;
  doi: string;
  references: string[];
  keywords: string[];
};

type Version = {
  version: string;
  date: string;
  changes: string;
  hash: string;
};

export default function PaperView({ params }: { params: { id: string } }) {
  // This is placeholder data - replace with actual API call using params.id
  const paper: PaperDetails & { versions: Version[] } = {
    id: 1,
    title: "Quantum Computing: A New Approach to Machine Learning",
    authors: ["John Doe", "Jane Smith"],
    abstract: "This paper presents a novel approach to quantum computing applications in machine learning, demonstrating significant improvements in computational efficiency and accuracy. Our research shows promising results in applying quantum algorithms to complex ML tasks, potentially revolutionizing the field of artificial intelligence.",
    category: "cs.AI",
    date: "2024-03-20",
    citations: 45,
    downloads: 1234,
    doi: "10.1234/quantum.2024.123",
    keywords: ["Quantum Computing", "Machine Learning", "AI", "Quantum Algorithms"],
    references: [
      "Smith et al. (2023) 'Quantum Computing Basics'",
      "Johnson et al. (2023) 'Machine Learning in Quantum Systems'",
      "Williams et al. (2022) 'Advanced Quantum Algorithms'"
    ],
    versions: [
      {
        version: "v1.2",
        date: "2024-03-20",
        changes: "Updated results section with new experimental data",
        hash: "0x8f23...4a91"
      },
      {
        version: "v1.1",
        date: "2024-02-15",
        changes: "Fixed mathematical proofs in Section 3",
        hash: "0x7d12...9b45"
      },
      {
        version: "v1.0",
        date: "2024-01-10",
        changes: "Initial publication",
        hash: "0x6e34...2c78"
      }
    ]
  };

  return (
    <div className={styles.container}>
      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.glowOrb}></div>
        <div className={styles.glowOrb2}></div>

        <div className={styles.breadcrumbs}>
          <Link href="/browse">Browse</Link> / Paper Details
        </div>
        
        <article className={styles.paper}>
          <header className={styles.header}>
            <h1 className={styles.title}>{paper.title}</h1>
            
            <div className={styles.metadata}>
              <div className={styles.authors}>
                {paper.authors.map((author, index) => (
                  <span key={index} className={styles.author}>{author}</span>
                ))}
              </div>
              
              <div className={styles.details}>
                <span className={styles.category}>{paper.category}</span>
                <span className={styles.date}>{paper.date}</span>
                <span className={styles.doi}>DOI: {paper.doi}</span>
              </div>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statIcon}>📚</span>
                <span>{paper.citations} Citations</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statIcon}>⬇️</span>
                <span>{paper.downloads} Downloads</span>
              </div>
              <button className={styles.downloadButton}>
                Download PDF
              </button>
            </div>
          </header>

          <section className={styles.content}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Abstract</h2>
              <p className={styles.abstract}>{paper.abstract}</p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Keywords</h2>
              <div className={styles.keywords}>
                {paper.keywords.map((keyword, index) => (
                  <span key={index} className={styles.keyword}>{keyword}</span>
                ))}
              </div>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>References</h2>
              <ul className={styles.references}>
                {paper.references.map((reference, index) => (
                  <li key={index} className={styles.reference}>{reference}</li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Versions</h2>
              <div className={styles.versions}>
                {paper.versions.map((version, index) => (
                  <div key={index} className={styles.versionItem}>
                    <div className={styles.versionHeader}>
                      <div className={styles.versionInfo}>
                        <span className={styles.versionTag}>{version.version}</span>
                        <span className={styles.versionDate}>{version.date}</span>
                      </div>
                      <button className={styles.versionDownload}>
                        Download
                      </button>
                    </div>
                    <p className={styles.versionChanges}>{version.changes}</p>
                    <div className={styles.versionHash}>
                      <span className={styles.hashLabel}>Transaction Hash:</span>
                      <span className={styles.hash}>{version.hash}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.actions}>
            <div className={styles.actionButtons}>
              <button className={styles.actionButton}>
                <span className={styles.actionIcon}>💬</span>
                Discuss
              </button>
              <button className={styles.actionButton}>
                <span className={styles.actionIcon}>📎</span>
                Cite
              </button>
              <button className={styles.actionButton}>
                <span className={styles.actionIcon}>⭐</span>
                Save
              </button>
              <button className={styles.actionButton}>
                <span className={styles.actionIcon}>🔗</span>
                Share
              </button>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
} 