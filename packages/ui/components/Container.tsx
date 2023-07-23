import { IChildren } from 'common-utils/type';
import React from 'react';

export const Container = ({ children }: { children: IChildren }) => {
  return <div className="container px-4 mx-auto max-w-7xl">{children}</div>;
};
