import React from 'react';
import ContactForm from '../ContactForm';

function Contact() {
  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '60px 20px',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #1f5032 100%)',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '700px',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '40px',
          boxShadow: '0 0 25px rgba(29, 185, 84, 0.15)',
          backdropFilter: 'blur(6px)',
        }}
      >
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
