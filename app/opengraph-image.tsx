import { ImageResponse } from 'next/og';

// Image metadata
export const runtime = 'edge';
export const alt = 'KANA-MASK - Identity Obfuscation';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: '#050505',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'monospace',
        }}
      >
        {/* Decorative Background Blobs */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-20%',
            width: '600px',
            height: '600px',
            background: 'rgba(8, 145, 178, 0.2)', // Cyan
            borderRadius: '50%',
            filter: 'blur(100px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-20%',
            right: '-20%',
            width: '600px',
            height: '600px',
            background: 'rgba(79, 70, 229, 0.2)', // Purple
            borderRadius: '50%',
            filter: 'blur(100px)',
          }}
        />

        {/* Text Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: 'white',
              marginBottom: 20,
              letterSpacing: '-0.05em',
            }}
          >
            KANA-MASK
          </div>
          <div
            style={{
              fontSize: 30,
              color: '#94a3b8', // Slate-400
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Identity Obfuscation Protocol
          </div>
          
          {/* Visual Example Box */}
          <div
            style={{
              display: 'flex',
              marginTop: 40,
              padding: '20px 40px',
              background: '#0f172a',
              border: '1px solid #1e293b',
              borderRadius: 12,
              color: '#22d3ee', // Cyan-400
              fontSize: 40,
            }}
          >
             ム 乃 匚 刀 モ
          </div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
