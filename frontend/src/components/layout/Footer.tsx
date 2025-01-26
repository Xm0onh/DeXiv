import Link from 'next/link';
import styles from '@/styles/components/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>DeXiv Research</h3>
            <p className={styles.description}>
              Revolutionizing academic publishing through blockchain technology.
              Making research more accessible, transparent, and verifiable.
            </p>
            <div className={styles.social}>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>𝕏</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Discord</a>
            </div>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <nav className={styles.links}>
              <Link href="/browse">Browse Papers</Link>
              <Link href="/submit">Submit Research</Link>
              <Link href="/about">About Us</Link>
              <Link href="/faq">FAQ</Link>
            </nav>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Resources</h4>
            <nav className={styles.links}>
              <Link href="/docs">Documentation</Link>
              <Link href="/guides">User Guides</Link>
              <Link href="/api">API</Link>
              <Link href="/stats">Statistics</Link>
            </nav>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Legal</h4>
            <nav className={styles.links}>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/licenses">Licenses</Link>
              <Link href="/contact">Contact Us</Link>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} DeXiv Research. All rights reserved.
          </div>
          <div className={styles.poweredBy}>
            Powered by <span className={styles.highlight}>Blockchain Technology</span>
          </div>
        </div>
      </div>
    </footer>
  );
} 