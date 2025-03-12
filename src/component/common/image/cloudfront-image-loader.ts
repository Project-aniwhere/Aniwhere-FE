const cloudfrontImageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  try {
    const url = new URL(`${src}`);
    /*
    url.searchParams.set('format', 'auto');
    url.searchParams.set('width', width.toString());
    url.searchParams.set('quality', (quality || 75).toString());
    */
    return url.href;
  } catch (e) {
    return src;
  }
};

export default cloudfrontImageLoader;
