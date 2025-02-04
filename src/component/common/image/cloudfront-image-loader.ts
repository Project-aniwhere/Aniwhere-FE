const cloudfrontImageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  const url = new URL(`http://aniwhere-image.duckdns.org/images/${src}`);
  url.searchParams.set('width', width.toString());
  return url.href;
};

export default cloudfrontImageLoader;
