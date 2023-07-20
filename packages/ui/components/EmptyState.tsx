import React from 'react';

import lottieData from '../Lotties/empty.json';
import { LottieAnimation } from './LottieAnimation';

export const EmptyState = () => {
  return (
    <div className="flex h-[600px] justify-center items-center">
      <div className="text-center">
        <LottieAnimation animationData={lottieData} height={300} width={300} />
        <p className="text-slate-400 text-sm">Coming soon</p>
      </div>
    </div>
  );
};
