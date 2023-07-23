import { ImageLoaderProps } from 'next/image';

export const imageLoader = ({
  src,
  width,
  quality,
}: ImageLoaderProps): string =>
  `https://res.cloudinary.com/dxc5ccfcg/image/upload/${src}?w=${width}&q=${
    quality || 75
  }`;

export const classNames = (...classes: string[]) =>
  classes.filter(Boolean).join(' ');

export const randomNum = (max = 100): number => Math.floor(Math.random() * max);

export const randomNumInRange = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export const formatCurrency = (data: number): string => {
  return data?.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
};
