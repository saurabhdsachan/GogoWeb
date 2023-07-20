import React from 'react';

export const Checkbox = ({
  id,
  description,
  onChange,
}: {
  id: string;
  description: string;
  onChange: () => void;
}) => {
  return (
    <input
      id={id}
      aria-describedby={description}
      name={id}
      onChange={onChange}
      type="checkbox"
      className="h-6 w-6 rounded border-gray-600 text-gray-800 focus:ring-1 focus:ring-gray-900 focus:ring-offset-1 md:h-5 md:w-5"
    />
  );
};
