import '../styles/global.css';

import { motion, MotionConfig, useReducedMotion } from 'framer-motion';
import React from 'react';

import { ErrorState } from './ErrorState';
import { Footer } from './Footer';
import { FadeInStagger } from './framerAnimation/fadeIn';
import { Header } from './Header';
import { LoadingState } from './LoadingState';
import { PreFooter } from './PreFooter';
import { GridPattern } from './GridPattern';

interface LayoutSubComponents {
  Announcement: React.FC;
  Header: React.FC;
  BodyContent: any;
  PreFooter: React.FC;
  Footer: React.FC;
}

export const Layout: any & LayoutSubComponents = ({
  children,
}: {
  children: string | JSX.Element | JSX.Element[];
}) => (
  <>
    <a
      className="text-sm py-2 px-5 bg-white rounded-lg absolute top-1.5 left-1.5 focus:z-50 focus:ring-1 focus:ring-gray-900 focus:outline-none"
      href="#main"
    >
      Skip to content
    </a>
    <div className="bg-white relative">
      <div className="absolute inset-0 top-0" />
      <div className="relative z-10">{children}</div>
    </div>
  </>
);

Layout.Header = ({ announcement }: { announcement: string }) => (
  <Header announcement={announcement} />
);

Layout.Header.displayName = 'LayoutHeader';

Layout.BodyContent = ({
  children,
  isLoading,
  isError,
}: {
  children: string | JSX.Element | JSX.Element[];
  isLoading: boolean;
  isError: boolean;
}) => {
  if (isLoading) {
    return (
      <main id="main">
        <LoadingState />
      </main>
    );
  }
  if (isError) {
    return (
      <main id="main">
        <ErrorState />
      </main>
    );
  }
  if (!isLoading && !isError) {
    return (
      <main id="main" className="min-h-screen overflow-hidden">
        {children}
        <GridPattern
          className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-96}
          interactive
        />
      </main>
    );
  }
};

Layout.BodyContent.displayName = 'LayoutBodyContent';

Layout.PreFooter = () => <PreFooter />;

Layout.PreFooter.displayName = 'LayoutPreFooter';

Layout.Footer = () => <Footer />;

Layout.Footer.displayName = 'LayoutFooter';
