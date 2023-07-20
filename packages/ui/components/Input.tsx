import { classNames } from 'common-utils/helpers';
import React from 'react';

export const Input = ({
  name,
  id,
  value,
  placeholder,
  hideLabel = false,
  handleChange,
  onBlur,
  onFocus,
}: {
  name: string;
  id: string;
  value: string;
  placeholder: string;
  hideLabel?: boolean;
  handleChange?: (e: any) => void;
  onBlur?: any;
  onFocus?: any;
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className={classNames(hideLabel ? 'sr-only' : '')}
      />
      <input
        id={id}
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        onBlur={onBlur}
        onFocus={onFocus}
        className="block w-full rounded-md bg-transparent border border-gray-300 p-3 focus:border-gray-900 focus:ring-gray-300 focus:ring-offset-1 sm:text-sm"
      />
    </>
  );
};
