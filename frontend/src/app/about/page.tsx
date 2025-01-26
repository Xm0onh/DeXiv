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

        <section className={styles.hero}>
          <h1 className={styles.title}>
            Revolutionizing Academic Publishing
          </h1>
          <p className={styles.subtitle}>
            DexiV Research is building the future of academic publishing through blockchain technology,
            making research more accessible, transparent, and verifiable than ever before.
          </p>
        </section>

        <section className={styles.stats}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </section>

        <section className={styles.features}>
          <h2 className={styles.sectionTitle}>Why Choose DexiV Research?</h2>
          <div className={styles.featureGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <span className={styles.featureIcon}>{feature.icon}</span>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.mission}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <div className={styles.missionContent}>
            <p>
              We believe that academic research should be freely accessible to everyone. 
              Our platform leverages blockchain technology to create a transparent, 
              decentralized ecosystem for academic publishing.
            </p>
            <p>
              By removing traditional barriers and intermediaries, we empower researchers 
              to share their work directly with the global academic community while 
              maintaining verifiable records of authorship and citations.
            </p>
          </div>
        </section>

        <section className={styles.team}>
          <h2 className={styles.sectionTitle}>Built by Researchers, for Researchers</h2>
          <p className={styles.teamDescription}>
            Our team consists of academics, developers, and blockchain experts who understand 
            the challenges of traditional academic publishing. We're committed to creating 
            a better system that serves the global research community.
          </p>
        </section>

        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>Join the Future of Academic Publishing</h2>
          <p className={styles.ctaDescription}>
            Start publishing your research on the blockchain today and become part of 
            the decentralized academic community.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>Submit Paper</button>
            <button className={styles.secondaryButton}>Learn More</button>
          </div>
        </section>
      </main>
    </div>
  );
} 