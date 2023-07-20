import localFont from 'next/font/local';

export const PrimaryFont = localFont({
  variable: '--font-primary',
  preload: true,
  src: [
    {
      path: '../Fonts/ArticulatCF-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../Fonts/ArticulatCF-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../Fonts/ArticulatCF-DemiBold.woff2',
      weight: '600',
      style: 'semibold',
    },
    {
      path: '../Fonts/ArticulatCF-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
});

export const SecondaryFont = localFont({
  variable: '--font-secondary',
  preload: true,
  src: [
    {
      path: '../Fonts/dmserifdisplay-regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});
