import React from 'react';

function Home() {
  return (
    <div className="max-w-3xl mx-auto text-center px-4">
      <section className="py-28 bg-white text-[#212121]">
        <h1 className="text-6xl font-extrabold mb-4">Gesturefy</h1>
        <p className="text-2xl text-gray-600 mb-10">Control Spotify with your hand</p>
        <div className="flex justify-center gap-8 mb-10">
          <a href="/downloads/gesturefy-win.exe" download>
            <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl transition duration-200 shadow-md">
              Download for Windows
            </button>
          </a>
          <a href="/downloads/gesturefy-mac.dmg" download>
            <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl transition duration-200 shadow-md">
              Download for Mac
            </button>
          </a>
        </div>
      </section>

      <section className="py-20 bg-gray-100 text-[#212121] max-w-3xl">
        <h2 className="text-3xl font-bold mb-6">Why Gesturefy?</h2>
        <ul className="text-lg space-y-4">
          <li>🎯 8 intuitive hand gestures supported</li>
          <li>⚡️ Real-time Spotify control with <strong>99% recognition accuracy</strong></li>
          <li>🧠 Lightweight and cross-platform</li>
          <li>🔒 Secure login via Spotify OAuth2</li>
        </ul>
      </section>

      <section className="py-20 bg-[#212121] text-white max-w-2xl">
        <h2 className="text-3xl font-bold mb-6">Get Started in Seconds</h2>
        <p className="text-lg">Download the app, log in to Spotify, and start controlling your music with just your hand. No webcam setup or drivers required.</p>
      </section>
    </div>
  );
}

export default Home;
