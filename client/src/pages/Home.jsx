function Home() {
  const features = [
    { name: 'Point Right', action: 'Skip Song', image: 'https://via.placeholder.com/100' },
    { name: 'Open Hand', action: 'Pause Music', image: 'https://via.placeholder.com/100' },
    { name: 'Closed Fist', action: 'Play Music', image: 'https://via.placeholder.com/100' },
    { name: 'Point Left', action: 'Previous Song', image: 'https://via.placeholder.com/100' },
    { name: 'Thumbs Up', action: 'Like Song', image: 'https://via.placeholder.com/100' },
    { name: 'Point Up', action: 'Volume Up', image: 'https://via.placeholder.com/100' },
    { name: 'Point Down', action: 'Volume Down', image: 'https://via.placeholder.com/100' },
    { name: 'Peace Sign', action: 'Stop Gesture Detection', image: 'https://via.placeholder.com/100' },
  ];

  return (
    <div style={{ width: '100%' }}>
      <style>{`
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes letterSpacingPulse {
          0%, 100% {
            letter-spacing: 0.15em;
          }
          50% {
            letter-spacing: 0.22em;
          }
        }

        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

      {/* Hero Section */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '60px 20px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #121212 0%, #1db954 100%)', // dark to Spotify green gradient
          color: 'white',
          animation: 'fadeSlideUp 1s ease forwards',
        }}
      >
        <h1
          style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            margin: 0,
            animation: 'letterSpacingPulse 3s ease-in-out infinite',
            animationDirection: 'alternate',
            textShadow: '0 0 10px rgba(29, 185, 84, 0.8)', // subtle green glow
          }}
        >
          Control Spotify with Your Hand
        </h1>
        <p
          style={{
            fontSize: '1.3rem',
            maxWidth: '600px',
            marginTop: '25px',
            color: '#d1d1d1',
            animation: 'scaleIn 1.2s ease forwards',
            animationDelay: '0.8s',
            opacity: 0,
          }}
        >
          Gesturefy lets you play, pause, and skip Spotify tracks using hand gestures. No clicks. Just motion.
        </p>
      </section>

      {/* Features Section */}
      <section
        style={{
          padding: '60px 20px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #121212, #1a1a1a)',
          color: 'white',
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '40px' }}>Features</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px',
            justifyItems: 'center',
          }}
        >
          {features.map((feat, idx) => (
            <div
              key={idx}
              style={{
                background: 'linear-gradient(145deg, #2f2f2f, #222222)', // subtle gradient card background
                padding: '20px',
                borderRadius: '12px',
                width: '100%',
                maxWidth: '220px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 0 0 transparent',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 0 15px #1db954';
                e.currentTarget.style.transform = 'translateY(-8px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 0 0 transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <img
                src={feat.image}
                alt={feat.name}
                style={{ width: '100px', height: '100px', objectFit: 'cover', marginBottom: '15px' }}
              />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{feat.name}</h3>
              <p style={{ fontSize: '1rem', color: '#ccc' }}>{feat.action}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Download Section */}
      <section
        style={{
          padding: '60px 20px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #1a1a1a, #121212)',
          color: 'white',
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Download Gesturefy</h2>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            style={{
              background:
                'linear-gradient(135deg, #1db954, #14833b)',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '30px',
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={e =>
              (e.currentTarget.style.background = 'linear-gradient(135deg, #14833b, #1db954)')
            }
            onMouseLeave={e =>
              (e.currentTarget.style.background = 'linear-gradient(135deg, #1db954, #14833b)')
            }
          >
            Download for Windows
          </button>
          <button
            style={{
              background:
                'linear-gradient(135deg, #1db954, #14833b)',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '30px',
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={e =>
              (e.currentTarget.style.background = 'linear-gradient(135deg, #14833b, #1db954)')
            }
            onMouseLeave={e =>
              (e.currentTarget.style.background = 'linear-gradient(135deg, #1db954, #14833b)')
            }
          >
            Download for Mac
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
