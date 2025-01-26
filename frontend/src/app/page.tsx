import Navbar from '@/components/layout/Navbar';
import SearchBar from '@/components/SearchBar';
import styles from '@/styles/pages/home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.glowOrb}></div>
          <div className={styles.glowOrb2}></div>
          <h1 className={styles.title}>
            The Future of <span className={styles.highlight}>Academic Publishing</span>
          </h1>
          <p className={styles.subtitle}>
            Publish your research on the blockchain. Immutable. Decentralized. Forever.
          </p>
          <SearchBar />
          
          <div className={styles.heroActions}>
            <Link href="/submit" className={styles.primaryButton}>
              Submit Paper
            </Link>
            <Link href="/browse" className={styles.secondaryButton}>
              Browse Research
            </Link>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>1,234</span>
              <span className={styles.statLabel}>Papers Published</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>892</span>
              <span className={styles.statLabel}>Researchers</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>56</span>
              <span className={styles.statLabel}>Institutions</span>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🔗</div>
            <h3>Decentralized Storage</h3>
            <p>Your research is stored on the blockchain, making it immutable and always accessible</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🌐</div>
            <h3>Global Access</h3>
            <p>No paywalls. No gatekeepers. Research available to everyone, everywhere</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>⚡</div>
            <h3>Instant Publishing</h3>
            <p>Skip the lengthy traditional publishing process. Publish in minutes</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>📊</div>
            <h3>Impact Metrics</h3>
            <p>Real-time analytics and citation tracking on the blockchain</p>
          </div>
        </section>

        {/* Latest Papers Section */}
        <section className={styles.latestPapers}>
          <h2>Latest Research</h2>
          <div className={styles.paperGrid}>
            {/* Your PaperList component here */}
          </div>
        </section>
      </main>
    </div>
  );
}
