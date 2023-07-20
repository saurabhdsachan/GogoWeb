import { XMarkIcon } from '@heroicons/react/24/solid';
import { classNames } from 'common-utils/helpers';
import { Sizes } from 'common-utils/type';
import React, { useState } from 'react';

import { Button } from './Button';

export const Announcement = ({ announcement }: { announcement: string }) => {
  const [showAnnouncement, setShowAnnouncement] = useState<boolean>(
    !!announcement
  );

  return (
    <div
      className={classNames(
        'bg-black transition-all',
        showAnnouncement ? 'h-auto py-2' : 'h-0'
      )}
    >
      <div className="flex flex-row items-center">
        <div className="flex-1" />
        <div className="flex-grow text-center">
          <span className="text-sm m-auto text-gray-200">{announcement}</span>
        </div>
        <div className="flex-1 items-center justify-self-end text-right">
          <Button
            size={Sizes.XS}
            noShadow
            ariaLabel="close announcement"
            leftIcon={<XMarkIcon className="h-4 w-4 text-gray-900" />}
            variant="ghost"
            onClick={() => setShowAnnouncement(false)}
          />
        </div>
      </div>
    </div>
  );
};
