import { useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { fetchFilterForType } from '../services/fetchApi';
import RecipesContext from '../context/RecipesContext';

function SearcBar() {
  const [typeSearch, setTypeSearch] = useState('');
  const [textForSearch, setTextForSearch] = useState('');

  const { pathname } = useLocation();
  const history = useHistory();
  const { setFilterRecipes } = useContext(RecipesContext);

  const handleClick = async (isType) => {
    try {
      if (typeSearch === 'firstletter' && textForSearch.length > 1) {
        throw new Error('Your search must have only 1 (one) character');
      } else {
        const data = await fetchFilterForType(isType, typeSearch, textForSearch);
        if (data === null) {
          throw new Error('Sorry, we haven\'t found any recipes for these filters.');
        }
        setFilterRecipes(data);
        if (isType && data.length === 1) {
          history.push(`/meals/${data[0].idMeal}`);
        } if (!isType && data.length === 1) {
          history.push(`/drinks/${data[0].idDrink}`);
        }
      }
    } catch (erro) {
      global.alert(erro.message);
    }
  };

  return (
    <div className="search-bar">

      <label htmlFor="input-email">
        <input
          data-testid="search-input"
          type="text"
          name="search-input"
          className="search-input"
          value={ textForSearch }
          onChange={ ({ target: { value } }) => setTextForSearch(value) }
        />
      </label>

      <label htmlFor="ingredient-search">
        Ingredient
        <input
          type="radio"
          name="search"
          data-testid="ingredient-search-radio"
          className="ingredient-search"
          onClick={ ({ target }) => setTypeSearch(target.value) }
          value="ingredient"
        />
      </label>

      <label htmlFor="name-search">
        Name
        <input
          type="radio"
          name="search"
          data-testid="name-search-radio"
          className="name-search"
          value="name"
          onClick={ ({ target }) => setTypeSearch(target.value) }
        />
      </label>

      <label htmlFor="first-letter-search">
        First Letter
        <input
          type="radio"
          name="search"
          data-testid="first-letter-search-radio"
          className="first-letter-search"
          value="firstletter"
          onClick={ ({ target }) => setTypeSearch(target.value) }
        />
      </label>

      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={ () => handleClick(pathname.includes('meals')) }
      >
        Search

      </button>
    </div>
  );
}

export default SearcBar;
