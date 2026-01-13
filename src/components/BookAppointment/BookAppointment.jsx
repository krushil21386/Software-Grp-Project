import React from 'react';
import styles from './BookAppointment.module.css';

const BookAppointment = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ready to prioritize your health?</h2>
        <p className={styles.description}>
          Book an appointment online easily. Choose your specialist, select a time, and get confirmation instantly.
        </p>
        <button className={styles.bookButton}>
          <span className={styles.calendarIcon}>📅</span>
          Book Appointment
        </button>
      </div>
    </section>
  );
};

export default BookAppointment;
