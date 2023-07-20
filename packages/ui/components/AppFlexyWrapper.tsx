import { LockClosedIcon } from '@heroicons/react/24/outline';
import { classNames } from 'common-utils/helpers';
import Link from 'next/link';
import React, { Children } from 'react';

import { Container } from './Container';

interface AppFlexyWrapperComponents {
  Footer?: React.ReactElement;
  Body: React.ReactElement;
}

export const AppFlexyWrapper: any & AppFlexyWrapperComponents = ({
  flow = 'c',
  withScroll,
  children,
}: {
  flow?: 't' | 'c' | 'b';
  withScroll?: boolean;
  children?: React.ReactNode;
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
          flow === 'c' ? 'items-center' : ''
        )}
      >
        {children && childCount > 1 ? Children.toArray(children)[0] : children}
      </div>
      {children && Children.toArray(children)[1] && (
        <div className="flex-shrink">{Children.toArray(children)[1]}</div>
      )}
    </div>
  );
};

AppFlexyWrapper.Body = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);

AppFlexyWrapper.Body.displayName = 'AppFlexyWrapperBody';

AppFlexyWrapper.Footer = ({ children }: { children: React.ReactNode }) => (
  <>
    <Container>
      {!!children && <div className="py-4">{children}</div>}
    </Container>
    <div className="flex justify-center space-1 items-baseline bg-gray-100 py-4">
      <div className="text-center">
        <svg
          viewBox="0 0 77 24"
          width="77"
          height="24"
          fill="none"
          className="inline"
        >
          <path
            fill="#252525"
            fillRule="evenodd"
            d="M76.472 7.516a.649.649 0 0 0 .528-.64.652.652 0 0 0-.526-.638 13.169 13.169 0 0 1-1.924-.508c-.684-.243-1.316-.555-1.764-.943-1.264-1.132-1.769-2.983-1.974-4.255a.654.654 0 0 0-.239-.393.651.651 0 0 0-1.04.393c-.206 1.275-.711 3.137-1.975 4.256-.443.393-1.073.708-1.758.951a12.275 12.275 0 0 1-1.938.5.652.652 0 0 0 .01 1.276c.547.103 1.244.264 1.924.506.684.243 1.317.556 1.762.944 1.274 1.138 1.772 2.876 1.979 4.042l.001.007a.652.652 0 0 0 .637.527.649.649 0 0 0 .638-.527v-.003l.001-.006c.204-1.174.705-2.91 1.975-4.04.446-.388 1.078-.7 1.762-.944a12.92 12.92 0 0 1 1.921-.505Z"
            clipRule="evenodd"
          />
          <path
            fill="#252525"
            d="M11.136 23.824c2.76 0 4.532-1.155 4.532-4.244 0-2.185-1.671-3.34-3.393-3.465 1.671-.377 2.482-1.683 2.482-3.265 0-2.787-2.077-4.193-5.42-4.193-.43 0-3.696-.025-4.633-.05H.5a.479.479 0 0 0-.481.477c-.025 2.486-.025 10.898 0 14.288 0 .276.203.477.481.477h4.254l6.382-.025Zm-5.977-9.367v-2.536h2.837c1.088 0 1.797.352 1.797 1.18 0 1.105-.962 1.356-1.494 1.356H5.11h.05Zm.127 3.49c1.469.026 2.912.026 3.267.026 1.215 0 1.975.527 1.975 1.306 0 .929-.861 1.43-1.747 1.43-.355 0-2.077 0-3.622-.024l.127-2.737ZM29.445 21.212c.126-.2 0-.477-.203-.602l-1.849-1.331c-.202-.126-.48-.05-.658.15-.658.729-1.62 1.28-2.861 1.28-1.95 0-2.71-1.154-2.71-2.41h4.887c1.925 0 3.47-1.456 2.912-3.54-.557-2.01-2.76-2.938-5.621-2.989-4.558-.075-7.116 2.135-7.116 6.002 0 4.269 3.292 6.228 7.546 6.228 2.178.025 4.508-.83 5.673-2.788Zm-6.23-6.428c.405-.05.785 0 1.089.2 1.064.478.658 2.361-.962 2.361h-2.153c.178-1.532.735-2.486 2.026-2.561ZM42.771 21.212c.127-.2 0-.477-.202-.602l-1.849-1.331c-.202-.126-.48-.05-.658.15-.658.729-1.62 1.28-2.861 1.28-1.95 0-2.71-1.154-2.71-2.41h4.887c1.925 0 3.47-1.456 2.912-3.54-.557-2.01-2.76-2.938-5.621-2.989-4.558-.075-7.116 2.135-7.116 6.002 0 4.269 3.292 6.228 7.546 6.228 2.178.025 4.508-.83 5.672-2.788Zm-6.229-6.428c.405-.05.785 0 1.089.2 1.063.478.658 2.361-.962 2.361h-2.153c.178-1.532.735-2.486 2.026-2.561ZM48.679 23.372c0-1.155-.025-2.411-.025-4.043.025-1.783.227-3.516 1.721-3.516 1.115 0 1.773 1.23 1.773 4.169v3.39c0 .25.228.477.481.477h4.204a.496.496 0 0 0 .48-.477v-2.788c0-.577-.025-1.104-.05-1.607.05-1.607.355-3.088 1.722-3.164 1.14-.075 1.773 1.206 1.773 4.169v3.365c0 .276.228.477.48.477h4.204c.279 0 .482-.201.482-.477v-3.039c.075-7.232-1.57-8.512-4.938-8.512-1.267 0-4.052.276-4.23 3.314-.708-2.888-1.974-3.39-4.405-3.314-1.267.05-3.14.73-3.723 2.965v-2.363a.496.496 0 0 0-.48-.477h-4.23a.479.479 0 0 0-.48.477c0 2.06.024 7.91.075 10.974 0 .276.203.477.481.477h4.204a.479.479 0 0 0 .48-.477Z"
          />
        </svg>
        <hr className="my-4" />
        <Container>
          <div className="flex space-x-2">
            <div className="flex-shrink">
              <LockClosedIcon className="mt-1 h-5 w-5 text-gray-500" />
            </div>
            <div className="flex-grow">
              <p className="text-sm text-gray-600 text-left">
                Gogo is a safe & trusted smart wallet app for transactions. All
                our user accounts are verified, safe & secure.&nbsp;
                <Link href="https://trybeem.com/security">
                  <span className="text-sm text-gray-600 text-left underline">
                    Learn more
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  </>
);

AppFlexyWrapper.Footer.displayName = 'AppFlexyWrapperFooter';
