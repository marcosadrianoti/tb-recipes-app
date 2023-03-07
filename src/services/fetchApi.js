const MEALS_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const DRINKS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const DETAILS_MEAL_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const DETAILS_DRINKS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
const INGREDIENT_URL_FILTER = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const NAME_URL_FILTER = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const FIRST_LETTER_FILTER = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

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

const fetchFilterRecipe = async (filter, textForSearch) => {
  try {
    if (filter === 'ingredient') {
      const response = await fetch(`${INGREDIENT_URL_FILTER}${textForSearch}`);
      const data = await response.json();
      return data;
    } if (filter === 'name') {
      const response = await fetch(`${NAME_URL_FILTER}${textForSearch}`);
      const data = await response.json();
      return data;
    } if (filter === 'first-letter') {
      if (textForSearch.length > 1) {
        throw new Error('Your search must have only 1 (one) character');
      }
      const response = await fetch(`${FIRST_LETTER_FILTER}${textForSearch}`);
      const data = await response.json();
      return data;
    }
  } catch (error) {
    global.alert(error.message);
  }
};

export { getMeals, getDrinks, getDetailsRecipe, fetchFilterRecipe };
