function Home() {
  return (
    <div style={{ width: '100%' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem' }}>Control Spotify with Your Hand</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginTop: '20px' }}>
          Gesturefy lets you play, pause, and skip Spotify tracks using hand gestures. No clicks. Just motion.
        </p>
      </section>

      {/* Features Section */}
      <section style={{
        padding: '60px 20px',
        textAlign: 'center',
        backgroundColor: '#1a1a1a'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Features</h2>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem' }}>
          <li>🎵 Skip songs with a swipe</li>
          <li>✋ Pause with an open hand</li>
          <li>👊 Play with a closed fist</li>
          <li>🖥 Works with Spotify Desktop</li>
        </ul>
      </section>

      {/* Download Section */}
      <section style={{
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Download Gesturefy</h2>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button>Download for Windows</button>
          <button>Download for Mac</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
