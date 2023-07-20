import { classNames } from 'common-utils/helpers';
import React from 'react';

export const StepVisualizer = ({
  total,
  current,
}: {
  total: number;
  current: number;
}) => {
  return (
    <div className="mt-10 flex space-x-4">
      {Array.from(Array(total).keys()).map((item) => (
        <div
          key={`step-${item}`}
          className={classNames(
            'group flex h-1 w-full flex-col rounded hover:border-gray-800',
            item < current - 1 ? 'bg-gray-900' : 'bg-gray-300',
            item === current - 1 ? 'bg-gray-400' : ''
          )}
        />
      ))}
    </div>
  );
};
