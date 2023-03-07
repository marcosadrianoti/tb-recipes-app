import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';
import RecipesProvider from '../context/RecipesProvider';

const checker = async (number) => {
  await waitFor(async () => {
    const cardImg = await screen.findByTestId('0-card-img');
    expect(cardImg).toBeDefined(); // Verifica se o elemento existe
    expect(cardImg).toBeInstanceOf(HTMLElement); // Verifica se o elemento é um HTMLElement
    expect(cardImg).toBeInTheDocument(); // Verifica se o elemento está no DOM
  }, { timeout: 10000 });
  const arrayImg = [];
  const arrayNames = [];
  for (let i = 0; i <= number - 1; i += 1) {
    arrayImg.push(screen.queryByTestId(`${i}-card-img`));
    arrayNames.push(screen.queryByTestId(`${i}-card-name`));
  }
  const responsesImg = await Promise.all(arrayImg);
  const responsesNames = await Promise.all(arrayNames);

  return { responsesImg: responsesImg.filter((item) => item !== null),
    responsesNames: responsesNames.filter((item) => item !== null) };
};

describe('Teste do componente Recipes.js', () => {
  it('Testa se a tela apresenta 12 imagens de comidas', async () => {
    const { history } = renderWithRouter(

      <RecipesProvider>
        <App />
      </RecipesProvider>,
    );

    // Login
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const buttonInput = screen.getByTestId('login-submit-btn');
    userEvent.type(emailInput, 'teste@trybe.com');
    userEvent.type(passwordInput, '12345678');
    userEvent.click(buttonInput);

    // Página Meals.jsx
    expect(history.location.pathname).toBe('/meals');

    // Testa se a aplicação apresenta 12 imagens e 12 nomes (o correto é 12 para qualquer número acima de 12 que for colocado na função)
    const magicNumber1 = 20;
    const magicNumber2 = 12;
    const arrayChecker = await checker(magicNumber1);
    expect(arrayChecker.responsesImg.length).not.toBe(magicNumber1);
    expect(arrayChecker.responsesImg.length).toBe(magicNumber2);
    expect(arrayChecker.responsesNames.length).not.toBe(magicNumber1);
    expect(arrayChecker.responsesNames.length).toBe(magicNumber2);
  });

  it('Testa se a tela apresenta 12 imagens de bebidas', async () => {
    const { history } = renderWithRouter(

      <RecipesProvider>
        <App />
      </RecipesProvider>,

    );

    // Login
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const buttonInput = screen.getByTestId('login-submit-btn');
    userEvent.type(emailInput, 'teste@trybe.com');
    userEvent.type(passwordInput, '12345678');
    userEvent.click(buttonInput);

    // Página Meals.jsx
    expect(history.location.pathname).toBe('/meals');

    // Página Drinks.jsx
    act(() => {
      history.push('/drinks');
    });

    // Testa se a aplicação apresenta 12 imagens e 12 nomes (o correto é 12 para qualquer número acima de 12 que for colocado na função)
    const magicNumber1 = 20;
    const magicNumber2 = 12;
    const arrayChecker = await checker(magicNumber1);
    expect(arrayChecker.responsesImg.length).not.toBe(magicNumber1);
    expect(arrayChecker.responsesImg.length).toBe(magicNumber2);
    expect(arrayChecker.responsesNames.length).not.toBe(magicNumber1);
    expect(arrayChecker.responsesNames.length).toBe(magicNumber2);
  });
});
