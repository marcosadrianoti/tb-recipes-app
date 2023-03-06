import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import { getMeals, getDrinks } from '../services/fetchApi';

function RecipesProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [search, setSearch] = useState('');

  const handleSearch = (newSearch) => {
    setSearch(newSearch);
  };

  const data = useMemo(
    () => ({ search,
      meals,
      drinks,
      handleSearch }),
    [meals, drinks, search],
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
