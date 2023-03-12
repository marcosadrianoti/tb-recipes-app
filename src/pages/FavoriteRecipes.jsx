import React, { useState } from 'react';
import Footer from '../components/Footer';
import FavoriteCard from '../components/FavoriteCard';
import bHeartIcon from '../images/blackHeartIcon.svg';

export default function FavoriteRecipes() {
  const heartIcon = bHeartIcon;
  const storedFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [filteredRecipes, setFilteredRecipes] = useState(storedFavoriteRecipes);
  const filterMeals = () => {
    const newRecipes = storedFavoriteRecipes.filter((recipe) => recipe.type === 'meal');
    setFilteredRecipes(newRecipes);
  };
  const filterDrinks = () => {
    const newRecipes = storedFavoriteRecipes.filter((recipe) => recipe.type === 'drink');
    setFilteredRecipes(newRecipes);
  };
  const removeFavorite = (id) => {
    const newFavorites = filteredRecipes.filter((receipe) => receipe.id !== id);
    setFilteredRecipes(newFavorites);
    localStorage.removeItem('favoriteRecipes');
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
  };

  return (
    <>
      <Footer />
      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => setFilteredRecipes(storedFavoriteRecipes) }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-meal-btn"
          onClick={ filterMeals }
        >
          Meals
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ filterDrinks }
        >
          Drinks
        </button>
      </div>
      {
        filteredRecipes?.map((recipe, index) => {
          const {
            tags,
            category,
            name, image, doneDate, nationality, alcoholicOrNot, id, type } = recipe;
          return (
            <FavoriteCard
              key={ name }
              tags={ tags }
              category={ category }
              name={ name }
              image={ image }
              doneDate={ doneDate }
              index={ index }
              nationality={ nationality }
              alcoholicOrNot={ alcoholicOrNot }
              id={ id }
              type={ type }
              heartIcon={ heartIcon }
              removeFavorite={ removeFavorite }
            />
          );
        })
      }
    </>
  );
}
