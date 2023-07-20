import React from 'react';

import lottieData from '../Lotties/error.json';
import { LottieAnimation } from './LottieAnimation';

export const ErrorState = () => {
  return (
    <div className="flex h-[600px] justify-center items-center">
      <div className="text-center">
        <LottieAnimation animationData={lottieData} height={100} width={100} />
        <p className="text-gray-600 mt-2 text-sm">
          We&apos;re facing some technical issues
        </p>
      </div>
    </div>
  );
};
