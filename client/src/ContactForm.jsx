import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong.');
      }
    } catch {
      setStatus('Failed to send message.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="w-full mb-2 p-2 border" />
      <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email" className="w-full mb-2 p-2 border" />
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message" className="w-full mb-2 p-2 border h-32" />
      <button type="submit" className="bg-black text-white px-4 py-2">Send</button>
      {status && <p className="mt-2 text-sm text-green-600">{status}</p>}
    </form>
  );
}

export default ContactForm;
