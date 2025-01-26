import Link from 'next/link';
import styles from '@/styles/components/navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoContainer}>
            <span className={styles.logo}>DexiV</span>
          </div>
          <div className={styles.links}>
            <Link href="/submit" className={styles.link}>Submit</Link>
            <Link href="/browse" className={styles.link}>Browse</Link>
            <Link href="/about" className={styles.link}>About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 