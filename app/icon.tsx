import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 320,
          background: '#050505',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#22d3ee', // Cyan-400
          borderRadius: '18%', // Squircle shape like iOS
          fontWeight: 'bold',
          fontFamily: 'monospace',
          border: '12px solid #0891b2', // Cyan-600 border
        }}
      >
        |<
      </div>
    ),
    { ...size }
  );
}
