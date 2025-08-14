import { useEffect } from 'react';
import pointRight from '../assets/gesture-icons/pointright.png';
import openHand from '../assets/gesture-icons/openhand.png';
import closedFist from '../assets/gesture-icons/closedfist.png';
import pointLeft from '../assets/gesture-icons/pointleft.png';
import thumbsUp from '../assets/gesture-icons/thumbsup.png';
import pointUp from '../assets/gesture-icons/pointup.png';
import pointDown from '../assets/gesture-icons/pointdown.png';
import peaceSign from '../assets/gesture-icons/peacesign.png';

function Home() {
  const features = [
  { name: 'Point Right', action: 'Skip Song', image: pointRight },
  { name: 'Open Hand', action: 'Pause Music', image: openHand },
  { name: 'Closed Fist', action: 'Play Music', image: closedFist },
  { name: 'Point Left', action: 'Previous Song', image: pointLeft },
  { name: 'Thumbs Up', action: 'Like Song', image: thumbsUp },
  { name: 'Point Up', action: 'Volume Up', image: pointUp },
  { name: 'Point Down', action: 'Volume Down', image: pointDown },
  { name: 'Peace Sign', action: 'Stop Gesture Detection', image: peaceSign },
];


  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // delay to ensure DOM is ready
      }
    }
  }, []);
  
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

        @keyframes easeInShrink {
          0% {
            transform: scale(1.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
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
      <section className='hero-section'
        style={{
          position: 'relative', 
          overflow: 'hidden',
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
            position: 'relative',
            zIndex: 2,
            fontSize: '4.5rem',
            fontWeight: '800',
            margin: 0,
            animation: 'easeInShrink 1.5s ease-out forwards',
            textShadow: `
              0 0 10px rgba(29, 185, 84, 0.8),
              0 0 20px rgba(29, 185, 84, 0.5),
              0 0 30px rgba(29, 185, 84, 0.3)
            `,
          }}
        >
          Control Spotify with Your Hand
        </h1>
        <p
          style={{
            position: 'relative',
            zIndex: 2,
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

      {/* About the App Section */}
      <section
        id="about-app"
        style={{
          padding: '60px 20px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #0d040d, #08110a, #191919, #0a0f0a, #050505)',
          
          color: 'white',
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            marginBottom: '30px',
            position: 'relative',
            display: 'inline-block',
            color: 'white',
          }}
        >
          About the App
          <span
            style={{
              position: 'absolute',
              left: 0,
              bottom: -6,
              height: '2px',
              width: '100%',
              borderRadius: '2px',
              background: 'linear-gradient(90deg, #0a2a07, #14833b, #0a2a07)',
              boxShadow: '0 0 6px 2px rgba(20, 131, 59, 0.4)',
              filter: 'brightness(0.85)',
            }}
          />
        </h2>
        <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.5, color: '#ccc' }}>
          We’ve built a custom-trained AI model that recognizes your hand gestures with incredible precision. 
          After thorough training and fine-tuning, our AI achieves 99% accuracy in understanding your commands 
          to control Spotify. This means faster, smoother, and more reliable music control — all without touching 
          your device. Experience the future of hands-on music interaction, powered by cutting-edge technology designed 
          just for you.
        </p>
      </section>

      {/* Download Section */}
      <section id = "download"
        style={{
          padding: '60px 20px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #0d000d, #00110a, #0a0f0a, #000505)',

          color: 'white',
        }}
      >
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '30px', 
          position: 'relative', 
          display: 'inline-block',
          color: 'white',
        }}>
          Download Gesturefy
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
        </h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 40px', fontSize: '1.1rem', color: '#bbb' }}>
          Seamlessly control Spotify with hand gestures. Download the app for your platform and enjoy touch-free music control.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '30px',
            justifyItems: 'center',
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          {/* Windows Button */}
          <button
            style={{
              background: 'linear-gradient(145deg, #000000, #051003, #121212)',
              padding: '18px 24px',
              borderRadius: '12px',
              width: '100%',
              maxWidth: '220px',
              color: 'white',
              fontWeight: '600',
              fontSize: '1.1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 0 0 transparent',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              border: '1px solid rgba(255, 255, 255, 0.3)'
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
              src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Windows_logo_-_2012.svg"
              alt="Windows"
              style={{ width: '24px', height: '24px' }} 
            />
            Download for Windows
          </button>

          {/* Mac Button */}
          <button
            style={{
              background: 'linear-gradient(145deg, #000000, #051003, #121212)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              padding: '18px 24px',
              borderRadius: '12px',
              width: '100%',
              maxWidth: '220px',
              color: 'white',
              fontWeight: '600',
              fontSize: '1.1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 0 0 transparent',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
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
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Mac"
              style={{ width: '24px', height: '24px', filter: 'invert(1)' }} // invert to white
            />
            Download for Mac
          </button>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features"
        style={{
          padding: '60px 20px',
          textAlign: 'center',
          background: `linear-gradient(135deg, #000000, #000000, #061b06)`,
          color: 'white',
        }}
      >
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '50px', 
          position: 'relative', 
          display: 'inline-block',
          color: 'white',
        }}>
          Features
          <span style={{
            position: 'absolute',
            left: 0,
            bottom: -6,
            height: '2px',
            width: '100%',
            borderRadius: '2px',
            background: 'linear-gradient(90deg, #0a2a07, #14833b, #0a2a07)',
            boxShadow: '0 0 6px 2px rgba(20, 131, 59, 0.4)',
            filter: 'brightness(0.85)',
          }} />
        </h2>

        {/* Gesture grid */}
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
                backgroundColor: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.3)',
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
                style={{ width: '100px', height: '100px', marginBottom: '15px', objectFit: 'contain' }}
              />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{feat.name}</h3>
              <p style={{ fontSize: '1rem', color: '#ccc' }}>{feat.action}</p>
            </div>
          ))}
        </div>

        {/* Extra features text */}
        <div style={{ marginTop: '50px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
          <p style={{ fontSize: '1.1rem', color: '#ccc' }}>
            More than just gestures, Gesturefy also shows 
            <span style={{ color: '#1db954', fontWeight: 'bold' }}> live song progress </span> 
            and features 
            <span className="color-shift" style={{ fontWeight: 'bold' }}> dynamic highlights </span> 
            that adapt to the current track.
          </p>
          {/* Animated progress bar */}
          <div style={{
            marginTop: '15px',
            height: '6px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '3px',
            overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              width: '60%',
              background: 'linear-gradient(90deg, #1db954, #14833b, #1db954)',
              animation: 'progressAnim 4s infinite linear',
            }} />
          </div>
        </div>

        {/* Keyframes for animated bar */}
        <style>
          {`
            @keyframes progressAnim {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
            @keyframes colorShift {
              0% { color: #00ff00; }       /* Neon green */
              33% { color: #00ffff; }      /* Bright cyan */
              66% { color: #adff2f; }      /* Yellow-green */
              100% { color: #00ff00; }     /* Back to neon green */
            }
            .color-shift {
              animation: colorShift 2s infinite ease-in-out;
            }
          `}
        </style>
      </section>

    </div>
  );
}

export default Home;
