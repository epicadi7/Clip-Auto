export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#1a1c1f',
        color: '#f2f3f4',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px 20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ fontSize: '60px', fontWeight: 800, lineHeight: 1.1 }}>
        MAKE THE
        <br />
        <span style={{ color: '#e8722c' }}>FIRST CUT.</span>
      </h1>

      <p style={{ color: '#9a9fa6', marginTop: '20px', fontSize: '18px', maxWidth: '500px' }}>
        Drop a video link. Leave with a camera-ready short. No editing, no guesswork.
      </p>

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

      <footer style={{ position: 'fixed', bottom: '20px', color: '#5a5d62', fontSize: '13px' }}>
        Built by Adi Mule
      </footer>
    </main>
  )
}
