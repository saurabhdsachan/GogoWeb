import { Dialog } from '@headlessui/react';
import { classNames, imageLoader } from 'common-utils/helpers';
import { IFunc, Sizes } from 'common-utils/type';
import Image from 'next/image';
import React from 'react';

import { Button } from './Button';

export const Confirmation = ({
  open,
  title,
  description,
  image,
  onDismissLabel = 'Cancel',
  onDismiss,
  onConfirmLabel = 'Confirm',
  onConfirm,
}: {
  open: boolean;
  title: string;
  description?: string;
  image?: string;
  onDismissLabel?: string;
  onDismiss: IFunc;
  onConfirmLabel?: string;
  onConfirm?: IFunc;
}) => {
  return (
    <Dialog open={open} onClose={onDismiss} className={`relative z-50`}>
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="w-full max-w-sm rounded-2xl p-8 shadow-lg bg-white animate-box-1">
          {!!image && (
            <Image
              src={image}
              loader={imageLoader}
              alt={title}
              height={120}
              width={120}
              className="mx-auto mb-6"
            />
          )}
          <Dialog.Title
            className={classNames(
              'text-2xl font-medium mb-2 text-center font-sans'
            )}
          >
            {title}
          </Dialog.Title>
          {description && (
            <Dialog.Description className="text-base text-gray-500 text-center">
              {description}
            </Dialog.Description>
          )}

          <div className="flex space-x-4 justify-end mt-6">
            <div className="flex-1">
              <Button
                full
                size={Sizes.MD}
                label={onDismissLabel}
                ariaLabel={onDismissLabel}
                variant={!!onConfirm ? 'transparent' : 'dark'}
                onClick={onDismiss}
              />
            </div>
            {!!onConfirm && (
              <div className="flex-1">
                <Button
                  full
                  size={Sizes.MD}
                  label={onConfirmLabel}
                  ariaLabel={onConfirmLabel}
                  variant="dark"
                  onClick={onConfirm}
                />
              </div>
            )}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
