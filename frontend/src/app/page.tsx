import Navbar from '@/components/layout/Navbar';
import LatestPapers from '@/components/home/LatestPapers';
import Stats from '@/components/home/Stats';
import Categories from '@/components/home/Categories';
import QuickLinks from '@/components/home/QuickLinks';
import styles from '@/styles/pages/home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.leftColumn}>
            <LatestPapers />
          </div>
          <div className={styles.rightColumn}>
            <Stats />
            <Categories />
            <QuickLinks />
          </div>
        </div>
      </main>
    </div>
  );
}
