import React from 'react';
import ContactForm from '../ContactForm';

function Contact() {
  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '60px 20px',
        background: 'linear-gradient(135deg, #121212 0%, #1db954 100%)',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '600px',
          background:
            'linear-gradient(145deg, #2f2f2f, #222222)',
          borderRadius: '16px',
          padding: '40px',
          boxShadow: '0 0 20px rgba(29, 185, 84, 0.7)',
        }}
      >
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
