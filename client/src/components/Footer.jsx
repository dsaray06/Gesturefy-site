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
    backgroundColor: '#121212',            // darker background for better depth
    color: '#b3b3b3',                      // soft gray text for readability
    paddingTop: '2rem',
    fontFamily: "'Montserrat', sans-serif",
    userSelect: 'none',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '0 2rem',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  column: {
    flex: '1',
    minWidth: '250px',
    marginBottom: '1.5rem',
    lineHeight: '1.6',
  },
  heading: {
    fontSize: '1.2rem',
    color: '#1DB954',                     // Spotify green accent
    marginBottom: '0.8rem',
    fontWeight: '700',
    letterSpacing: '0.05em',
  },
  text: {
    fontSize: '0.95rem',
    lineHeight: '1.5',
    color: '#ccc',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  link: {
    display: 'block',
    color: '#aaa',
    textDecoration: 'none',
    marginBottom: '0.6rem',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  },
  bottomBar: {
    borderTop: '1px solid #222',
    marginTop: '1.5rem',
    padding: '1rem 2rem',
    textAlign: 'center',
    backgroundColor: '#0f0f0f',
  },
  bottomText: {
    margin: 0,
    fontSize: '0.85rem',
    color: '#666',
    fontWeight: '400',
    letterSpacing: '0.03em',
  },
};
