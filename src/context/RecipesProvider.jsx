import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import { getMeals, getDrinks, getDetailsRecipe } from '../services/fetchApi';

function RecipesProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [search, setSearch] = useState('');
  const [detailsRecipe, setDetailsRecipe] = useState('');

  const handleSearch = (newSearch) => {
    setSearch(newSearch);
  };

  const fetchDetails = async (clickedRecipe) => {
    const id = 'idMeal' in clickedRecipe ? clickedRecipe.idMeal : clickedRecipe.idDrink;
    const typeRecipe = 'idMeal' in clickedRecipe ? 'meals' : 'drinks';

    setDetailsRecipe(await getDetailsRecipe(id, typeRecipe));
  };

  const data = useMemo(
    () => ({ search,
      meals,
      drinks,
      detailsRecipe,
      handleSearch,
      fetchDetails }),
    [meals, drinks, detailsRecipe, search],
  );

  useEffect(() => {
    getMeals(search).then((response) => setMeals(response));
    getDrinks(search).then((response) => setDrinks(response));
  }, [search]);

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
