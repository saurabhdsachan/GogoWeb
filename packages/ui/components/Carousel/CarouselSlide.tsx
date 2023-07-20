import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';

const CarouselSlide = ({ testimonial }: { testimonial: any }) => (
  <div className="text-left shadow-md m-2 p-6 md:p-12 bg-white xl:mx-5 lg:mx-3 rounded-2xl">
    <div className="flex justify-start">
      {[...new Array(5)].map((_d, i) => (
        <StarIcon key={`star-${i}`} className="w-4 h-4 text-yellow-400" />
      ))}
    </div>
    <p className="text-base mt-2">Judith Black</p>
    <blockquote className="md:flex-grow md:flex md:flex-col">
      <h3 className="text-lg font-bold leading-6 text-gray-800 max-w-3xl my-4">
        {testimonial?.shortDescription}
      </h3>
      <p className="text-sm text-gray-600">{testimonial?.description}</p>
    </blockquote>
  </div>
);

export default CarouselSlide;
