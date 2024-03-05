import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from 'app';
import { Settings } from './const/const.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App cardsCount={Settings.CardsCount} />
    </HelmetProvider>
  </React.StrictMode>,
);
