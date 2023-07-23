import { Dialog, Transition } from '@headlessui/react';
import React from 'react';

export const Drawer = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Transition show={isOpen}>
      <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>
        <Transition.Child
          enter="transition ease-out duration-300"
          enterFrom="opacity-0 transform translate-y-64"
          enterTo="opacity-100 transform translate-y-0"
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100 scale-100 translate-y-0"
          leaveTo="opacity-0 scale-95 translate-y-64"
        >
          <div className="fixed inset-0 overflow-y-auto custom-font">
            <div className="flex min-h-full p-6 bg-white">
              {/* @ts-ignore */}
              <Dialog.Panel className="w-full">{children}</Dialog.Panel>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
