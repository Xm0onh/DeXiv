import styles from '@/styles/components/stats.module.css';

export default function Stats() {
  const stats = [
    { label: 'Papers Published', value: '2,481' },
    { label: 'Active Researchers', value: '1,394' },
    { label: 'Citations', value: '12,847' },
    { label: 'Institutions', value: '156' },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Platform Statistics</h2>
      <div className={styles.grid}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <div className={styles.value}>{stat.value}</div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 