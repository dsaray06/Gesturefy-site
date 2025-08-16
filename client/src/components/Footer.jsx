import { Link } from 'react-router-dom';
import { useState } from 'react';

function HoverLink({ to, children }) {
  const [hover, setHover] = useState(false);

  const baseStyle = {
    display: 'inline',
    color: '#ccc',
    textDecoration: 'none',
    marginBottom: '0.6rem',
    fontFamily: 'Montserrat',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  };

  const hoverStyle = {
    color: '#aaaa',
  };

  return (
    <Link
      to={to}
      style={hover ? { ...baseStyle, ...hoverStyle } : baseStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h4 style={styles.heading}>Gesturefy</h4>
          <p style={styles.text}>
            Technology should adapt to you, effortlessly and intuitively. 
            Our innovative app lets you control Spotify with simple hand gestures, making music control more 
            natural and convenient. Whether you’re working, cooking, or just relaxing, Gesturefy lets you skip, 
            play, or pause songs with just a wave of your hand, no need to touch your device. 
            Join us in transforming how you interact with your music, one gesture at a time!
          </p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.list}>
            <li><HoverLink to="/">Home</HoverLink></li>
            <li><HoverLink to="/#download">Download</HoverLink></li>
            <li><HoverLink to="/#features">Features</HoverLink></li>
            <li><HoverLink to="/faq">FAQ</HoverLink></li>
            <li><HoverLink to="/contact">Contact</HoverLink></li>
          </ul>
        </div>


        <div style={styles.column}>
            <h4 style={styles.heading}>About Us</h4>
            <p style={styles.text}>
                We’re college students who love music and tech, and we created Gesturefy to improve our music experience. 
                Frustrated with having to interupt our workflow every time we wanted to skip a song, we decided to build an app that uses simple hand gestures to control playback 
                seamlessly, allowing us to still be able to control Spotify without breaking our concentration. Gesturefy is our way of combining passion and creativity to bring a smarter, 
                more natural way to enjoy your music — no more interruptions, just good vibes.
            </p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>Contact</h4>
          <p style={styles.text}>
            Any questions? Email us at{" "}
            <a 
              href="mailto:gesturefy.questions@gmail.com" 
              style={{ color: '#1DB954', textDecoration: 'none' }}
            >
             gesturefy.questions@gmail.com 
            </a>
            , or use the contact form!
          </p>
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
    backgroundColor: '#000000',
    color: '#b3b3b3',
    fontFamily: "Montserrat",
    userSelect: 'none',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '0rem',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  column: {
    flex: '1',
    minWidth: '250px',
    margin: '0.5rem',
    lineHeight: '1.6',
  },
  heading: {
    fontSize: '1.2rem',
    color: '#1DB954',
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
  bottomBar: {
    borderTop: '1px solid #222',
    marginTop: '1.5rem',
    padding: '1rem 2rem',
    textAlign: 'center',
    backgroundColor: '#000000',
  },
  bottomText: {
    margin: 0,
    fontSize: '0.85rem',
    color: '#666',
    fontWeight: '400',
    letterSpacing: '0.03em',
  },
};
