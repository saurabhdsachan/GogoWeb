import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import { imageLoader } from 'common-utils/helpers';
import Image from 'next/image';
import React from 'react';
import { Button } from 'ui';

import { Container } from './Container';

export const PreFooter: React.FC = () => (
  <div className="flex my-12">
    <Container>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-shrink">
          <div className="text-center md:text-left">
            <h3 className="text-5xl font-bold leading-normal">
              Start beemin&apos; today
            </h3>
            <p className="mb-10">Plans start as low as $1.97/month</p>
            <Button
              variant="dark"
              label="Download the app"
              leftIcon={
                <ArrowDownTrayIcon
                  className="mr-2 h-4 w-4"
                  aria-hidden="true"
                />
              }
            />
          </div>
        </div>
        <div className="flex-grow flex justify-end">
          <Image
            loader={imageLoader}
            src="v1673512212/beem-web/keep-beemin.png"
            alt="Market watch"
            width={1000 * 0.5}
            height={590 * 0.5}
            className="object-contain"
          />
        </div>
      </div>
    </Container>
  </div>
);
