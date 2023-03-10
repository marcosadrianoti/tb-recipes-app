const MEALS_CATEGORIES_URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const DRINKS_CATEGORIES_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const DETAILS_MEAL_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const DETAILS_DRINKS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
const INGREDIENT_MEALS_URL_FILTER = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const NAME_MEALS_URL_FILTER = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const FIRST_LETTER_MEALS_FILTER = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
const INGREDIENT_DRINKS_URL_FILTER = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
const NAME_DRINKS_URL_FILTER = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const FIRST_LETTER_DRINKS_FILTER = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

const getMeals = async (apiURL, qtd) => {
  const response = await fetch(apiURL);
  const data = await response.json();
  return data.meals?.slice(0, qtd);
};

const getDrinks = async (apiURL, qtd) => {
  const response = await fetch(apiURL);
  const data = await response.json();
  return data.drinks?.slice(0, qtd);
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

const fetchDetailsRecipe = async (id, typeRecipe) => {
  const response = await fetch(`${typeRecipe === 'meals'
    ? DETAILS_MEAL_URL
    : DETAILS_DRINKS_URL}${id}`);
  const data = await response.json();
  return data[typeRecipe];
};

const fetchFilter = async (url, textForSearch, type) => {
  const response = await fetch(`${url}${textForSearch}`);
  const data = await response.json();
  return data[type];
};

const fetchFilterForType = (isType, typeSearch, text) => {
  if (isType) {
    if (typeSearch === 'ingredient') {
      return fetchFilter(INGREDIENT_MEALS_URL_FILTER, text, 'meals');
    } if (typeSearch === 'name') {
      return fetchFilter(NAME_MEALS_URL_FILTER, text, 'meals');
    } if (typeSearch === 'firstletter') {
      return fetchFilter(FIRST_LETTER_MEALS_FILTER, text, 'meals');
    }
  } else {
    if (typeSearch === 'ingredient') {
      return fetchFilter(INGREDIENT_DRINKS_URL_FILTER, text, 'drinks');
    } if (typeSearch === 'name') {
      return fetchFilter(NAME_DRINKS_URL_FILTER, text, 'drinks');
    } if (typeSearch === 'firstletter') {
      return fetchFilter(FIRST_LETTER_DRINKS_FILTER, text, 'drinks');
    }
  }
};

export {
  getMeals,
  getDrinks,
  fetchDetailsRecipe,
  fetchFilterForType,
  getMealsCategories,
  getDrinksCategories,
};
