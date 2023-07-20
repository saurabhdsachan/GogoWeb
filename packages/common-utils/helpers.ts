import { ImageLoaderProps } from 'next/image';

export const imageLoader = ({
  src,
  width,
  quality,
}: ImageLoaderProps): string =>
  `https://res.cloudinary.com/dui8mpatf/image/upload/${src}?w=${width}&q=${
    quality || 75
  }`;

export const classNames = (...classes: string[]) =>
  classes.filter(Boolean).join(' ');
