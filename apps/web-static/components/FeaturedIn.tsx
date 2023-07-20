import { imageLoader } from 'common-utils/helpers';
import Image from 'next/image';
import React from 'react';
import { Tween } from 'react-gsap';

const FeaturedIn = () => {
  return (
    <div className="my-10 md:my-20 text-center">
      <small className="text-center text-lg inline-block mb-10 md:text-sm">
        Featured In
      </small>
      <div className="mx-auto max-w-2xl p-2 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:ml-8">
          <Tween
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            stagger={0.5}
            duration={1}
          >
            <div className="col-span-1 mx-auto max-w-[14rem] md:max-w-none">
              <Image
                loader={imageLoader}
                src="v1673415786/beem-web/techcrunch.png"
                alt="Tech crunch"
                width={512}
                height={75}
                className="object-contain"
              />
            </div>
            <div className="col-span-1 mx-auto max-w-[14rem] md:max-w-none">
              <Image
                loader={imageLoader}
                src="v1673415786/beem-web/marketwatch.png"
                alt="Market watch"
                width={512}
                height={75}
                className="object-contain"
              />
            </div>
            <div className="col-span-1 mx-auto max-w-[14rem] md:max-w-none hidden md:block">
              <Image
                loader={imageLoader}
                src="v1673416288/beem-web/yahoo.png"
                alt="Yahoo"
                width={512}
                height={75}
                className="object-contain"
              />
            </div>
            <div className="col-span-1 mx-auto max-w-[9rem] block md:hidden">
              <Image
                loader={imageLoader}
                src="v1673938376/beem-web/yahoo-small.png"
                alt="Yahoo"
                width={281}
                height={75}
                className="object-contain"
              />
            </div>
          </Tween>
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;
