import { FadeIn, FadeInStagger } from '@components/framerAnimation/fadeIn';
import { HighLevelPerformance } from '@components/graphs';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { AppFlexWrapper, Confirmation, Container, Layout } from 'ui';

const people = [
  {
    label: 'Add custom products',
    imageUrl:
      'https://res.cloudinary.com/dxc5ccfcg/image/upload/w_40/v1690000430/gogo-app/icons/boxadd_jsvlqd.png',
  },
  {
    label: 'Update product price',
    imageUrl:
      'https://res.cloudinary.com/dxc5ccfcg/image/upload/w_40/v1690000430/gogo-app/icons/moneychange_ozzuwr.png',
  },
  {
    label: 'Add delivery rules',
    imageUrl:
      'https://res.cloudinary.com/dxc5ccfcg/image/upload/w_40/v1690000434/gogo-app/icons/truck-fast_s6hnxl.png',
  },
];

export default function WebApp() {
  const [open, setOpen] = useState<boolean>(false);

  const onDismiss = () => setOpen(false);
  const onOpen = () => setOpen(true);

  return (
    <Layout>
      <Head>
        <title>Hypersonic growth for hyperlocal | Gogo</title>
      </Head>
      <Layout.Header announcement="A brand new experience awaits you. Learn more" />
      <Layout.BodyContent isError={false} isLoading={false}>
        <AppFlexWrapper flow="t">
          <AppFlexWrapper.Body>
            <Container>
              <FadeInStagger faster>
                <FadeIn>
                  <h2 className="text-lg">Analytics</h2>
                </FadeIn>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="bg-neutral-100 height-40 p-4 rounded-2xl">
                    <FadeIn>
                      <p className="text-sm mb-1 text-gray-500">
                        Total Customers
                      </p>
                      <p className="text-4xl font-bold">315</p>
                    </FadeIn>
                  </div>
                  <div className="bg-neutral-100 height-40 p-4 rounded-2xl">
                    <FadeIn>
                      <div className="flex items-center gap-x-1.5">
                        <div className="flex-none rounded-full bg-emerald-500/20 p-1 -mt-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <p className="text-sm mb-1 text-gray-500">
                          Active Orders
                        </p>
                      </div>
                      <p className="text-4xl font-bold">14</p>
                    </FadeIn>
                  </div>
                  <div className="bg-neutral-100 height-40 p-1 rounded-2xl col-span-2 relative">
                    <FadeIn>
                      <HighLevelPerformance />
                      <div className="absolute bottom-2 left-4">
                        <p className="text-sm mb-1 text-gray-500">
                          Yesterday&nbsp;s Sale
                        </p>
                        <p className="text-4xl font-bold">14</p>
                      </div>
                    </FadeIn>
                  </div>
                </div>
                <FadeIn>
                  <h2 className="text-lg mt-8">More Actions</h2>
                </FadeIn>
                <ul role="list" className="divide-y divide-gray-100">
                  {people?.map((person) => (
                    <FadeIn key={person.label}>
                      <Link href={'/delivery-rule'}>
                        <li className="flex justify-between gap-x-2 py-4">
                          <div className="flex gap-x-3">
                            <img
                              className="h-6 w-6 flex-none rounded-full bg-gray-50"
                              src={person.imageUrl}
                              alt=""
                            />
                            <div className="min-w-0 flex-auto">
                              <p className="leading-6 text-gray-900">
                                {person.label}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <ChevronRightIcon className="h-4 w-4" />
                          </div>
                        </li>
                      </Link>
                    </FadeIn>
                  ))}
                </ul>
              </FadeInStagger>
            </Container>
          </AppFlexWrapper.Body>
          <AppFlexWrapper.Footer>
            <Confirmation
              open={open}
              image="v1677843801/beem-web/logout.svg"
              title="Are you sure?"
              description="You will be logged out"
              onDismissLabel="No"
              onDismiss={onDismiss}
              onConfirmLabel="Yes"
              onConfirm={onDismiss}
            />
          </AppFlexWrapper.Footer>
        </AppFlexWrapper>
      </Layout.BodyContent>
    </Layout>
  );
}
