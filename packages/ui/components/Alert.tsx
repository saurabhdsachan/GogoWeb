import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { classNames } from 'common-utils/helpers';
import { AlertTypes } from 'common-utils/type';
import React from 'react';

export const Alert = ({
  type,
  message,
}: {
  type: AlertTypes;
  message: string;
}) => {
  return (
    <div
      className={classNames(
        'rounded-md p-4 my-4',
        type === AlertTypes.ERROR ? 'bg-red-50' : '',
        type === AlertTypes.INFO ? 'bg-blue-50' : '',
        type === AlertTypes.SUCCESS ? 'bg-green-50' : ''
      )}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon
            className={classNames(
              'h-5 w-5',
              type === AlertTypes.ERROR ? 'text-red-500' : '',
              type === AlertTypes.INFO ? 'text-blue-500' : '',
              type === AlertTypes.SUCCESS ? 'text-green-600' : ''
            )}
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <div
            className={classNames(
              'text-sm',
              type === AlertTypes.ERROR ? 'text-red-500' : '',
              type === AlertTypes.INFO ? 'text-blue-500' : '',
              type === AlertTypes.SUCCESS ? 'text-green-600' : ''
            )}
          >
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
