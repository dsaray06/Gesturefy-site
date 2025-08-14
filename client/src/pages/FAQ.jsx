import React from 'react';

function FAQ() {
  const faqs = [
    {
      question: 'What is Gesturefy?',
      answer:
        "Gesturefy is a desktop app that lets you control Spotify with simple hand gestures. You can play, pause, skip, rewind, adjust the volume, and like songs. Plus, there's even a gesture to stop gesture detection so you don't need to go over to the app and click the Stop button!",
    },
    {
      question: 'How accurate is the gesture recognition?',
      answer:
        'We trained our own AI model specifically for this purpose, achieving over 99% accuracy in detecting supported gestures.',
    },
    {
      question: 'Do I need special hardware?',
      answer:
        'No special hardware is required, just a device with a standard webcam is enough. Gesturefy uses your camera feed to recognize gestures securely and efficiently.',
    },
    {
      question: 'Is my video data stored anywhere?',
      answer:
        'No. All processing happens locally on your device, and no video data is uploaded or stored on any server.',
    },
    {
      question: 'Which platforms are supported?',
      answer:
        'Gesturefy currently supports Windows and macOS. Linux support is not available at this time.',
    },
  ];

  return (
    <section className="faq">
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
            maxWidth: '800px',
            background: 'linear-gradient(135deg, #050505, #0a0f0a, #0d140d)',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '40px',
            boxShadow:
              '0 0 60px rgba(29, 185, 84, 0.5), 0 0 30px rgba(29, 185, 84, 0.3)',
            backdropFilter: 'blur(6px)',
          }}
        >
          <h1 style={{ fontSize: '2rem', marginBottom: '30px', textAlign: 'center' }}>
            Frequently Asked Questions
          </h1>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                marginBottom: '20px',
                paddingBottom: '15px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: '#1db954' }}>
                {faq.question}
              </h3>
              <p style={{ fontSize: '1rem', color: '#ccc', lineHeight: '1.5' }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
