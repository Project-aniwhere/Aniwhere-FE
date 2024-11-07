'use client';

import cloudfrontImageLoader from '@/component/common/image/cloudfront-image-loader';
import Image, { ImageProps } from 'next/image';

const CFImage = (props: ImageProps) => {
  return <Image {...props} loader={cloudfrontImageLoader} unoptimized />;
};

export default CFImage;
