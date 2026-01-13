import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.leftContent}>
          <div className={styles.featureTag}>NEW TELEHEALTH FEATURES</div>
          <h1 className={styles.title}>
            Modern Healthcare,<br />
            <span className={styles.titleAccent}>Reimagined for You</span>
          </h1>
          <p className={styles.description}>
            Experience the future of medicine with our patient-first approach. From AI-driven diagnostics to seamless virtual consultations, your health is our innovation.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>Schedule a Visit</button>
            <button className={styles.secondaryButton}>Learn More</button>
          </div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.imageContainer}>
            <div className={styles.imagePlaceholder}>
              <div className={styles.overlayCard}>
                <div className={styles.videoIcon}>📹</div>
                <div className={styles.cardContent}>
                  <div className={styles.doctorName}>Dr. Sarah Johnson</div>
                  <div className={styles.availability}>Available for Telehealth now</div>
                </div>
                <div className={styles.statusDot}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
