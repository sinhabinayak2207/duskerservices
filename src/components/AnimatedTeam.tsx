"use client";
import React from 'react';
import styles from './AnimatedTeam.module.css';

const team = [
  {
    name: 'Ashish Kar',
    role: 'CEO & Founder',
    img: '/images/ashish_kar.jpg',
    bio: 'Visionary AI entrepreneur with expertise in machine learning systems and business strategy.'
  },
  {
    name: 'Raj Shrivastava',
    role: 'Business Development Executive',
    img: '/images/raj_shrivastava.jpg',
    bio: 'Strategic business development professional with a talent for building partnerships and expanding market reach.'
  },
  {
    name: 'Tejaswi Sinha',
    role: 'Business Development Executive',
    img: '/images/tejaswi_sinha.jpg',
    bio: 'Client-focused business developer with expertise in AI solution consulting and relationship management.'
  },
];

export default function AnimatedTeam() {
  return (
    <section className={styles.teamSection}>
      <h2 className={styles.sectionTitle}>Meet the Dusker Team</h2>
      <div className={styles.teamGrid}>
        {team.map((member, idx) => (
          <div className={styles.teamCard} key={member.name}>
            <img src={member.img} alt={member.name} className={styles.avatar} />
            <div className={styles.teamInfo}>
              <div className={styles.teamName}>{member.name}</div>
              <div className={styles.teamRole}>{member.role}</div>
              <div className={styles.teamBio}>{member.bio}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
