import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import renderWithRouter from '../helpers/renderWithRouter';
import Recipes from '../pages/Recipes';

describe('Implemente o componente footer', () => {
  it('Verifica se o menu e os ícones são renderizados na tela', () => {
    render(<Recipes />);
    const footerElement = screen.getByTestId('footer');
    const drinkIconElement = screen.getByTestId('drinks-bottom-btn');
    const mealIconElement = screen.getByTestId('meals-bottom-btn');

    expect(footerElement).toBeInTheDocument();
    expect(drinkIconElement).toBeInTheDocument();
    expect(mealIconElement).toBeInTheDocument();
    expect(drinkIconElement).toHaveAttribute('src', drinkIcon);
    expect(mealIconElement).toHaveAttribute('src', mealIcon);
  });

  it('Ao clicar no ícone de bedidas é redirecionado para a page /drinks', () => {
    const { history } = renderWithRouter(<Recipes />);
    const drinkIconElement = screen.getByTestId('drinks-bottom-btn');

    userEvent.click(drinkIconElement);

    const { pathname } = history.location;

    expect(pathname).toBe('/drinks');
  });

  it('Ao clicar no ícone de comida é redirecionado para a page /meals', () => {
    const { history } = renderWithRouter(<Recipes />);
    const mealIconElement = screen.getByTestId('meals-bottom-btn');

    userEvent.click(mealIconElement);

    const { pathname } = history.location;

    expect(pathname).toBe('/meals');
  });
});
