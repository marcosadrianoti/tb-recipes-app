import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipesContext from '../context/RecipesContext';
import Recipes from './Recipes';

function Meals() {
  const { meals } = useContext(RecipesContext);
  const count = 12;
  return (
    <>
      <Header />
      <Recipes recipes={ meals.slice(0, count) } />
      <Footer />
    </>
  );
}

export default Meals;
