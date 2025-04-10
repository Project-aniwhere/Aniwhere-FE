'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

const AniwhereImageLoader = ({
  src,
  width,
}: {
  src: string;
  width: number;
}) => {
  try {
    if (!src) src = '';
    const url = new URL(`https://aniwhere.duckdns.org/images/${src}`);
    url.searchParams.set('width', width.toString());
    return url.href;
  } catch {
    return src;
  }
};

const AWImage = (props: ImageProps) => {
  const [imageSrc, setImageSrc] = useState(
    props.src || 'placeholder/image-placeholder.png'
  );
  const [isError, setIsError] = useState(false);
  return (
    <>
      <Image
        loader={AniwhereImageLoader}
        {...props}
        alt={props.alt}
        src={imageSrc}
        blurDataURL='data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88B8AAqUB0Y/H4mkAAAAASUVORK5CYII='
        onError={() => {
          if (isError) return;
          setImageSrc('placeholder/image-placeholder.png');
          setIsError(true);
        }}
      />
    </>
  );
};

export default AWImage;
