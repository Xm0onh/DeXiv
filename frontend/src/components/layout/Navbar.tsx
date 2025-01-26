import Link from 'next/link';
import styles from '@/styles/components/navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoContainer}>
          <span className={styles.logo}>DeXiv</span>
          <span className={styles.logoAccent}>Research</span>
        </Link>
        
        <div className={styles.links}>
          <Link href="/browse" className={styles.link}>Browse</Link>
          <Link href="/submit" className={styles.link}>Submit Paper</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/connect" className={styles.connectButton}>
            Connect Wallet
          </Link>
        </div>
      </div>
    </nav>
  );
} 