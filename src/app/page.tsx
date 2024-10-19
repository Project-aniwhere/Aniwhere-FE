import spylogo from "@public/asset/img/mainslider/spylogo.png";
import FullStarSvg from "@public/asset/svg/star/fullstar";

import Image from "next/image";

const Video = () => {
  console.log(spylogo.src);
  return (
    <div className="relative">
      <div className="absolute z-0 bg-[radial-gradient(50%_50%_at_58.23%_50%,_rgba(0,0,0,0)_60%,_rgba(0,0,0,0.6)_100%)] w-screen h-screen " />
      <video
        loop
        muted
        autoPlay
        controls={false}
        className="relative -z-10 h-screen w-screen object-cover"
      >
        <source src="/asset/video/mainslider/spyfam.mp4" type="video/mp4" />
      </video>
      <div className="absolute bottom-16 left-16">
        <p className="text-white font-semibold">
          평범하지 않은 가족, 평범하지 않은 일상!
        </p>
        <Image
          src={spylogo.src}
          alt="스패로고"
          width={0}
          height={0}
          sizes="30vw"
          className="-z-10 min-w-[30vw] object-cover"
        ></Image>
        <div className="flex flex-row items-center gap-2">
          <FullStarSvg />
          <p className="text-white">4.2 • 일상 • 25분</p>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Video />
      와우!
    </div>
  );
}
