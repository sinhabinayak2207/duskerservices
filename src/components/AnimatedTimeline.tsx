import React from 'react';
import styles from './AnimatedTimeline.module.css';

const timeline = [
  {
    year: '2018',
    title: 'Dusker Founded',
    desc: 'Dusker launches with a mission to make AI training accessible and scalable for all industries.'
  },
  {
    year: '2019',
    title: 'First 100M Annotations',
    desc: 'Achieved a major milestone with 100 million high-quality data annotations for global clients.'
  },
  {
    year: '2021',
    title: 'GenAI Platform Released',
    desc: 'Launched the Dusker GenAI Platform, enabling seamless generative model training and evaluation.'
  },
  {
    year: '2023',
    title: 'Government & Automotive Expansion',
    desc: 'Secured partnerships in public sector and automotive, powering smart cities and next-gen vehicles.'
  },
  {
    year: '2025',
    title: 'AI for Everyone',
    desc: 'Dusker now supports AI development for enterprises, startups, and public organizations worldwide.'
  }
];

export default function AnimatedTimeline() {
  return (
    <section className={styles.timelineSection}>
      <h2 className={styles.sectionTitle}>Our Journey</h2>
      <div className={styles.timelineWrap}>
        {timeline.map((item, idx) => (
          <div key={item.year} className={styles.timelineItem}>
            <div className={styles.timelineYear}>{item.year}</div>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineCard}>
              <div className={styles.timelineTitle}>{item.title}</div>
              <div className={styles.timelineDesc}>{item.desc}</div>
            </div>
          </div>
        ))}
        <div className={styles.timelineLine}></div>
      </div>
    </section>
  );
}
