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
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
}

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  backgroundColor: '#3a3a3a',
};

const leftStyle = {
  display: 'flex',
  alignItems: 'center',
};

const logoLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'white'
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
  color: '#ffffff',
  fontWeight: 'bold',
  fontSize: '1rem',
  padding: '0.25rem 0.5rem',
  borderRadius: '4px',
  transition: 'background 0.2s ease',
  cursor: 'pointer'
};
