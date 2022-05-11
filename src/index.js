import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import Pagination from './components/Pagination/Pagination';
import Pokedex from './components/Pokedex';
import { PokeProvider } from './providers/pokemon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PokeProvider>
      <Header />
      <Pagination />
      <Pokedex />
      <Pagination />
    </PokeProvider>
  </React.StrictMode>
);
