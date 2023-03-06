import { useState } from 'react';

function SearcBar() {
  const [search, setSearch] = useState([]);

  return (
    <div className="search-bar">

      <label htmlFor="ingredient-search">
        Ingredient
        <input
          type="radio"
          name="ingredient-search"
          data-testid="ingredient-search-radio"
          className="ingredient-search"
          onClick={ ({ target }) => setSearch([...search, target.value]) }
          value="ingredient"
        />
      </label>

      <label htmlFor="name-search">
        Name
        <input
          type="radio"
          name="name-search"
          data-testid="name-search-radio"
          className="name-search"
          value="name"
          onClick={ ({ target }) => setSearch([...search, target.value]) }
        />
      </label>

      <label htmlFor="first-letter-search">
        First Letter
        <input
          type="radio"
          name="first-letter-search"
          data-testid="first-letter-search-radio"
          className="first-letter-search"
          value="first-letter"
          onClick={ ({ target }) => setSearch([...search, target.value]) }
        />
      </label>

      <button data-testid="exec-search-btn" type="button">Search</button>
    </div>
  );
}

export default SearcBar;
