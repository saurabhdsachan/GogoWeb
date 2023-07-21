export type IFunc = () => void;
export type IChildren =
  | string
  | number
  | JSX.Element
  | JSX.Element[]
  | React.ReactNode;

export enum Sizes {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = 'xxl',
}

export enum AlertTypes {
  SUCCESS = 'success',
  INFO = 'info',
  ERROR = 'error',
}

export enum CookieName {
  TOKEN = 'token',
  DEVICE_ID = 'device-id',
  ROOT_URL = 'root-url',
}
