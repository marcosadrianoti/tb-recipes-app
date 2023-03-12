import React from 'react';
import { Link } from 'react-router-dom';
import CopyBtn from './CopyBtn';

export default function FavoriteRecipeCard(favoriteRecipes) {
  const { name, category, doneDate, index,
    heartIcon,
    removeFavorite,
    image, nationality, alcoholicOrNot, id, type } = favoriteRecipes;
  const pathname = (type === 'meal' ? 'meals' : 'drinks');

  return (
    <div>
      <Link to={ `${pathname}/${id}` }>
        <img
          src={ image }
          alt=""
          data-testid={ `${index}-horizontal-image` }
          style={ { height: '50px', width: '50px' } }
        />
      </Link>
      {
        nationality
          ? (
            <p data-testid={ `${index}-horizontal-top-text` }>
              { `${nationality} - ${category}` }
            </p>)
          : (
            <p data-testid={ `${index}-horizontal-top-text` }>
              { category }
            </p>
          )
      }
      {
        alcoholicOrNot === 'Alcoholic'
        && (
          <p data-testid={ `${index}-horizontal-top-text` }>
            { alcoholicOrNot }
          </p>)
      }
      <Link to={ `${pathname}/${id}` }>
        <p data-testid={ `${index}-horizontal-name` }>
          { name }
        </p>
      </Link>
      <p data-testid={ `${index}-horizontal-done-date` }>
        { doneDate }
      </p>

      <div>
        <CopyBtn
          id={ id }
          type={ type }
          dataTest={ `${index}-horizontal-share-btn` }
        />
        <button
          type="button"
          src={ heartIcon }
          data-testid={ `${index}-horizontal-favorite-btn` }
          onClick={ () => removeFavorite(id) }
        >
          <img src={ heartIcon } alt="Favorite" />
        </button>
      </div>
    </div>
  );
}
