import React, { useEffect, useState, useCallback } from 'react';
import shareIcon from '../images/shareIcon.svg';
import Header from '../components/Header';

function DoneRecipes() {
  const [recipes, setRecipes] = useState([]);

  const doneRecipe = useCallback(() => {
    const getDoneRecipes = localStorage.getItem('doneRecipes');
    if (getDoneRecipes) {
      const arrDoneRecipes = JSON.parse(getDoneRecipes);
      setRecipes(arrDoneRecipes);
    }
  }, []);

  useEffect(() => {
    doneRecipe();
  }, [doneRecipe]);

  return (
    <div className="done-recipes-container">
      <Header />
      <div className="filter-done-buttons">
        <button
          type="button"
          data-testid="filter-by-all-btn"
          className="filter-by-all-btn"
        >
          <img src="https://imgur.com/9YvHMla.png" alt="all" />
        </button>

        <button
          type="button"
          data-testid="filter-by-meal-btn"
          className="filter-by-meal-btn"
        >
          <img src="https://imgur.com/DevsQIv.png" alt="meals" />
        </button>

        <button
          type="button"
          data-testid="filter-by-drink-btn"
          className="filter-by-drink-btn"
        >
          <img src="https://imgur.com/wzkqMLT.png" alt="drink" />
        </button>
      </div>

      {recipes.map((recipe, index) => (
        <div key={ index } className="recipes-done-container">
          <img
            src={ recipe.image }
            alt="IMAGEM DA SOBREMESA"
            style={ { width: '200px' } }
            data-testid={ `${index}-horizontal-image` }
          />

          <p
            data-testid={ `${index}-horizontal-name` }
            className="recipe-name"
          >
            {`${recipe.name}`}
          </p>

          <p
            data-testid={ `${index}-horizontal-top-text` }
          >
            {`${recipe.nationality} - ${recipe.category} - ${recipe.alcoholicOrNot}`}
          </p>

          <p
            data-testid={ `${index}-horizontal-done-date` }
          >
            {`${recipe.doneDate}`}
          </p>

          {recipe.tags.map((tag, ind) => (
            <span
              key={ ind }
              data-testid={ `${index}-${recipe.tags[ind]}-horizontal-tag` }
            >
              {recipe.tags[ind]}
            </span>
          ))}

          <button
            type="button"
            className="share-btn"
            // src={ shareIcon }
          >
            <img
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareIcon }
              alt="Imagem do botão Compartilhar"
            />
          </button>
        </div>
      ))}
    </div>
  );
}

export default DoneRecipes;
