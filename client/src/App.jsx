import { Link, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home'
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#212121] flex flex-col">
      <nav className="fixed top-0 w-full bg-[#121212] text-white flex justify-end items-center px-12 py-5 shadow-md z-50 space-x-10">
        <Link to="/" className="hover:text-green-400 transition text-lg">Home</Link>
        <Link to="/contact" className="hover:text-green-400 transition text-lg">Contact</Link>
      </nav>

      {/* Content container */}
      <main className="flex-grow pt-[80px] flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
