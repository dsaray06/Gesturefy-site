import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h4 style={styles.heading}>Gesturefy</h4>
          <p style={styles.text}>
            Control Spotify with your hand. Intuitive, responsive, and futuristic — Gesturefy is redefining music interaction.
          </p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.list}>
            <li><a href="/" style={styles.link}>Home</a></li>
            <li><a href="/contact" style={styles.link}>Contact</a></li>
            <li><a href="#features" style={styles.link}>Features</a></li>
            <li><a href="#download" style={styles.link}>Download</a></li>
          </ul>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>Contact</h4>
          <p style={styles.text}>Email: support@gesturefy.com, or use contact form</p>
          <p style={styles.text}>Location: Dallas, TX</p>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <p style={styles.bottomText}>© {new Date().getFullYear()} Gesturefy. All rights reserved.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#1a1a1a',
    color: '#ccc',
    paddingTop: '2rem',
    borderTop: '1px solid #333',
    fontFamily: 'sans-serif'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '0 2rem'
  },
  column: {
    flex: '1',
    minWidth: '250px',
    marginBottom: '1.5rem'
  },
  heading: {
    fontSize: '1.1rem',
    color: '#1DB954',
    marginBottom: '0.8rem'
  },
  text: {
    fontSize: '0.9rem',
    lineHeight: '1.5'
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0
  },
  link: {
    display: 'block',
    color: '#ccc',
    textDecoration: 'none',
    marginBottom: '0.5rem'
  },
  socials: {
    marginTop: '0.5rem',
    fontSize: '1.2rem'
  },
  socialIcon: {
    marginRight: '0.5rem',
    cursor: 'pointer'
  },
  bottomBar: {
    borderTop: '1px solid #333',
    marginTop: '1rem',
    padding: '1rem 2rem',
    textAlign: 'center'
  },
  bottomText: {
    margin: 0,
    fontSize: '0.85rem',
    color: '#777'
  }
};
