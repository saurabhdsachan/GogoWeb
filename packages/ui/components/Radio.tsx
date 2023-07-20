import React from 'react';

export const Radio = ({
  id,
  name,
  onChange,
  checked = false,
  defaultChecked,
  cb,
}: {
  checked?: boolean;
  id: string;
  name: string;
  onChange?: () => void;
  cb?: () => void;
  defaultChecked?: boolean;
}) => {
  return (
    <input
      checked={checked}
      id={id}
      name={name}
      type="radio"
      defaultChecked={defaultChecked}
      className="h-6 w-6 border-gray-600 text-gray-800 focus:ring-1 focus:ring-gray-900 focus:ring-offset-1 md:h-5 md:w-5"
      onChange={onChange}
    />
  );
};
