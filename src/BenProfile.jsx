import React from 'react';

const LucaProfile = () => {
  return (
    <div style={styles.container}>
      <img
        src="./ben.png" // Ensure this is in /public or imported correctly
        alt="Ben Davis"
        style={styles.avatar}
      />
      <h1 style={styles.name}>Ben Davis</h1>
      <p style={styles.subtitle}>Business Administration at Cal Haas</p>

      <div style={styles.section}>
        {/* You can add newsletter or other blocks here */}
      </div>

      <div style={styles.section}>
        <h3 style={styles.header}>Find me</h3>
        <p>
          <a href="https://www.linkedin.com/in/benjamindavissd/">LinkedIn</a>{' '}
          <a href="https://x.com/BenDavis858">X</a>
        </p>
        <p>
          Email me: <a href="mailto:ben.davis@berkeley.edu">ben.davis@berkeley.edu</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '100px auto',
    padding: '0 16px',
    fontFamily: '"Inter", sans-serif',
    color: '#111',
    lineHeight: '1.6',
    backgroundColor: '#fff',
  },
  avatar: {
    width: '96px',
    height: '96px',
    borderRadius: '50%',
    marginBottom: '16px',
  },
  name: {
    fontSize: '32px',
    fontWeight: '600',
    margin: '0',
  },
  subtitle: {
    color: '#666',
    fontSize: '16px',
    marginTop: '4px',
  },
  section: {
    marginTop: '32px',
  },
  header: {
    fontWeight: '600',
    fontSize: '18px',
    marginBottom: '8px',
  },
  bulletList: {
    marginTop: '0',
    paddingLeft: '20px',
  },
  link: {
    fontWeight: 'normal',
    fontSize: '16px',
    color: '#666',
  },
};

export default LucaProfile;
