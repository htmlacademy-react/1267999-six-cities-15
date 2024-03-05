export const Settings = {
  CardsCount: 6,
} as const;

export const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offers: '/offer/:id',
  NotFound: '*',
} as const;

export const LayoutClassName = {
  Main: 'page--gray page--main',
  Login: 'page--gray page--login',
  Offer: '',
  Favorites: '',
} as const;

export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;
