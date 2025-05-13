import React from 'react';

const LucaProfile = () => {
  return (
    <div style={styles.container}>
      <img
        src="./ben.png" // Replace with the actual image URL or local import
        alt="Ben Davis"
        style={styles.avatar}
      />
      <h1 style={styles.name}>Ben Davis</h1>
      <p style={styles.subtitle}>Business Administration at Cal Haas</p>

      <div style={styles.section}>
      </div>

      <div style={styles.section}>
        <h3 style={styles.header}>Find me</h3>
        <p>
          <a href="#">LinkedIn</a> <a href="#">X</a> <a href="#">Newsletter</a>
        </p>
        <p>
          Email me: <a href="mailto:lucacaviness@gmail.com">lucacaviness@gmail.com</a>
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
    fontFamily: 'Georgia, serif',
    color: '#111',
    lineHeight: '1.6',
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
