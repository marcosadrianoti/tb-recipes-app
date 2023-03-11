import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Testes do componente RecipeInProgress', () => {
  it('Imagem, título e categoria de uma receita de comida são renderizados', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/meals');

    const firstRecipeCard = await screen.findByTestId('0-recipe-card');
    expect(firstRecipeCard).toBeInTheDocument();

    act(() => {
      userEvent.click(firstRecipeCard);
    });

    const startRecipeBtn = await screen.findByTestId('start-recipe-btn');
    expect(startRecipeBtn).toBeInTheDocument();

    act(() => {
      userEvent.click(startRecipeBtn);
    });

    const recipePhoto = await screen.findByTestId('recipe-photo');
    expect(recipePhoto).toBeInTheDocument();

    const recipeTitle = await screen.findByTestId('recipe-title');
    expect(recipeTitle).toBeInTheDocument();

    const recipeCategory = await screen.findByTestId('recipe-category');
    expect(recipeCategory).toBeInTheDocument();
  });
});
