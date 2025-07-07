"use client";
import React, { useState } from 'react';
import styles from './TestimonialsCarousel.module.css';

const testimonials = [
  {
    name: 'Rahul kumar',
    company: 'AI Labs',
    text: 'Dusker transformed our data pipeline and accelerated our AI deployment by months. Their platform is intuitive and the support is world-class.',
    avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&q=80',
  },
  {
    name: 'Priya Singh',
    company: 'GenAI Solutions',
    text: 'The quality and scale of Dusker’s annotation and evaluation tools are unmatched. Our generative models improved drastically.',
    avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&q=80',
  },
  {
    name: 'Mukul',
    company: 'MobilityX',
    text: 'Dusker’s automotive data suite made our perception stack robust. The animated dashboard is a joy to use!',
    avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&q=80',
  },
  {
    name: 'sahil',
    company: 'GovAI',
    text: 'Security, compliance, and performance—all in one platform. Dusker is our trusted partner for public sector AI.',
    avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&q=80',
  },
];

export default function TestimonialsCarousel() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((idx + 1) % testimonials.length);
  const prev = () => setIdx((idx - 1 + testimonials.length) % testimonials.length);

  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
      <div className={styles.carouselWrap}>
        <button className={styles.arrowBtn} onClick={prev} aria-label="Previous testimonial">&#8592;</button>
        <div className={styles.testimonialCard}>
          <img src={testimonials[idx].avatar} alt={testimonials[idx].name} className={styles.avatar} />
          <div className={styles.testimonialText}>
            <p className={styles.quote}>&ldquo;{testimonials[idx].text}&rdquo;</p>
            <div className={styles.clientInfo}>
              <span className={styles.clientName}>{testimonials[idx].name}</span>
              <span className={styles.clientCompany}>{testimonials[idx].company}</span>
            </div>
          </div>
        </div>
        <button className={styles.arrowBtn} onClick={next} aria-label="Next testimonial">&#8594;</button>
      </div>
      <div className={styles.dots}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={i === idx ? styles.activeDot : styles.dot}
            onClick={() => setIdx(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}
