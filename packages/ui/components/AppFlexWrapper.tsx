import { classNames } from 'common-utils/helpers';
import React, { Children } from 'react';

import { Container } from './Container';

interface AppFlexWrapperComponents {
  Footer?: React.ReactElement;
  Body: React.ReactElement;
}

export const AppFlexWrapper: any & AppFlexWrapperComponents = ({
  flow = 'c',
  withScroll,
  children,
}: {
  flow?: 't' | 'c' | 'b';
  withScroll?: boolean;
  children?: any;
}) => {
  const childCount = Children.count(children);

  return (
    <div className="animate-box-1 mx-auto flex min-h-free flex-col bg-white md:max-w-md">
      <div
        className={classNames(
          'flex flex-grow justify-center overflow-y-auto',
          withScroll ? 'h-free' : '',
          flow === 'b' ? 'items-end' : '',
          flow === 't' ? 'items-start' : '',
          flow === 'c' ? 'items-center' : '',
        )}
      >
        {children && childCount > 1 ? Children.toArray(children)[0] : children}
      </div>

      {children && Children.toArray(children)[1] && (
        // @ts-ignore: Unreachable code error
        <div className="flex-shrink">{Children?.toArray(children)[1]}</div>
      )}
    </div>
  );
};

AppFlexWrapper.Body = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);

AppFlexWrapper.Body.displayName = 'AppFlexWrapperBody';

AppFlexWrapper.Footer = ({ children }: { children: React.ReactNode }) => (
  // @ts-ignore: Unreachable code error
  <Container>{!!children && <div className="py-4">{children}</div>}</Container>
);

AppFlexWrapper.Footer.displayName = 'AppFlexWrapperFooter';
