export const CATEGORIES: string[] = [
  'All',
  'Pizza',
  'Sushi',
  'Drinks',
  'Noodles',
  'Salads',
];

export const DEFAULT_FETCH_LIMIT = 6;

const userLinks = {
  cart: 'cart',
  orderHistory: 'order-history',
  logout: 'logout',
};

export const navLinks = {
  unathorized: {
    cart: 'cart',
    signUp: 'sign-up',
    login: 'login',
  },
  user: userLinks,
  admin: {
    ...userLinks,
    dashboard: 'dashboard',
  },
};
