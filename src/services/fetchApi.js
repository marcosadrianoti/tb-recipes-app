const MEALS_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const DRINKS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

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

export { getMeals, getDrinks };
