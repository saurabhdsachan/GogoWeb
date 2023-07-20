import { Outfit } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
export const PrimaryFont = Outfit({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});
export const SecondaryFont = Outfit({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});
