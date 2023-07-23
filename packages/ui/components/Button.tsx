import { classNames } from 'common-utils/helpers';
import { Sizes } from 'common-utils/type';
import React from 'react';

import lottieData from '../Lotties/button-loading.json';
import { LottieAnimation } from './LottieAnimation';

export const Button = ({
  disabled,
  full,
  label,
  ariaLabel,
  type = 'button',
  onClick,
  isLoading,
  leftIcon,
  rightIcon,
  variant,
  noShadow,
  size = Sizes.SM,
}: {
  disabled?: boolean;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  full?: boolean;
  label?: React.ReactNode | any;
  ariaLabel?: string;
  leftIcon?: React.ReactNode | any;
  rightIcon?: React.ReactNode | any;
  variant: 'ghost' | 'transparent' | 'light' | 'dark';
  noShadow?: boolean;
  onClick?: () => void;
  size?: Sizes;
  border?: boolean;
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={classNames(
        'cursor-pointer btn relative whitespace-nowrap items-center justify-center rounded-2xl text-center font-medium transition-transform transition-all transition-opacity focus:outline-none focus:ring-1 focus:ring-offset-1 active:translate-y-0.5 active:opacity-70',
        disabled ? 'pointer-events-none opacity-50' : '',
        full ? 'flex w-full' : 'inline-flex',
        size === Sizes.XS ? 'px-2 py-1 text-xs' : '',
        size === Sizes.SM ? 'px-6 py-3 text-sm' : '',
        size === Sizes.MD ? 'px-8 py-3 text-md' : '',
        size === Sizes.LG ? 'px-6 py-3 text-lg' : '',
        size === Sizes.XL ? 'px-16 py-4 text-xl' : '',
        variant === 'ghost'
          ? 'border border-transparent bg-transparent text-slate-200 focus:ring-slate-500 active:border-slate-500'
          : '',
        variant === 'transparent'
          ? 'border border-gray-400 bg-transparent text-slate-900 focus:ring-slate-500 active:bg-slate-900 active:text-slate-100 active:shadow-lg'
          : '',
        variant === 'light'
          ? 'border border-lime-400 bg-lime-400 text-white focus:border-slate-500 focus:ring-slate-500 active:bg-slate-900 active:text-slate-100 active:shadow-lg'
          : '',
        variant === 'dark'
          ? 'border border-black bg-black text-white focus:ring-slate-500'
          : '',
        !noShadow ? 'shadow-sm' : '',
        isLoading ? 'pointer-events-none cursor-wait' : 'cursor-default',
      )}
    >
      {!isLoading && leftIcon}
      {label ? (
        <span className={classNames(isLoading ? 'opacity-0' : 'opacity-1')}>
          {label}
        </span>
      ) : (
        <span className="sr-only">{ariaLabel}</span>
      )}
      {!isLoading && rightIcon}
      {isLoading && (
        <span className="absolute inset-0 rounded-full bg-gray-900">
          <LottieAnimation animationData={lottieData} height={52} width={52} />
        </span>
      )}
    </button>
  );
};
