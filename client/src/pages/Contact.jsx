import React from 'react';
import ContactForm from '../ContactForm';

function Contact() {
  return (
    <section className = "contact">   
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
          maxWidth: '700px',
          background: 'linear-gradient(135deg, #050505, #0a0f0a, #0d140d)',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '40px',
          boxShadow: '0 0 60px rgba(29, 185, 84, 0.5), 0 0 30px rgba(29, 185, 84, 0.3)',
          backdropFilter: 'blur(6px)',
        }}
      >
        <ContactForm />
      </div>
    </div>
    </section>
    
  );
}

export default Contact;
