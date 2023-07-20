import { classNames } from 'common-utils/helpers';
import React from 'react';

export const BrandIcon = ({
  classes,
  color,
}: {
  classes: string;
  color: string;
}) => {
  return (
    <svg
      viewBox="0 0 56 53"
      width="37.5"
      height="39"
      fill="none"
      className={classNames('absolute z-0 animate-box-3', classes)}
    >
      <path
        className={color}
        d="M55.453 27.608a.682.682 0 0 0 .393-.233.67.67 0 0 0-.393-1.088c-4.978-.898-12.799-2.84-17.35-6.606C31.91 14.397 29.588 5.955 28.667.498a.698.698 0 0 0-1.335 0c-.92 5.457-3.243 13.952-9.435 19.183C13.386 23.5 5.55 25.441.547 26.287a.682.682 0 0 0-.393.234.669.669 0 0 0 0 .854c.1.12.238.203.392.233 4.979.885 12.813 2.828 17.35 6.606 6.207 5.285 8.516 13.212 9.45 18.245a.685.685 0 0 0 1.335 0c.92-5.073 3.243-13 9.436-18.245 4.537-3.778 12.358-5.72 17.336-6.606Z"
      />
    </svg>
  );
};
