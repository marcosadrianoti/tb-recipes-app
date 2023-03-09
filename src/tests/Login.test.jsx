import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Teste do componente Login', () => {
  it('Teste se a página renderiza os inputs e buttons', () => {
    renderWithRouter(<App />, '/');
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const submitButton = screen.getByRole('button', { name: /entrar/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
  it('valida o formulário corretamente', () => {
    const { history } = renderWithRouter(<App />, '/');
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const submitButton = screen.getByRole('button', { name: /entrar/i });

    expect(submitButton).toBeDisabled();

    act(() => {
      fireEvent.change(emailInput, { target: { value: 'teste@teste.com' } });
      fireEvent.change(passwordInput, { target: { value: '1234567' } });
    });
    expect(submitButton).toBeEnabled();
    fireEvent.click(submitButton);
    expect(history.location.pathname).toBe('/meals');
  });
});
