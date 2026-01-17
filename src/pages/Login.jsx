import React, { useState } from 'react';
import styles from './Login.module.css';

const Login = () => {
  const [role, setRole] = useState('patient');

  const isPatient = role === 'patient';

  return (
    <div className={`${styles.loginPage} ${isPatient ? styles.patientBg : styles.doctorBg}`}>
      <div className={styles.topBar}>
        <span className={styles.topBarText}>Already have an account?</span>
        <a href="#signin" className={styles.signInLink}>
          Sign In
        </a>
      </div>

      <div className={styles.content}>
        <div className={styles.leftPanel}>
          <button className={styles.chip}>JOIN THE FUTURE OF HEALTH</button>
          <h1 className={styles.heading}>
            Start Your <span className={styles.highlight}>Wellness</span>
            <br />
            Journey Today.
          </h1>
          <p className={styles.subheading}>
            Connect with world-class specialists, manage your health records, and experience
            personalized care through our secure glass-interface platform.
          </p>

          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <div className={styles.featureIconShield}>🛡️</div>
              <div>
                <div className={styles.featureTitle}>End-to-End Encryption</div>
                <div className={styles.featureDescription}>
                  Your health data is safe and private.
                </div>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIconBolt}>⚡</div>
              <div>
                <div className={styles.featureTitle}>Instant Appointments</div>
                <div className={styles.featureDescription}>
                  Skip the waiting room with telehealth.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightPanel}>
          <div className={styles.formCard}>
            <div className={styles.cardTopAccent} />
            <div className={styles.cardHeader}>
              <span className={styles.cardSubtitle}>I AM A...</span>
              <div className={styles.toggleGroup}>
                <button
                  type="button"
                  className={`${styles.toggleButton} ${isPatient ? styles.activeToggle : ''}`}
                  onClick={() => setRole('patient')}
                >
                  Patient
                </button>
                <button
                  type="button"
                  className={`${styles.toggleButton} ${!isPatient ? styles.activeToggle : ''}`}
                  onClick={() => setRole('doctor')}
                >
                  Doctor
                </button>
              </div>
            </div>

            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formVariant} key={role}>
              {isPatient ? (
                <>
                  <div className={styles.row}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>FIRST NAME</label>
                      <input className={styles.input} placeholder="John" />
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>LAST NAME</label>
                      <input className={styles.input} placeholder="Doe" />
                    </div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>EMAIL ADDRESS</label>
                    <input className={styles.input} placeholder="john@example.com" />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>CREATE PASSWORD</label>
                    <input
                      className={styles.input}
                      type="password"
                      placeholder="••••••••••"
                    />
                  </div>

                  <button className={styles.primaryButton} type="submit">
                    Create Account →
                  </button>
                </>
              ) : (
                <>
                  <div className={styles.row}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>FULL NAME</label>
                      <input className={styles.input} placeholder="Dr. Jane Smith" />
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>SPECIALTY</label>
                      <input className={styles.input} placeholder="Cardiologist" />
                    </div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>WORK EMAIL</label>
                    <input className={styles.input} placeholder="dr.smith@hospital.com" />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>LICENSE / REGISTRATION ID</label>
                    <input className={styles.input} placeholder="e.g. MED-123456" />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>CREATE PASSWORD</label>
                    <input
                      className={styles.input}
                      type="password"
                      placeholder="••••••••••"
                    />
                  </div>

                  <button className={styles.primaryButton} type="submit">
                    Continue as Doctor →
                  </button>
                </>
              )}
              </div>

              <div className={styles.divider}>
                <span className={styles.dividerLine} />
                <span className={styles.dividerText}>OR CONTINUE WITH</span>
                <span className={styles.dividerLine} />
              </div>

              <div className={styles.socialRow}>
                <button className={styles.socialButton}>Google</button>
                <button className={styles.socialButton}>Facebook</button>
              </div>

              <p className={styles.termsText}>
                By creating an account, you agree to our{' '}
                <a href="#terms">Terms of Service</a> and{' '}
                <a href="#privacy">Privacy Policy</a>, including Cookie Use.
              </p>
              <button
                type="button"
                className={styles.backHomeLink}
                onClick={() => {
                  window.location.hash = '';
                }}
              >
                ← Back to Home
              </button>
            </form>
          </div>
        </div>
      </div>

      <p className={styles.footerNote}>
        © 2024 MediCare Plus. All health data is securely encrypted with AES-256.
      </p>
    </div>
  );
};

export default Login;

