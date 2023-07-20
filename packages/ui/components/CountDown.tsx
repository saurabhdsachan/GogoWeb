import React from 'react';

export const CountDown = ({
  days = 3,
  hours = 54,
  minutes = 36,
}: {
  days?: number;
  hours?: number;
  minutes?: number;
}) => {
  return (
    <div className="flex flex-row space-x-1">
      <div className="rounded-md bg-yellow-100 p-2 text-center">
        <p className="text-xl font-semibold">0{days}</p>
        <p className="text-xs text-slate-500">DAYS</p>
      </div>
      <div className="rounded-md bg-yellow-100 p-2 text-center">
        <p className="text-xl font-semibold">{hours}</p>
        <p className="text-xs text-slate-500">HRS</p>
      </div>
      <div className="rounded-md bg-yellow-100 p-2 text-center">
        <p className="text-xl font-semibold">{minutes}</p>
        <p className="text-xs text-slate-500">MINS</p>
      </div>
    </div>
  );
};
