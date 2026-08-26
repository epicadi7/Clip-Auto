export default function Home() {
  const sampleClips = [
    { title: 'Clip 1', platform: 'YouTube', score: 91, color: '#e8722c' },
    { title: 'Clip 2', platform: 'Instagram', score: 87, color: '#4f9de8' },
    { title: 'Clip 3', platform: 'YouTube', score: 95, color: '#e8722c' },
    { title: 'Clip 4', platform: 'Instagram', score: 82, color: '#4f9de8' },
  ]

  const features = [
    { title: 'Auto Import', desc: 'Paste a link and the source video is pulled in automatically.' },
    { title: 'Smart Highlights', desc: 'AI finds the moments most likely to hook a viewer.' },
    { title: 'Auto Captions', desc: 'Every clip gets clean, synced captions burned in.' },
    { title: 'Virality Score', desc: 'Each clip is scored so you know what to post first.' },
  ]

  const steps = [
    { num: '01', title: 'Drop a link', desc: 'Paste any long-form video link into the box above.' },
    { num: '02', title: 'We find the highlights', desc: 'Our AI scans the video and pulls the strongest moments.' },
    { num: '03', title: 'Get camera-ready clips', desc: 'Captioned, scored, and ready to post in minutes.' },
  ]

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#1a1c1f',
        color: '#f2f3f4',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '60px 20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* HERO */}
      <h1 style={{ fontSize: '60px', fontWeight: 800, lineHeight: 1.1, textAlign: 'center' }}>
        MAKE THE
        <br />
        <span style={{ color: '#e8722c' }}>FIRST CUT.</span>
      </h1>

      <p style={{ color: '#9a9fa6', marginTop: '20px', fontSize: '18px', maxWidth: '500px', textAlign: 'center' }}>
        Drop a video link. Leave with a camera-ready short. No editing, no guesswork.
      </p>

      {/* ORIGINAL ABSTRACT THUMBNAIL (SVG, no copyrighted imagery) */}
      <div
        style={{
          marginTop: '50px',
          position: 'relative',
          width: '280px',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid #3a3d42',
        }}
      >
        <svg width="100%" height="160" viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="thumbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#212327" />
              <stop offset="100%" stopColor="#2c2f34" />
            </linearGradient>
          </defs>
          <rect width="280" height="160" fill="url(#thumbGrad)" />
          <circle cx="140" cy="80" r="28" fill="#e8722c" opacity="0.15" />
          <circle cx="140" cy="80" r="20" fill="#e8722c" opacity="0.9" />
          <path d="M133 68 L133 92 L155 80 Z" fill="#1a1c1f" />
        </svg>
        <span
          style={{
            position: 'absolute',
            bottom: '8px',
            right: '8px',
            backgroundColor: 'rgba(0,0,0,0.7)',
            color: '#f2f3f4',
            fontSize: '11px',
            padding: '2px 6px',
            borderRadius: '4px',
          }}
        >
          2:01:44
        </span>
      </div>

      <div style={{ marginTop: '40px', display: 'flex', gap: '12px' }}>
        <input
          type="text"
          placeholder="Drop a video link"
          style={{
            padding: '14px 20px',
            borderRadius: '30px',
            border: '1px solid #3a3d42',
            backgroundColor: '#212327',
            color: '#f2f3f4',
            width: '320px',
            fontSize: '15px',
          }}
        />
        <button
          style={{
            padding: '14px 28px',
            borderRadius: '30px',
            border: 'none',
            backgroundColor: '#e8722c',
            color: '#1a1c1f',
            fontWeight: 700,
            cursor: 'pointer',
            fontSize: '15px',
          }}
        >
          Get Clips
        </button>
      </div>

      {/* SAMPLE RESULTS */}
      <div style={{ marginTop: '80px', width: '100%', maxWidth: '900px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', textAlign: 'center' }}>
          Sample Results
        </h2>
        <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '10px' }}>
          {sampleClips.map((clip, i) => (
            <div
              key={i}
              style={{
                minWidth: '160px',
                borderRadius: '10px',
                overflow: 'hidden',
                border: '1px solid #3a3d42',
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '220px',
                  backgroundColor: '#212327',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#5a5d62',
                  fontSize: '13px',
                }}
              >
                {clip.title}
                <span
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    backgroundColor: clip.color,
                    color: '#1a1c1f',
                    fontSize: '10px',
                    fontWeight: 700,
                    padding: '3px 6px',
                    borderRadius: '4px',
                  }}
                >
                  {clip.platform}
                </span>
              </div>
              <div style={{ padding: '8px', backgroundColor: '#16181b', textAlign: 'center' }}>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: clip.score >= 90 ? '#4ade80' : '#e8722c',
                  }}
                >
                  Score {clip.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES GRID */}
      <div style={{ marginTop: '100px', width: '100%', maxWidth: '900px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 800, textAlign: 'center', marginBottom: '40px' }}>
          Everything happens automatically
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
            gap: '20px',
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#212327',
                border: '1px solid #3a3d42',
                borderRadius: '10px',
                padding: '20px',
              }}
            >
              <div style={{ color: '#e8722c', fontSize: '13px', fontWeight: 700, marginBottom: '8px' }}>
                0{i + 1}
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>{f.title}</h3>
              <p style={{ color: '#9a9fa6', fontSize: '13px', lineHeight: 1.5 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div style={{ marginTop: '100px', width: '100%', maxWidth: '700px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 800, textAlign: 'center', marginBottom: '40px' }}>
          How it works
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {steps.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ color: '#e8722c', fontSize: '24px', fontWeight: 800, minWidth: '48px' }}>
                {s.num}
              </div>
              <div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '4px' }}>{s.title}</h3>
                <p style={{ color: '#9a9fa6', fontSize: '14px' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS - placeholder until real users exist */}
      <div style={{ marginTop: '100px', width: '100%', maxWidth: '700px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '16px' }}>
          What creators say
        </h2>
        <p style={{ color: '#5a5d62', fontSize: '13px', marginBottom: '30px' }}>
          Real reviews will appear here once ClipAuto has its first users.
        </p>
        <div
          style={{
            backgroundColor: '#212327',
            border: '1px dashed #3a3d42',
            borderRadius: '10px',
            padding: '30px',
            color: '#5a5d62',
            fontSize: '14px',
          }}
        >
          Your first testimonial could go here.
        </div>
      </div>

      <footer style={{ marginTop: '80px', color: '#5a5d62', fontSize: '13px' }}>
        Built by Adi Mule
      </footer>
    </main>
  )
}
