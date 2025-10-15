import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ fontSize: 120, marginBottom: 20 }}>✨</div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: 'white',
              marginBottom: 20,
            }}
          >
            Karma Tipper
          </div>
          <div
            style={{
              fontSize: 40,
              color: 'white',
              opacity: 0.9,
              textAlign: 'center',
            }}
          >
            Support creators with crypto tips
          </div>
          <div
            style={{
              marginTop: 40,
              fontSize: 32,
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding: '20px 40px',
              borderRadius: 50,
            }}
          >
            💜 Tip with $DEGEN on Base
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
