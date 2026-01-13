import React from 'react';
import styles from './ComprehensiveCare.module.css';

const ComprehensiveCare = () => {
  const services = [
    {
      icon: '🩺',
      iconColor: '#2B6CB0',
      title: 'Primary Care',
      description: 'Routine check-ups, preventive care, and comprehensive health management for the whole family.'
    },
    {
      icon: '❤️',
      iconColor: '#E53E3E',
      title: 'Cardiology',
      description: 'Expert heart health specialists using advanced diagnostics to keep your heart healthy.'
    },
    {
      icon: '📹',
      iconColor: '#805AD5',
      title: 'Telehealth',
      description: 'Virtual consultations from the comfort of your home with our board-certified physicians.'
    },
    {
      icon: '🧪',
      iconColor: '#48BB78',
      title: 'Lab Services',
      description: 'Fast and accurate diagnostic results to help guide your treatment and recovery.'
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h2 className={styles.title}>Comprehensive Care Designed Around You</h2>
          <p className={styles.description}>
            We combine compassionate care with the latest technology to ensure you get the best treatment possible.
          </p>
        </div>
        <a href="#services" className={styles.viewAllLink}>
          View all services →
        </a>
      </div>
      <div className={styles.cardsGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.iconContainer} style={{ backgroundColor: `${service.iconColor}20` }}>
              <span className={styles.icon} style={{ color: service.iconColor }}>{service.icon}</span>
            </div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComprehensiveCare;
