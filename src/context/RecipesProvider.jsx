import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import {
  getMeals,
  getDrinks,
  getMealsCategories,
  getDrinksCategories,
} from '../services/fetchApi';

function RecipesProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [search, setSearch] = useState('');
  const [mealsCategories, setMealsCategories] = useState([]);
  const [drinksCategories, setDrinksCategories] = useState([]);

  const [apiURLMeals, setApiURLMeals] = useState('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const [apiURLDrinks, setApiURLDrinks] = useState('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const [detailsRecipe, setDetailsRecipe] = useState([]);
  const [filterRecipes, setFilterRecipes] = useState([]);

  const handleSearch = (newSearch) => {
    setSearch(newSearch);
  };

  const data = useMemo(() => ({
    apiURLMeals,
    apiURLDrinks,
    search,
    meals,
    drinks,
    mealsCategories,
    drinksCategories,
    filterRecipes,
    detailsRecipe,
    setApiURLMeals,
    setDetailsRecipe,
    setApiURLDrinks,
    setFilterRecipes,
    handleSearch }), [meals, drinks, search, mealsCategories,
    drinksCategories, apiURLMeals, apiURLDrinks, detailsRecipe, filterRecipes]);

  useEffect(() => {
    getMeals(apiURLMeals).then((response) => setMeals(response));
    getDrinks(apiURLDrinks).then((response) => setDrinks(response));
    getMealsCategories().then((response) => setMealsCategories(response));
    getDrinksCategories().then((response) => setDrinksCategories(response));
  }, [apiURLMeals, apiURLDrinks]);

  return (
    <RecipesContext.Provider value={ data }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
