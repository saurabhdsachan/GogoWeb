import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Button, Drawer } from 'ui';

import { Announcement } from './Announcement';
import { BrandFull } from './BrandFull';
import { Container } from './Container';
import { DrawerContent } from './DrawerContent';
import { TopNav } from './TopNav';

export const Header = ({ announcement }: { announcement: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openDrawer = () => setIsOpen(true);

  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <Drawer isOpen={isOpen} onClose={closeDrawer}>
        <DrawerContent closeDrawer={closeDrawer} />
      </Drawer>
      {!!announcement && <Announcement announcement={announcement} />}
      <header className="sticky bg-white top-0 z-50">
        <div className="bg-transparent">
          <Container>
            <div className="flex py-4 justify-between items-center">
              <div className="flex lg:w-96">
                <BrandFull size={28} />
              </div>
              <div className="flex-grow justify-center items-center hidden md:flex">
                <TopNav />
              </div>
              <div className="lg:w-96 justify-end items-center hidden md:flex">
                <Button variant="dark" label="Download App" />
              </div>
              <button
                onClick={openDrawer}
                className="bg-white border shadow-lg rounded-full w-10 h-10 flex justify-center items-center md:hidden focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-slate-500 hover:border-slate-500"
              >
                <Bars3Icon className="w-5 h-5" />
              </button>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
};
