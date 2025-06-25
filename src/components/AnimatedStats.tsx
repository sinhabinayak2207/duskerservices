"use client";
import React, { useEffect, useRef } from 'react';
import styles from './AnimatedStats.module.css';

const stats = [
  {
    label: 'Data Points Processed',
    value: 1200000000,
    suffix: '+',
  },
  {
    label: 'AI Models Trained',
    value: 7500,
    suffix: '+',
  },
  {
    label: 'Enterprise Clients',
    value: 320,
    suffix: '+',
  },
  {
    label: 'Countries Served',
    value: 42,
    suffix: '',
  },
];

function useCountUp(target: number, duration: number) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    let current = 0;
    const interval = setInterval(() => {
      current += step;
      if (current > target) current = target;
      if (ref.current) ref.current.textContent = current.toLocaleString();
      if (current === target) clearInterval(interval);
    }, 16);
    return () => clearInterval(interval);
  }, [target, duration]);
  return ref;
}

export default function AnimatedStats() {
  return (
    <section className={styles.statsSection}>
      <h2 className={styles.sectionTitle}>Dusker in Numbers</h2>
      <div className={styles.statsGrid}>
        {stats.map((stat, idx) => {
          const ref = useCountUp(stat.value, 1800 + idx * 400);
          return (
            <div key={stat.label} className={styles.statCard}>
              <span className={styles.statValue} ref={ref}></span>
              <span className={styles.statSuffix}>{stat.suffix}</span>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
