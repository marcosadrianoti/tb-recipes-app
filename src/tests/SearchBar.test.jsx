import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';
import fetch from '../../cypress/mocks/fetch';

describe('Teste do componente SearchBar', () => {
  beforeEach(() => {
    global.alert = jest.fn();
    global.fetch = jest.fn(fetch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it('Verifica funcionalidade do componente na rota meals', async () => {
    const { history } = renderWithRouter(<App />, '/meals');
    const searchBtn = await screen.findByRole('button', { name: /search-top-btn/i });
    userEvent.click(searchBtn);

    const searchInput = await screen.findByTestId('search-input');
    const inputRadioIngredient = screen.getByTestId('ingredient-search-radio');
    const submitSearchBtn = screen.getByTestId('exec-search-btn');

    userEvent.click(inputRadioIngredient);
    userEvent.type(searchInput, 'Chicken');
    userEvent.click(submitSearchBtn);

    await waitFor(() => {
      screen.getByTestId('0-card-img');
      screen.getByText(/brown stew chicken/i);
    });

    const inputRadioName = screen.getByTestId('name-search-radio');
    userEvent.click(inputRadioName);
    userEvent.click(submitSearchBtn);

    await waitFor(() => {
      screen.getByTestId('0-card-img');
      screen.getByText(/chicken handi/i);
    });

    const inputRadioFirstLetter = screen.getByTestId('first-letter-search-radio');
    userEvent.click(inputRadioFirstLetter);
    userEvent.click(submitSearchBtn);
    const TWO = 2;
    await waitFor(() => {
      expect(global.alert).toBeCalledTimes(TWO);
    });

    userEvent.clear(searchInput);
    userEvent.click(inputRadioName);
    userEvent.type(searchInput, 'xablau');
    userEvent.click(submitSearchBtn);
    const THREE = 3;
    await waitFor(() => {
      expect(global.alert).toBeCalledTimes(THREE);
    });

    userEvent.clear(searchInput);
    userEvent.click(inputRadioName);
    userEvent.type(searchInput, 'Arrabiata');
    userEvent.click(submitSearchBtn);

    await waitFor(() => {
      expect(history.location.pathname).toBe('/meals/52771');
    });
  });
  it('Verifica funcionalidade do componente na rota drinks', async () => {
    const { history } = renderWithRouter(<App />, '/drinks');

    const searchBtn = await screen.findByRole('button', { name: /search-top-btn/i });
    userEvent.click(searchBtn);

    const searchInput = await screen.findByTestId('search-input');
    const inputRadioName = screen.getByTestId('name-search-radio');
    const submitSearchBtn = screen.getByTestId('exec-search-btn');

    userEvent.type(searchInput, 'Aquamarine');
    userEvent.click(inputRadioName);
    userEvent.click(submitSearchBtn);

    await waitFor(() => {
      expect(history.location.pathname).toBe('/drinks/178319');
    });
  });
});
