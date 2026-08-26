export default function Home() {
  const sampleClips = [
    { title: 'Clip 1', platform: 'YouTube', score: 91, color: '#e8722c' },
    { title: 'Clip 2', platform: 'Instagram', score: 87, color: '#4f9de8' },
    { title: 'Clip 3', platform: 'YouTube', score: 95, color: '#e8722c' },
    { title: 'Clip 4', platform: 'Instagram', score: 82, color: '#4f9de8' },
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
      <h1 style={{ fontSize: '60px', fontWeight: 800, lineHeight: 1.1, textAlign: 'center' }}>
        MAKE THE
        <br />
        <span style={{ color: '#e8722c' }}>FIRST CUT.</span>
      </h1>

      <p style={{ color: '#9a9fa6', marginTop: '20px', fontSize: '18px', maxWidth: '500px', textAlign: 'center' }}>
        Drop a video link. Leave with a camera-ready short. No editing, no guesswork.
      </p>

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
        <div
          style={{
            width: '100%',
            height: '160px',
            backgroundColor: '#212327',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#5a5d62',
            fontSize: '13px',
          }}
        >
          Video Preview
        </div>
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

      <div style={{ marginTop: '80px', width: '100%', maxWidth: '900px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', textAlign: 'center' }}>
          Sample Results
        </h2>

        <div
          style={{
            display: 'flex',
            gap: '16px',
            overflowX: 'auto',
            paddingBottom: '10px',
          }}
        >
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
              <div
                style={{
                  padding: '8px',
                  backgroundColor: '#16181b',
                  textAlign: 'center',
                }}
              >
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

      <footer style={{ marginTop: '60px', color: '#5a5d62', fontSize: '13px' }}>
        Built by Adi Mule
      </footer>
    </main>
  )
}
