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
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          padding: '40px',
        }}
      >
        <div style={{ fontSize: 120, marginBottom: 40 }}>✨</div>
        <div
          style={{
            fontSize: 70,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 40,
            textAlign: 'center',
          }}
        >
          Choose Tip Amount
        </div>
        <div
          style={{
            fontSize: 50,
            color: 'white',
            opacity: 0.95,
            textAlign: 'center',
            marginBottom: 50,
          }}
        >
          Select how many $DEGEN to send
        </div>
        <div
          style={{
            display: 'flex',
            gap: 40,
            marginTop: 20,
          }}
        >
          <div
            style={{
              fontSize: 60,
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              padding: '30px 50px',
              borderRadius: 30,
              fontWeight: 'bold',
            }}
          >
            100
          </div>
          <div
            style={{
              fontSize: 60,
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              padding: '30px 50px',
              borderRadius: 30,
              fontWeight: 'bold',
            }}
          >
            250
          </div>
          <div
            style={{
              fontSize: 60,
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              padding: '30px 50px',
              borderRadius: 30,
              fontWeight: 'bold',
            }}
          >
            500
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
