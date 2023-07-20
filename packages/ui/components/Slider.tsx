import { pushEvent } from 'common-utils/analytics';
import { classNames } from 'common-utils/helpers';
import { createElement, ReactNode, useRef } from 'react';

import CarouselNavButton from './Carousel/CarouselNavButton';

export function Slider({
  children,
  sliderClassName = '',
  buttonClassName = '',
  as = 'div',
  prevAnalyticsEventName,
  nextAnalyticsEventName,
}: {
  children: ReactNode;
  sliderClassName?: string;
  buttonClassName?: string;
  as?: string;
  prevAnalyticsEventName?: string;
  nextAnalyticsEventName?: string;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const next = () => {
    const c = divRef?.current?.children;
    const firstChildPosition = (c?.item(0) as HTMLElement).offsetLeft;

    if (divRef.current != undefined && c != undefined) {
      for (let i = 0; i < c.length; i++) {
        const el = c.item(i) as HTMLElement;

        if (
          el.offsetLeft - firstChildPosition - divRef.current.scrollLeft >
          0
        ) {
          divRef.current.scrollTo({
            left: el.offsetLeft - firstChildPosition,
            behavior: 'smooth',
          });
          break;
        }
      }
    }
  };
  const previous = () => {
    const c = divRef?.current?.children;
    const firstChildPosition = (c?.item(0) as HTMLElement).offsetLeft;

    if (divRef.current != undefined && c != undefined) {
      for (let i = c.length - 1; i >= 0; i--) {
        const el = c.item(i) as HTMLElement;

        if (
          el.offsetLeft - firstChildPosition - divRef.current.scrollLeft <
          0
        ) {
          divRef.current.scrollTo({
            left: el.offsetLeft - firstChildPosition,
            behavior: 'smooth',
          });
          break;
        }
      }
    }
  };

  return (
    <>
      {createElement(
        as,
        {
          ['ref']: divRef,
          ['className']: classNames(
            sliderClassName,
            'flex flex-nowrap overflow-x-scroll overflow-y-hidden no-scrollbar'
          ),
        },
        ...(children as ReactNode[])
      )}
      <div className={classNames('space-x-4', buttonClassName)}>
        <CarouselNavButton
          flow="left"
          onClick={() => {
            pushEvent({
              category: 'clicked',
              action: prevAnalyticsEventName,
              label: prevAnalyticsEventName,
            });
            previous();
          }}
        />
        <CarouselNavButton
          flow="right"
          onClick={() => {
            pushEvent({
              category: 'clicked',
              action: nextAnalyticsEventName,
              label: nextAnalyticsEventName,
            });
            next();
          }}
        />
      </div>
    </>
  );
}
