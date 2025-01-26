import Link from 'next/link';
import styles from '@/styles/components/papers.module.css';

export default function LatestPapers() {
  const papers = [
    {
      id: 1,
      title: 'Decentralized Verification of Academic Credentials Using Blockchain Technology',
      authors: ['John Smith', 'Maria Garcia', 'Robert Chen'],
      abstract: 'We propose a novel approach to academic credential verification using distributed ledger technology...',
      category: 'cs.CR',
      date: '20 Mar 2024',
      citations: 12
    },
    // Add more papers...
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Latest Papers</h1>
      <div className={styles.papersList}>
        {papers.map((paper) => (
          <article key={paper.id} className={styles.paper}>
            <h2 className={styles.paperTitle}>
              <Link href={`/paper/${paper.id}`}>{paper.title}</Link>
            </h2>
            <div className={styles.authors}>{paper.authors.join(', ')}</div>
            <p className={styles.abstract}>{paper.abstract}</p>
            <div className={styles.metadata}>
              <span className={styles.category}>{paper.category}</span>
              <span>{paper.date}</span>
              <span>{paper.citations} citations</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 