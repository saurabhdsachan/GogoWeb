import 'slick-carousel/slick/slick.css';

import React, { useRef } from 'react';
import Slider from 'react-slick';

import CarouselNavButton from './CarouselNavButton';
import CarouselSlide from './CarouselSlide';

const settings = {
  initialSlide: 1,
  lazyLoad: 'ondemand',
  dots: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  mobileFirst: true,
  accessibility: true,
  focusOnSelect: false,
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

interface CarouselSubComponents {
  Slide: React.FC;
}

export const Carousel: CarouselSubComponents & any = ({
  children,
  centerPadding,
  centerMode,
  customButtons,
}: {
  centerPadding: string;
  centerMode: boolean;
  customButtons: boolean;
  children: React.ReactNode;
}) => {
  const sliderRef = useRef<Slider>(null);

  const renderButtons = () => (
    <div className="grid gap-4 xl:gap-8 grid-cols-2 mx-auto w-full mt-8">
      <CarouselNavButton
        flow="left"
        onClick={() => sliderRef?.current?.slickPrev()}
      />
      <CarouselNavButton
        flow="right"
        onClick={() => sliderRef?.current?.slickNext()}
      />
    </div>
  );

  return (
    <>
      <div className="overflow-hidden">
        {/* @ts-ignore */}
        <Slider
          {...settings}
          arrows={!customButtons}
          centerMode={centerMode}
          centerPadding={centerPadding}
          ref={sliderRef}
        >
          {children}
        </Slider>
      </div>
      {customButtons && renderButtons()}
    </>
  );
};

Carousel.Slide = ({ testimonial }: { testimonial: any }) => (
  <CarouselSlide testimonial={testimonial} />
);

Carousel.Slide.displayName = 'CarouselSlide';
