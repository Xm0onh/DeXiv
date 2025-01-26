import Link from 'next/link';
import styles from '@/styles/components/quicklinks.module.css';

export default function QuickLinks() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Quick Links</h2>
      <div className={styles.links}>
        <Link href="/submit" className={styles.link}>
          → Submit New Paper
        </Link>
        <Link href="/browse" className={styles.link}>
          → Browse All Papers
        </Link>
        <Link href="/help" className={styles.link}>
          → Submission Guidelines
        </Link>
        <Link href="/rss" className={styles.link}>
          → RSS Feeds
        </Link>
      </div>
    </div>
  );
} 