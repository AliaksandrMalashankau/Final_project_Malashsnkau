import './App.css';
import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import Contacts from './pages/Contacts';
import Catalog from './pages/Catalog/Catalog';
import Service from './pages/Service';
import Header from './components/Header/Header';
import Product from './pages/Product';
import Card from './pages/Card';
import CardFavorites from './pages/CardFavorites';


export const CardContext = createContext(null);
export const FavoriteContext = createContext(null);

function App() {
  const [card, setCard] = useState(new Map());
  const [fav, setFav] = useState(new Map());

  useEffect(() => {
    console.log(card);
  })

  return (
    <>
      <CardContext.Provider value={{ card, setCard }}>
        <FavoriteContext.Provider value={{fav, setFav}}>
        <Routes>
          <Route path='/' element={<Header/>}>
            <Route index element={<Catalog/>} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/сontacts' element={<Contacts />} />
            <Route path='/service' element={<Service />} />
            <Route path='/card' element={<Card />} />
            <Route path='/cardFavorites' element={<CardFavorites />} />
          </Route>
        </Routes>
        </FavoriteContext.Provider>
      </CardContext.Provider>
    </>
  );
}

export default App;
