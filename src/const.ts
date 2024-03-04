export const Settings = {
  CardsCount: 6,
} as const;

export const Path = {
  Main: '/',
  Login: '/Login',
  Favorites: '/Favorites',
  Offer: '/offer/:id',
  NotFound: '*',
} as const;
