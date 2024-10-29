import { SvgProps } from '@/type/svgprops';

const KakaotalkSvg = ({ width = '16', height = '16' }: SvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='12' fill='#FEE500'></circle>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.296 8.455c-2.122 0-3.841 1.314-3.841 2.936 0 1.008.665 1.897 1.677 2.426l-.426 1.54a.152.152 0 0 0 .062.164.158.158 0 0 0 .178.002l1.868-1.22c.158.015.318.024.48.024 2.122 0 3.842-1.315 3.842-2.936s-1.72-2.936-3.841-2.936'
        fill='#000'
        fillOpacity='0.9'
      ></path>
    </svg>
  );
};

export default KakaotalkSvg;
