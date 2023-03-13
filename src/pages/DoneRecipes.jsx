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
    <>
      <Header />
      <button
        type="button"
        data-testid="filter-by-all-btn"
      >
        All
      </button>

      <button
        type="button"
        data-testid="filter-by-meal-btn"
      >
        Meals
      </button>

      <button
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>

      {recipes.map((recipe, index) => (
        <div key={ index }>
          <img
            src={ recipe.image }
            alt="IMAGEM DA SOBREMESA"
            style={ { width: '200px' } }
            data-testid={ `${index}-horizontal-image` }
          />

          <p
            data-testid={ `${index}-horizontal-name` }
          >
            {`${recipe.name}`}
          </p>

          <div data-testid={ `${index}-horizontal-top-text` }>
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              {`${recipe.nationality} - ${recipe.category}`}
            </p>
          </div>

          <p
            data-testid={ `${index}-horizontal-done-date` }
          >
            {`${recipe.doneDate}`}
          </p>

          {recipe.tags.map((tag, i) => (
            <span
              key={ i }
              data-testid={ `${index}-${recipe.tags[i]}-horizontal-tag` }
            >
              {recipe.tags[i]}
            </span>
          ))}

          <button
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
            src={ shareIcon }
          >
            <img src={ shareIcon } alt="Imagem do botão Compartilhar" />
          </button>
        </div>
      ))}
    </>
  );
}

export default DoneRecipes;
