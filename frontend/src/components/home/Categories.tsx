import Link from 'next/link';
import styles from '@/styles/components/categories.module.css';

export default function Categories() {
  const categories = [
    { id: 'cs.AI', name: 'Artificial Intelligence', papers: 142 },
    { id: 'cs.CR', name: 'Cryptography', papers: 98 },
    { id: 'cs.DC', name: 'Distributed Computing', papers: 76 },
    { id: 'cs.LG', name: 'Machine Learning', papers: 203 },
    { id: 'cs.DB', name: 'Databases', papers: 54 },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Popular Categories</h2>
      <div className={styles.list}>
        {categories.map((category) => (
          <div key={category.id} className={styles.category}>
            <Link href={`/category/${category.id}`} className={styles.link}>
              {category.name}
            </Link>
            <span className={styles.count}>{category.papers}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 