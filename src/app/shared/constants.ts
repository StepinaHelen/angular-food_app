import { IIcons } from './types/types';

export const CATEGORIES: string[] = [
  'All',
  'Pizza',
  'Sushi',
  'Drinks',
  'Noodles',
  'Salads',
];

export const icons: IIcons[] = [
  { name: 'facebook', src: '../assets/icons/icon-facebook.svg' },
  { name: 'github', src: '../assets/icons/icon-github.svg' },
  { name: 'google', src: '../assets/icons/icon-google.svg' },
];

export const DEFAULT_FETCH_LIMIT = 6;

const userLinks = {
  orderHistory: 'order-history',
  logout: 'logout',
  profile: 'profile',
};

export const navLinks = {
  cart: 'cart',
  unathorized: {
    signUp: 'sign-up',
    login: 'login',
  },
  user: userLinks,
  admin: {
    ...userLinks,
    dashboard: 'dashboard',
  },
};
