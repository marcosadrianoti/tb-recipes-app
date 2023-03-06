const MEALS_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const DRINKS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const DETAILS_MEAL_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const DETAILS_DRINKS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const getMeals = async (search, qtd) => {
  const response = await fetch(`${MEALS_URL}${search}`);
  const data = await response.json();
  return data.meals.slice(0, qtd);
};

const getDrinks = async (search, qtd) => {
  const response = await fetch(`${DRINKS_URL}${search}`);
  const data = await response.json();
  return data.drinks.slice(0, qtd);
};

const getDetailsRecipe = async (id, typeRecipe) => {
  const response = await fetch(`${typeRecipe === 'meals'
    ? DETAILS_MEAL_URL
    : DETAILS_DRINKS_URL}${id}`);
  const data = await response.json();
  return data[typeRecipe][0];
};

export { getMeals, getDrinks, getDetailsRecipe };
