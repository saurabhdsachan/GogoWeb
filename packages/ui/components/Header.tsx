import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Button } from 'ui';

import { Announcement } from './Announcement';
import { BrandFull } from './BrandFull';
import { Container } from './Container';

export const Header = ({ announcement }: { announcement: string }) => {
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255,255,255,0)', 'rgba(255,255,255,0.8)'],
  );

  return (
    <>
      {!!announcement && <Announcement announcement={announcement} />}

      <motion.header
        className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50"
        style={{ background: backgroundColor }}
      >
        <div className="bg-transparent">
          <Container>
            <div className="flex py-4 justify-between items-center">
              <div className="flex lg:w-96 space-x-4 items-center">
                <Link href="/">
                  <BrandFull size={34} />
                </Link>
                <div>
                  <h3 className="text-base font-medium leading-3">Gogo App</h3>
                  <small className="text-gray-500 text-xs">
                    Hyperlocal Simplified
                  </small>
                </div>
              </div>
              <div className="flex-grow justify-center items-center hidden md:flex" />
              <div className="lg:w-96 justify-end items-center flex">
                <a
                  href="https://play.google.com/store/apps/details?id=com.mygogo"
                  target="_blank"
                >
                  <Button variant="dark" label="Download App" />
                </a>
              </div>
            </div>
          </Container>
        </div>
      </motion.header>
    </>
  );
};
