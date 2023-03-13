import React from 'react';
import shareIcon from '../images/shareIcon.svg';
import Header from '../components/Header';

function DoneRecipes() {
  const receitasTeste = [
    {
      id: 1,
      type: 'meal',
      nationality: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'IMAGEM DA RECEITA',
      doneDate: '23/06/2020',
      tags: ['Pasta', 'Curry'],
    },
    {
      id: 2,
      type: 'meal',
      nationality: 'brazilian',
      category: 'dessert',
      alcoholicOrNot: '',
      name: 'brigadeirão',
      image: 'IMAGEM DA RECEITA',
      doneDate: '25/02/2023',
      tags: ['Pasta', 'Curry'],
    },
  ];

  const tags = receitasTeste.map((receita) => receita.tags);

  const images = [
    'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
  ];

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

      {receitasTeste.map((receita, index) => (
        <div key={ index }>
          <img
            src={ images[0] }
            alt="IMAGEM DA SOBREMESA"
            data-testid={ `${index}-horizontal-image` }
          />

          <p
            data-testid={ `${index}-horizontal-name` }
          >
            {`${receitasTeste[index].name}`}
          </p>

          <div data-testid={ `${index}-horizontal-top-text` }>
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              {`${receitasTeste[index].nationality} - ${receitasTeste[index].category}`}
            </p>
          </div>

          <p
            data-testid={ `${index}-horizontal-done-date` }
          >
            {`${receitasTeste[index].doneDate}`}
          </p>

          {tags.map((tag, i) => (
            <span
              key={ i }
              data-testid={ `${index}-${receitasTeste[index].tags[i]}-horizontal-tag` }
            >
              {receitasTeste[index].tags[i]}
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
