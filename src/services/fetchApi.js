const MEALS_CATEGORIES_URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const DRINKS_CATEGORIES_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

const getMeals = async (apiURL, qtd) => {
  const response = await fetch(apiURL);
  const data = await response.json();
  return data.meals.slice(0, qtd);
};

const getDrinks = async (apiURL, qtd) => {
  const response = await fetch(apiURL);
  const data = await response.json();
  return data.drinks.slice(0, qtd);
};

const getMealsCategories = async () => {
  const response = await fetch(MEALS_CATEGORIES_URL);
  const data = await response.json();
  return data.meals;
};

const getDrinksCategories = async () => {
  const response = await fetch(DRINKS_CATEGORIES_URL);
  const data = await response.json();
  return data.drinks;
};

export { getMeals, getDrinks, getMealsCategories, getDrinksCategories };
