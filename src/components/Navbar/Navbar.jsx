import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const goToLogin = () => {
    window.location.hash = '#login';
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={styles.navbar}>
      <div onClick={scrollToTop} className={styles.logo} style={{ cursor: 'pointer' }}>
        <div className={styles.logoIcon}>+</div>
        <h2>MediCare Plus</h2>
      </div>
      <div className={styles.links}>
        <a href="#find-doctor">Find a Doctor</a>
        <a href="#services">Services</a>
        <a href="#locations">Locations</a>
        <a href="#patients">Patients</a>
      </div>
      <div className={styles.btn}>
        <button onClick={goToLogin}>Patient Portal →</button>
      </div>
    </nav>
  );
};

export default Navbar;