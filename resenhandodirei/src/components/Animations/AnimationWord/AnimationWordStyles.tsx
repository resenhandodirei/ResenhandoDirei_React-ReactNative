import { CSSProperties } from 'react';

export const containerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  fontSize: '4rem', // Large font size
  fontWeight: 'bold',
  textAlign: 'center',
  lineHeight: '1',
};

export const letterStyle: CSSProperties = {
  display: 'inline-block',
  margin: '0 10px', // Increased spacing
  transform: 'scale(1.2)', // Slightly larger scale
};

export const subtitleStyle: CSSProperties = {
  marginTop: '20px',
  fontSize: '1.5rem', // Smaller font size for subtitle
  fontWeight: 'normal',
  color: '#555', // Subtle gray color
  textAlign: 'center',
};
