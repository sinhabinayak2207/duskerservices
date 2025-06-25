"use client";

import React from 'react';
import styles from './AnimatedProductCards.module.css';
import Image from 'next/image';
import { motion } from './motion';

const products = [
  {
    title: 'Scale Data Engine',
    description: 'The backbone of next-gen AI. Collect, label, and manage data at scale with automated pipelines, quality controls, and seamless integration for any use case.',
    icon: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop',
    link: '/products/scale-data-engine',
    color: '#4f46e5',
    badge: 'Popular',
  },
  {
    title: 'Generative AI',
    description: 'Empower your models with the most diverse, high-quality generative datasets. Unlock creative applications and push the boundaries of AI.',
    icon: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2965&auto=format&fit=crop',
    link: '/products/for-generative-ai',
    color: '#7c3aed',
    badge: 'New',
  },
  {
    title: 'Government',
    description: 'Secure, compliant, and powerful AI solutions for the public sector. Enable smarter cities, defense, and public services with trusted data.',
    icon: 'https://images.unsplash.com/photo-1569396116180-210c182bedb8?q=80&w=1969&auto=format&fit=crop',
    link: '/products/for-government',
    color: '#0891b2',
  },
  {
    title: 'Automotive',
    description: 'Accelerate autonomy with precision-labeled data for perception, simulation, and safety. Drive the future of mobility with Dusker.',
    icon: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop',
    link: '/products/for-automotive',
    color: '#0d9488',
  },
  {
    title: 'Scale Donovan',
    description: "Orchestrate and automate your AI workflows with Donovan, Dusker's smart assistant for data and model operations.",
    icon: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2965&auto=format&fit=crop',
    link: '/products/scale-donovan',
    color: '#8b5cf6',
  },
  {
    title: 'GenAI Platform',
    description: 'A unified platform for training, evaluating, and deploying generative models. Accelerate innovation with robust tools and analytics.',
    icon: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop',
    link: '/products/scale-genai-platform',
    color: '#6366f1',
  },
  {
    title: 'Scale Evaluation',
    description: 'Comprehensive evaluation framework for AI models. Measure performance, identify weaknesses, and ensure your models meet quality standards.',
    icon: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    link: '/products/scale-evaluation',
    color: '#ec4899',
  },
  {
    title: 'For Model Developers',
    description: 'Specialized tools and frameworks designed for AI researchers and model developers. Accelerate your development cycle and improve outcomes.',
    icon: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
    link: '/products/for-model-developers',
    color: '#3b82f6',
  },
];

export default function AnimatedProductCards() {
  return (
    <section className={styles.cardsSection}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.sectionTitle}>Our Products</h2>
        <p className={styles.sectionSubtitle}>Comprehensive AI training and evaluation solutions for every industry</p>
      </motion.div>
      
      <div className={styles.cardsGrid}>
        {products.map((p, idx) => (
          <motion.a
            key={p.title}
            href={p.link}
            className={styles.card}
            style={{ '--card-color': p.color } as React.CSSProperties}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -10, scale: 1.03 }}
          >
            {p.badge && <span className={styles.cardBadge}>{p.badge}</span>}
            <div className={styles.iconWrap}>
              <Image 
                src={p.icon} 
                alt={p.title} 
                width={500} 
                height={300}
                className={styles.cardIcon}
                unoptimized
              />
            </div>
            <h3 className={styles.cardTitle}>{p.title}</h3>
            <p className={styles.cardDesc}>{p.description}</p>
            <div className={styles.cardFooter}>
              <span className={styles.learnMore}>Learn more</span>
              <span className={styles.cardArrow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
