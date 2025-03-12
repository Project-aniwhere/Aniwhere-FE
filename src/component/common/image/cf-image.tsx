'use client';

import Image, { ImageProps } from 'next/image';
const AniwhereImageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  try {
    const url = new URL(`https://aniwhere.duckdns.org/images/${src}`);
    url.searchParams.set('width', width.toString());
    return url.href;
  } catch (e) {
    return src;
  }
};

const AWImage = (props: ImageProps) => {
  return <Image {...props} loader={AniwhereImageLoader} />;
};

export default AWImage;
