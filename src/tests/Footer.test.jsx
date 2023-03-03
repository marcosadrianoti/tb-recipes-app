import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

describe('Implemente o componente footer', () => {
  it('Verifica se o menu e os ícones são renderizados na tela', () => {
    render(<App />);
    const footerElement = screen.getByTestId('footer');
    const drinkIconElement = screen.getByTestId('drinks-bottom-btn');
    const mealIconElement = screen.getByTestId('meals-bottom-btn');

    expect(footerElement).toBeInTheDocument();
    expect(drinkIconElement).toBeInTheDocument();
    expect(mealIconElement).toBeInTheDocument();
    expect(drinkIconElement).toHaveAttribute('src', drinkIcon);
    expect(mealIconElement).toHaveAttribute('src', mealIcon);
  });
});
