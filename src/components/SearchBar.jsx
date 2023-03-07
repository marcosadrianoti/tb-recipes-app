import { useState } from 'react';
import { fetchFilterRecipe } from '../services/fetchApi';

function SearcBar() {
  const [typeSearch, setTypeSearch] = useState('');
  const [textForSearch, setTextForSearch] = useState('');

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
          value="first-letter"
          onClick={ ({ target }) => setTypeSearch(target.value) }
        />
      </label>

      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={ () => fetchFilterRecipe(typeSearch, textForSearch) }
      >
        Search

      </button>
    </div>
  );
}

export default SearcBar;
