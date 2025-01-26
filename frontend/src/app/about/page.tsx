import Navbar from '@/components/layout/Navbar';
import styles from '@/styles/pages/about.module.css';

export default function About() {
  const features = [
    {
      icon: "🔗",
      title: "Decentralized Storage",
      description: "All research papers are permanently stored on the blockchain, ensuring they can never be lost or altered."
    },
    {
      icon: "🔒",
      title: "Immutable Records",
      description: "Version history and citations are tracked on-chain, providing transparent and verifiable academic records."
    },
    {
      icon: "💡",
      title: "Open Access",
      description: "Research is freely accessible to everyone, promoting knowledge sharing and collaboration worldwide."
    },
    {
      icon: "🎯",
      title: "Direct Attribution",
      description: "Authors maintain direct control over their work and receive proper attribution through smart contracts."
    }
  ];

  const stats = [
    { number: "10K+", label: "Research Papers" },
    { number: "50K+", label: "Researchers" },
    { number: "100K+", label: "Citations" },
    { number: "1M+", label: "Downloads" }
  ];

  return (
    <div className={styles.container}>
      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.glowOrb}></div>
        <div className={styles.glowOrb2}></div>

        <header className={styles.header}>
          <h1 className={styles.title}>About DeXiv Papers</h1>
          <p className={styles.subtitle}>Revolutionizing Academic Publishing</p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.pixelCorner}></div>
              <div className={styles.pixelCorner}></div>
              <div className={styles.pixelCorner}></div>
              <div className={styles.pixelCorner}></div>
              <h2 className={styles.sectionTitle}>Our Mission</h2>
            </div>
            <p className={styles.text}>
              DeSci Papers is pioneering the future of academic publishing through blockchain technology. 
              We believe in making research accessible, transparent, and truly decentralized.
            </p>
          </section>

          <section className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🔗</div>
              <h3 className={styles.featureTitle}>Decentralized</h3>
              <p className={styles.featureText}>
                Powered by blockchain technology, ensuring permanent and immutable research records
              </p>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>🚀</div>
              <h3 className={styles.featureTitle}>Fast Publishing</h3>
              <p className={styles.featureText}>
                Skip the traditional months-long publishing process
              </p>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>🌐</div>
              <h3 className={styles.featureTitle}>Open Access</h3>
              <p className={styles.featureText}>
                Research should be accessible to everyone, everywhere
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.pixelCorner}></div>
              <div className={styles.pixelCorner}></div>
              <div className={styles.pixelCorner}></div>
              <div className={styles.pixelCorner}></div>
              <h2 className={styles.sectionTitle}>How It Works</h2>
            </div>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>01</div>
                <h3 className={styles.stepTitle}>Submit Research</h3>
                <p className={styles.stepText}>
                  Upload your paper and metadata to our platform
                </p>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>02</div>
                <h3 className={styles.stepTitle}>Verification</h3>
                <p className={styles.stepText}>
                  Community review and automated checks
                </p>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>03</div>
                <h3 className={styles.stepTitle}>Publication</h3>
                <p className={styles.stepText}>
                  Paper is permanently stored on the blockchain
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.pixelCorner}></div>
              <div className={styles.pixelCorner}></div>
              <div className={styles.pixelCorner}></div>
              <div className={styles.pixelCorner}></div>
              <h2 className={styles.sectionTitle}>Join The Revolution</h2>
            </div>
            <div className={styles.cta}>
              <p className={styles.ctaText}>
                Ready to be part of the future of academic publishing?
              </p>
              <button className={styles.ctaButton}>
                START PUBLISHING
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 