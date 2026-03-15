const primaryGreen = '#1A4331';
const accentGreen = '#2B6A4E';
const lightBeige = '#F5F5F0';
const darkBeige = '#E5E5DE';
const white = '#FFFFFF';
const black = '#111111';
const gray = '#888888';

export default {
  light: {
    text: black,
    textSecondary: gray,
    background: lightBeige,
    cardBackground: white,
    tint: primaryGreen,
    tabIconDefault: '#A0A09A',
    tabIconSelected: primaryGreen,
    border: darkBeige,
    success: accentGreen,
  },
  dark: {
    text: lightBeige,
    textSecondary: '#A0A09A',
    background: black,
    cardBackground: '#1A1A1A',
    tint: primaryGreen,
    tabIconDefault: '#555555',
    tabIconSelected: primaryGreen,
    border: '#333333',
    success: accentGreen,
  },
};
