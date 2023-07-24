import {
  ChartBarIcon,
  CursorArrowRaysIcon,
  QrCodeIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import { InViewPort } from 'ui';

const features = [
  {
    name: 'Unique QR',
    description:
      'Enabling easy access to your online store, contact details, promotions, and more. Boost customer engagement and streamline interactions',
    icon: QrCodeIcon,
  },
  {
    name: 'Analytics',
    description:
      'Utilize powerful AI algorithms to analyze data and gain valuable business insights. Optimize operations, make informed decisions, and stay ahead of the competition with data-driven strategies',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description:
      'Merchants can easily connect with their customers, sharing exclusive offers, addressing grievances, and fostering better relationships for enhanced customer satisfaction and loyalty',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Your data is safeguarded with state-of-the-art security measures, ensuring complete confidentiality. We never share your information with any third parties, guaranteeing utmost privacy',
    icon: ShieldCheckIcon,
  },
];

const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <InViewPort>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-gray-600">
              Benefits
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to ace the business
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quickly share QR code or WhatsApp message, win back your loyal
              customers.
            </p>
          </div>
        </InViewPort>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <InViewPort key={feature.name}>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              </InViewPort>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
