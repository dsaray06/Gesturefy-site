import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© {new Date().getFullYear()} Gesturefy. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#1a1a1a',
    color: '#ccc',
    padding: '1rem',
    textAlign: 'center',
    marginTop: 'auto',
    borderTop: '1px solid #333'
  },
  text: {
    margin: 0,
    fontSize: '0.9rem'
  }
};
