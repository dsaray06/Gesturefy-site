import { Link } from 'react-router-dom';
import logo from '/logo.png'; 

export default function Navbar() {
  return (
    <nav style={navStyle}>
      <div style={leftStyle}>
        <Link to="/" style={logoLinkStyle}>
          <img src={logo} alt="Gesturefy Logo" style={logoStyle} />
          <span style={titleStyle}>Gesturefy</span>
        </Link>
      </div>

      <div style={rightStyle}>
        <Link
          to="/"
          style={linkStyle}
          onMouseEnter={e => (e.currentTarget.style.color = '#14833b')}
          onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
        >
          Home
        </Link>
        <Link
          to="/contact"
          style={linkStyle}
          onMouseEnter={e => (e.currentTarget.style.color = '#14833b')}
          onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  background: 'linear-gradient(135deg, #0a0a0a, #1f1f1f)',
  boxShadow: '0 2px 8px rgba(29, 185, 84, 0.4)', // subtle green shadow
  position: 'sticky',
  top: 0,
  zIndex: 1000,
};

const leftStyle = {
  display: 'flex',
  alignItems: 'center',
};

const logoLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'white',
};

const logoStyle = {
  width: '32px',
  height: '32px',
  marginRight: '0.5rem',
};

const titleStyle = {
  fontSize: '1.25rem',
  fontWeight: 'bold',
};

const rightStyle = {
  display: 'flex',
  gap: '2rem',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '1rem',
  padding: '0.25rem 0.5rem',
  borderRadius: '4px',
  transition: 'color 0.3s ease',
  cursor: 'pointer',
};
