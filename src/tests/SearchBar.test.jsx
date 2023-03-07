import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';

const INGREDIENT_RADIO = 'ingredient-search-radio';
const SEARCH_BTN_SUBMIT = 'exec-search-btn';

describe('Teste do componente SearchBar', () => {
  it('Verifica se os elementos são renderizados', () => {
    renderWithRouter(<App />, '/meals');
    const searchBtn = screen.getByRole('button', { name: /search-top-btn/i });
    expect(searchBtn).toBeInTheDocument();

    userEvent.click(searchBtn);
    const searchInput = screen.getByTestId('search-input');
    const inputRadioIngredient = screen.getByTestId(INGREDIENT_RADIO);
    const inputRadioName = screen.getByTestId('name-search-radio');
    const inputRadioFirstLetter = screen.getByTestId('first-letter-search-radio');
    const submitSearchBtn = screen.getByTestId(SEARCH_BTN_SUBMIT);
    expect(searchInput).toBeInTheDocument();
    expect(inputRadioIngredient).toBeInTheDocument();
    expect(inputRadioName).toBeInTheDocument();
    expect(inputRadioFirstLetter).toBeInTheDocument();
    expect(submitSearchBtn).toBeInTheDocument();
  });
  it('Verifica se ao selecionar o radio ingredient a funcão é chamada', () => {
    const setTypeSearchSpy = jest.spyOn(React, 'useState');
    const { history } = renderWithRouter(<App />, '/meals');

    const searchBtn = screen.getByRole('button', { name: /search-top-btn/i });
    userEvent.click(searchBtn);
    const inputRadioIngredient = screen.getByTestId(INGREDIENT_RADIO);

    act(() => {
      userEvent.click(inputRadioIngredient);
    });

    expect(setTypeSearchSpy).toHaveBeenCalled();
    const submitSearchBtn = screen.getByTestId(SEARCH_BTN_SUBMIT);
    userEvent.click(submitSearchBtn);
    expect(history.location.pathname).toBe('/meals');
    setTypeSearchSpy.mockRestore();
  });
  it('Verifica se ao selecionar o radio name a funcão é chamada', () => {
    const setTypeSearchSpy = jest.spyOn(React, 'useState');
    renderWithRouter(<App />, '/meals');

    const searchBtn = screen.getByRole('button', { name: /search-top-btn/i });
    userEvent.click(searchBtn);
    const inputRadioName = screen.getByTestId('name-search-radio');

    act(() => {
      userEvent.click(inputRadioName);
    });

    expect(setTypeSearchSpy).toHaveBeenCalled();
    setTypeSearchSpy.mockRestore();
  });
  it('Verifica se ao selecionar o radio first-letter a funcão é chamada', () => {
    const setTypeSearchSpy = jest.spyOn(React, 'useState');
    renderWithRouter(<App />, '/meals');

    const searchBtn = screen.getByRole('button', { name: /search-top-btn/i });
    userEvent.click(searchBtn);
    const inputRadioFirstLetter = screen.getByTestId('first-letter-search-radio');

    act(() => {
      userEvent.click(inputRadioFirstLetter);
    });

    expect(setTypeSearchSpy).toHaveBeenCalled();
    setTypeSearchSpy.mockRestore();
  });
  it('Verifica se ao clickar no botão submit permanece na rota drink', () => {
    const setTypeSearchSpy = jest.spyOn(React, 'useState');
    const { history } = renderWithRouter(<App />, '/drinks');

    const searchBtn = screen.getByRole('button', { name: /search-top-btn/i });
    userEvent.click(searchBtn);
    const inputRadioIngredient = screen.getByTestId(INGREDIENT_RADIO);

    act(() => {
      userEvent.click(inputRadioIngredient);
    });

    expect(setTypeSearchSpy).toHaveBeenCalled();
    const submitSearchBtn = screen.getByTestId(SEARCH_BTN_SUBMIT);
    userEvent.click(submitSearchBtn);
    expect(history.location.pathname).toBe('/drinks');
    setTypeSearchSpy.mockRestore();
  });
});
