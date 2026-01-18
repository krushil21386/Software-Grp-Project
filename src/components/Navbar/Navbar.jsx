import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const goToLogin = () => {
    window.location.hash = '#login';
    setIsSidebarOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsSidebarOpen(false);
  };

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div onClick={scrollToTop} className={styles.logo} style={{ cursor: 'pointer' }}>
          <div className={styles.logoIcon}>+</div>
          <h2>MediCare Plus</h2>
        </div>
        
        <div className={styles.navActions}>
          <div className={styles.btn}>
            <button onClick={goToLogin}>Patient Portal →</button>
          </div>
          
          <button 
            className={styles.menuButton}
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburger}>
              <span className={`${styles.line} ${isSidebarOpen ? styles.line1Open : ''}`}></span>
              <span className={`${styles.line} ${isSidebarOpen ? styles.line2Open : ''}`}></span>
              <span className={`${styles.line} ${isSidebarOpen ? styles.line3Open : ''}`}></span>
            </span>
          </button>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div 
        className={`${styles.overlay} ${isSidebarOpen ? styles.overlayOpen : ''}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <h3>Navigation</h3>
          <button 
            className={styles.closeButton}
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        
        <div className={styles.sidebarLinks}>
          <a href="#find-doctor" onClick={handleLinkClick}>Find a Doctor</a>
          <a href="#services" onClick={handleLinkClick}>Services</a>
          <a href="#locations" onClick={handleLinkClick}>Locations</a>
          <a href="#patients" onClick={handleLinkClick}>Patients</a>
        </div>
        
        <div className={styles.sidebarFooter}>
          <button className={styles.sidebarLoginButton} onClick={goToLogin}>
            Patient Portal →
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;