import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

const fakeEmail = 'alguem@teste.com';

describe('Testes do componente Profile', () => {
  it('A rota do componente é "/profile"', () => {
    const userEmail = fakeEmail;
    localStorage.setItem('user', JSON.stringify(userEmail));

    const { history } = renderWithRouter(<App />);
    history.push('/profile');

    const { pathname } = history.location;

    expect(pathname).toBe('/profile');
  });

  it('O título da página e o botão Profile são renderizados', async () => {
    const userEmail = fakeEmail;
    localStorage.setItem('user', JSON.stringify(userEmail));

    const { history } = renderWithRouter(<App />);
    history.push('/profile');

    const pageTitle = await screen.findByTestId('page-title');
    expect(pageTitle).toBeInTheDocument();

    const profileBtn = await screen.findByTestId('profile-top-btn');
    expect(profileBtn).toBeInTheDocument();
  });

  it('O email do usuário é renderizado', async () => {
    const userEmail = fakeEmail;
    localStorage.setItem('user', JSON.stringify(userEmail));

    const { history } = renderWithRouter(<App />);
    history.push('/profile');

    const email = await screen.findByTestId('profile-email');
    expect(email).toBeInTheDocument();
  });

  it('Botões "Done Recipes", "Favorite Recipes", "Logout" são renderizados', async () => {
    const userEmail = fakeEmail;
    localStorage.setItem('user', JSON.stringify(userEmail));

    const { history } = renderWithRouter(<App />);
    history.push('/profile');

    const doneRecipesBtn = await screen.findByTestId('profile-done-btn');
    expect(doneRecipesBtn).toBeInTheDocument();

    const favoriteRecipesBtn = await screen.findByTestId('profile-favorite-btn');
    expect(favoriteRecipesBtn).toBeInTheDocument();

    const logoutBtn = await screen.findByTestId('profile-logout-btn');
    expect(logoutBtn).toBeInTheDocument();
  });

  it('Clicar em "Done Recipes" redireciona para a pág Done Recipes', async () => {
    const userEmail = fakeEmail;
    localStorage.setItem('user', JSON.stringify(userEmail));

    const { history } = renderWithRouter(<App />);
    history.push('/profile');

    const doneRecipesBtn = await screen.findByTestId('profile-done-btn');
    expect(doneRecipesBtn).toBeInTheDocument();

    act(() => {
      userEvent.click(doneRecipesBtn);
    });

    const { pathname } = history.location;
    expect(pathname).toBe('/done-recipes');
  });

  it('Clicar em "Favorite Recipes" redireciona para a pág Favorite Recipes', async () => {
    const userEmail = fakeEmail;
    localStorage.setItem('user', JSON.stringify(userEmail));

    const { history } = renderWithRouter(<App />);
    history.push('/profile');

    const favoriteRecipesBtn = await screen.findByTestId('profile-favorite-btn');
    expect(favoriteRecipesBtn).toBeInTheDocument();

    act(() => {
      userEvent.click(favoriteRecipesBtn);
    });

    const { pathname } = history.location;
    expect(pathname).toBe('/favorite-recipes');
  });

  it('Clicar em "Logout" limpa localStorage e redireciona para a pág Login', async () => {
    const userEmail = fakeEmail;
    localStorage.setItem('user', JSON.stringify(userEmail));

    const { history } = renderWithRouter(<App />);
    history.push('/profile');

    const logoutBtn = await screen.findByTestId('profile-logout-btn');
    expect(logoutBtn).toBeInTheDocument();

    localStorage.clear();

    act(() => {
      userEvent.click(logoutBtn);
    });

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
});
