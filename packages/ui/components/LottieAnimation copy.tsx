// import Lottie from 'lottie-react-web';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

type LottieAnimationType = {
  height?: number | string;
  width?: number | string;
  animationData?: {};
  loop?: boolean;
  delay?: number;
};

const DynamicLottie = dynamic(() => import('lottie-react-web'), { ssr: false });

export const LottieAnimation: React.FC<LottieAnimationType> = ({
  height,
  width,
  animationData,
  loop = true,
  delay,
}) => {
  const [speed, setSpeed] = useState(delay ? 0 : 1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSpeed(1);
    }, delay);

    return () => {
      timer && clearTimeout(timer);
    };
  }, [delay]);

  if (!animationData) return null;

  return (
    <DynamicLottie
      height={height}
      width={width}
      ariaLabel="Lottie"
      ariaRole="present"
      speed={speed}
      options={{
        animationData: animationData || null,
        loop,
      }}
      eventListeners={[]}
    />
  );
};
