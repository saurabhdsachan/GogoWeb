import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';

interface CarouselNavButton {
  onClick: () => void;
  flow: string;
}

const CarouselNavButton: React.FC<CarouselNavButton> = ({ onClick, flow }) => {
  return (
    <div
      className={`${
        flow === 'left' ? 'justify-self-end' : 'justify-self-start'
      }`}
    >
      <button
        className="relative z-10 h-16 w-16 bg-white shadow-md transition hover:shadow-lg rounded-2xl flex items-center justify-center text-gray-500 hover:text-gray-900 focus:ring-1 focus:ring-gray-500 focus:outline-none px-1"
        onClick={onClick}
        aria-label={flow}
      >
        {flow === 'left' && (
          <>
            <span className="sr-only">Left</span>
            <ArrowLeftIcon className="w-5 h-5" />
          </>
        )}
        {flow === 'right' && (
          <>
            <span className="sr-only">Right</span>
            <ArrowRightIcon className="w-5 h-5" />
          </>
        )}
      </button>
    </div>
  );
};

export default React.memo(CarouselNavButton);
