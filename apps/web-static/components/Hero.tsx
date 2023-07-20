import { imageLoader } from 'common-utils/helpers';
import Image from 'next/image';
import React from 'react';
import { Container, SecondaryFont } from 'ui';

const Hero = () => {
  return (
    <div className="bg-black">
      <Container>
        <div className="text-center py-20">
          <h1
            className={`text-6xl font-medium text-gray-200 max-w-3xl mx-auto ${SecondaryFont.variable} font-serif`}
          >
            Make smart designs quickly
          </h1>
          <h2 className="text-lg text-gray-400 mt-6 max-w-2xl mx-auto">
            Transform your customer experience with Karigar's AI-powered
            solutions for acquisition and fulfillment.
          </h2>
        </div>
        <Image
          loader={imageLoader}
          src="v1681536534/karigar/hero_uerqt0.png"
          alt="hero"
          width={1000}
          height={600}
          className="mx-auto"
        />
      </Container>
    </div>
  );
};

export default Hero;
