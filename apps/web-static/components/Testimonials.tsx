import { classNames } from 'common-utils/helpers';

const featuredTestimonial = {
  body: 'This app is a game-changer! It helped our business grow exponentially by attracting new customers effortlessly. Highly recommend to everyone!',
  author: {
    name: 'Pradeep Verma',
    city: 'Bijnaur - Uttar Pradesh',
    imageUrl:
      'https://res.cloudinary.com/dxc5ccfcg/image/upload/v1690111252/gogo-app/user-6_kt65ss.jpg',
    logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
  },
};
const testimonials = [
  [
    [
      {
        body: 'Gogo app brought our community together! Engaging features made us connect and interact like never before',
        author: {
          name: 'Lakhan Singh',
          city: 'Faizabad - Uttar Pradesh',
          imageUrl:
            'https://res.cloudinary.com/dxc5ccfcg/image/upload/v1690111253/gogo-app/user-1_cnupp4.jpg',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'Thanks to Gogo app, we won back our customers from new online players. Its seamless experience and perks reignited loyalty!',
        author: {
          name: 'Veerendra Babu',
          city: 'Pilibhit - Uttar Pradesh',
          imageUrl:
            'https://res.cloudinary.com/dxc5ccfcg/image/upload/v1690111252/gogo-app/user-2_oefk9s.jpg',
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: "Gogo app's business insights were a game-changer! Our efforts yielded multiplied results, thanks to data-driven strategies",
        author: {
          name: 'Naik Kumar',
          city: 'Pune - Maharashtra',
          imageUrl:
            'https://res.cloudinary.com/dxc5ccfcg/image/upload/v1690111252/gogo-app/user-4_vvrdnz.jpg',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'User interface is simple and intuitive, providing a seamless experience. Navigating through features is a breeze! Impressed!',
        author: {
          name: 'Shivpal Kishore',
          city: 'Indore - Madhya Pradesh',
          imageUrl:
            'https://res.cloudinary.com/dxc5ccfcg/image/upload/v1690111252/gogo-app/user-5_y7w5f2.jpg',
        },
      },
      // More testimonials...
    ],
  ],
];

const Testimonials = () => {
  return (
    <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-gray-600">
            Our partners
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We are thrilled & motivated when we hear such kind words
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
              <img
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                src={featuredTestimonial.author.imageUrl}
                alt=""
              />
              <div className="flex-auto">
                <div className="font-semibold">
                  {featuredTestimonial.author.name}
                </div>
                <div className="text-gray-600">{`@${featuredTestimonial.author.city}`}</div>
              </div>
              <img
                className="h-10 w-auto flex-none"
                src={featuredTestimonial.author.logoUrl}
                alt=""
              />
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8',
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.city}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img
                          className="h-10 w-10 rounded-full bg-gray-50"
                          src={testimonial.author.imageUrl}
                          alt=""
                        />
                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                          <div className="text-gray-600">{`@${testimonial.author.city}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
