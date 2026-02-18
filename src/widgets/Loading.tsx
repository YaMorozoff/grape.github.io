import Image from 'next/image';
import { Line } from 'rc-progress';
import { FC } from 'react';

import Grape from '@/shared/assets/img/grape_logo.png';
import Rectangles from '@/shared/assets/img/rectangles.png';

export const Loading: FC<{ progress: number }> = ({ progress }) => {
  return (
    <div className="items-enter relative flex h-screen w-full flex-col justify-center gap-2 px-2 md:px-10 2xl:px-60">
      <Image src={Grape} alt="grape_logo" />
      <Line percent={progress} strokeWidth={1} strokeColor="#6348EABF" trailColor="#5E5E5E" />
      <div className="text-code-xs flex w-full justify-between">
        <span className="loading animate-loading-dots flex">Loading</span>
        <span>{progress}%</span>
      </div>
      <div className="absolute top-0 -right-[20%] -z-10 2xl:-top-50 2xl:-right-[10%]">
        <Image src={Rectangles} alt="rectangles" className="animate-brightness-slow filter" width={1000} />
      </div>
    </div>
  );
};
