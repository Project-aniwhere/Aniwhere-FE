import { SvgProps } from '@/type/svgprops';

const GoogleSvg = ({ width = '16', height = '16' }: SvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='12' fill='#F5F5F5'></circle>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 9.825c.666 0 1.115.288 1.37.529l1.002-.978A3.406 3.406 0 0 0 12 8.455a3.542 3.542 0 0 0-3.167 1.954l1.146.89A2.143 2.143 0 0 1 12 9.825Z'
        fill='#EA4335'
      ></path>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.403 12.079c0-.292-.023-.505-.075-.725H12v1.316h1.954c-.04.326-.252.819-.725 1.15l1.12.867c.669-.619 1.054-1.529 1.054-2.608Z'
        fill='#4285F4'
      ></path>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.983 12.701a2.178 2.178 0 0 1-.004-1.403l-1.146-.89a3.546 3.546 0 0 0 0 3.184l1.15-.89Z'
        fill='#FBBC05'
      ></path>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 15.545c.957 0 1.76-.315 2.348-.858l-1.119-.867c-.3.21-.7.354-1.229.354a2.134 2.134 0 0 1-2.017-1.473l-1.147.89A3.538 3.538 0 0 0 12 15.545Z'
        fill='#34A853'
      ></path>
    </svg>
  );
};

export default GoogleSvg;
