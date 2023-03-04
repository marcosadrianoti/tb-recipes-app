import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';

const PAGE_TITLE = 'page-title';
const PROFILE_TOP_BTN = 'profile-top-btn';
const SEARCH_TOP_BTN = 'search-top-btn';

describe('Alguns elementos só devem aparecer em certas páginas', () => {
  it('Verifica se os elementos corretos são renderizados na página /meals', () => {
    renderWithRouter(<App />, '/meals');

    const headerTitleMeals = screen.getByTestId(PAGE_TITLE);
    const profileBtn = screen.getByTestId(PROFILE_TOP_BTN);
    const searchBtn = screen.getByTestId(SEARCH_TOP_BTN);

    expect(headerTitleMeals).toBeInTheDocument();
    expect(profileBtn).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
  });
  it('Verifica se os elementos corretos são renderizados na página /profile', () => {
    renderWithRouter(<App />, '/profile');

    const headerTitleProfile = screen.getByTestId(PAGE_TITLE);
    const profileBtn = screen.getByTestId(PROFILE_TOP_BTN);
    const searchBtn = screen.queryByTestId(SEARCH_TOP_BTN);

    expect(headerTitleProfile).toBeInTheDocument();
    expect(profileBtn).toBeInTheDocument();
    expect(searchBtn).not.toBeInTheDocument();
  });
});

describe('Testando o funcionamentos dos botões', () => {
  it('Verifica se ao clicar no btn PROFILE será renderizada a página /profile', () => {
    const { history } = renderWithRouter(<App />, '/meals');

    const profileBtn = screen.getByTestId(PROFILE_TOP_BTN);
    expect(profileBtn).toBeInTheDocument();
    userEvent.click(profileBtn);
    const { pathname } = history.location;
    expect(pathname).toBe('/profile');
  });
  it('Verifica se ao clicar no btn SEARCH será renderizada o input', () => {
    renderWithRouter(<App />, '/meals');

    const searchBtn = screen.queryByTestId(SEARCH_TOP_BTN);

    expect(searchBtn).toBeInTheDocument();
    userEvent.click(searchBtn);
    const searchInput = screen.queryByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });
});

describe('Testando o funcionamentos do input', () => {
  it('Verifica se é possível digitar texto no searchInput', () => {
    renderWithRouter(<App />, '/meals');

    const searchBtn = screen.queryByTestId(SEARCH_TOP_BTN);
    expect(searchBtn).toBeInTheDocument();

    userEvent.click(searchBtn);
    const searchInput = screen.queryByTestId('search-input');
    expect(searchInput).toBeInTheDocument();

    act(() => {
      fireEvent.change(searchInput, { target: { value: 'Xablau' } });
    });
    expect(searchInput).toHaveValue('Xablau');
  });
});

describe('Testar a função urlToTitle', () => {
  it('Se entrar na rota / ou /PAGE/:id não deve colocar texto no título', () => {
    renderWithRouter(<App />, '/meals/:id');
    const headerTitleMeals = screen.getByTestId(PAGE_TITLE);
    expect(headerTitleMeals).toBeInTheDocument();
    expect(headerTitleMeals.textContent).toBe('');
  });
});
