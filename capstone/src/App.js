import React from 'react';
import './App.css';
import Header from './Header';
import Cards from './Cards';
import Palettes from './components/Palettes';
import Button from './Button';
import CardTextContainer from './CardTextContainer'

const App = () => {
  return (
    <><Header />
    <Palettes />
    <Button />
    <Cards />
    <CardTextContainer />
    <Cards />
    </>
  )
};

export default App;
