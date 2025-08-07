import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('Message sent!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Something went wrong.');
      }
    } catch {
      setStatus('Failed to send message.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={{ 
          fontSize: '2rem', 
          marginBottom: '30px', 
          position: 'relative', 
          display: 'inline-block',
          color: 'white',
        }}>
          Contact Us
          <span style={{
            position: 'absolute',
            left: 0,
            bottom: -6,
            height: '2px',            // slimmer height
            width: '100%',
            borderRadius: '2px',
            background: 'linear-gradient(90deg, #0a2a07, #14833b, #0a2a07)',  // darker green gradient
            boxShadow: '0 0 6px 2px rgba(20, 131, 59, 0.4)',                // softer, darker glow
            filter: 'brightness(0.85)', // slightly dimmer
          }} />
        </h1>
        <p style={styles.subtitle}>
          Have questions about Gesturefy? We'd love to hear from you!
        </p>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.row}>
          <div style={styles.column}>
            <label style={styles.label}>Name *</label>
            <input
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
        </div>

        <div style={styles.row}>
          <div style={styles.column}>
            <label style={styles.label}>Email *</label>
            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
        </div>

        <div>
          <label style={styles.label}>Subject *</label>
          <input
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleChange}
            style={styles.inputsubject}
          />
        </div>

        <div>
          <label style={styles.label}>Message *</label>
          <textarea
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us how we can help you..."
            style={styles.textarea}
          />
        </div>

        <button
          type="submit"
          style={styles.button}
          onMouseEnter={e => {
            e.currentTarget.style.boxShadow = '0 0 15px #1db954';
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.transition = 'all 0.3s ease';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.transition = 'all 0.3s ease';
          }}
        >
          Send Message
        </button>

        {status && <p style={styles.status}>{status}</p>}
      </form>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Montserrat',
    color: '#ffffff',
    //background: 'linear-gradient(135deg, #1a1a1a 0%, #1f5032 100%)'

  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2.2rem',
    marginBottom: '0.5rem',
    color: 'white',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#888',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  row: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  column: {
    flex: '1',
    minWidth: '250px',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '500',
  },
  input: {
    width: '95%',
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#0c0c0c',
    color: '#fff',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '6px',
    outline: 'none',
    transition: 'border 0.3s, box-shadow 0.3s',
  },
  inputsubject: {
    width: '95%',
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#0c0c0c',
    color: '#fff',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '6px',
    outline: 'none',
    transition: 'border 0.3s, box-shadow 0.3s',
  },
  textarea: {
    width: '95%',
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#0c0c0c',
    color: '#fff',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '6px',
    resize: 'vertical',
    outline: 'none',
    transition: 'border 0.3s, box-shadow 0.3s',
  },
  button: {
    padding: '0.75rem',
    fontSize: '1rem',
    background: 'linear-gradient(145deg, #000000, #0a0a0a, #121212)',
    color: '#fff',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  status: {
    marginTop: '1rem',
    fontWeight: 'bold',
    color: '#1db954',
  },
};



export default ContactForm;
