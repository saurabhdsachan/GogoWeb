import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import { formatCurrency } from 'common-utils/helpers';
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
              Start earning today
            </h3>
            <p className="mb-10">{formatCurrency(0)} investment</p>
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
      </div>
    </Container>
  </div>
);
