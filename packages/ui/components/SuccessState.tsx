import { imageLoader } from 'common-utils/helpers';
import Image from 'next/image';
import React from 'react';

import { AppFlexyWrapper } from './AppFlexyWrapper';
import { Container } from './Container';
import { LottieAnimation } from './LottieAnimation';

export const SuccessState = ({
  title,
  subTitle,
  imageUrl,
  lottieData,
  children,
}: {
  title: string;
  subTitle?: string;
  imageUrl?: string;
  lottieData?: any;
  children?: React.ReactNode;
}) => {
  return (
    <AppFlexyWrapper>
      <AppFlexyWrapper.Body>
        <Container>
          {!!imageUrl && (
            <Image
              loader={imageLoader}
              src={imageUrl}
              alt="Success"
              width={250}
              height={250}
              className="mx-auto"
            />
          )}
          {!!lottieData && (
            <LottieAnimation
              animationData={lottieData}
              height={300}
              width={300}
              loop={false}
            />
          )}
          <div className="mx-auto mt-6 w-3/4 text-center">
            <h2 className="mt-2 text-2xl font-medium tracking-tight text-gray-900 sm:text-3xl">
              {title}
            </h2>
            <p className="mt-2 text-base text-gray-500">{subTitle}</p>
          </div>
        </Container>
      </AppFlexyWrapper.Body>
      <AppFlexyWrapper.Footer>{children}</AppFlexyWrapper.Footer>
    </AppFlexyWrapper>
  );
};
