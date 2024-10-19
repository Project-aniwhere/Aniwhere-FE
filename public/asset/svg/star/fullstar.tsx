import { SvgProps } from "@/type/svg/svgprops";

const FullStarSvg = ({
  width = "16",
  height = "16",
  fill = "white",
}: SvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_70_743)">
        <path
          d="M1.55664 6.89118C1.34781 6.69806 1.46125 6.34893 1.74371 6.31544L5.74609 5.84071C5.86122 5.82706 5.96121 5.75477 6.00977 5.6495L7.69792 1.98964C7.81705 1.73135 8.18425 1.7313 8.30339 1.98959L9.99154 5.64942C10.0401 5.75469 10.1394 5.82718 10.2546 5.84083L14.2572 6.31544C14.5396 6.34893 14.6527 6.69816 14.4439 6.89128L11.4852 9.62794C11.4001 9.70665 11.3622 9.8238 11.3848 9.93751L12.17 13.8906C12.2254 14.1696 11.9285 14.3858 11.6803 14.2469L8.16343 12.2777C8.06227 12.2211 7.93938 12.2214 7.83822 12.278L4.32096 14.2464C4.07275 14.3853 3.77529 14.1696 3.83073 13.8906L4.6161 9.93776C4.63869 9.82405 4.60089 9.70662 4.51578 9.62792L1.55664 6.89118Z"
          fill="white"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_70_743">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FullStarSvg;
