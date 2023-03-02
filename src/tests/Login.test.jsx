import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Login from '../components/Login';

describe('Teste do componente Login', () => {
  it('Teste se a página renderiza os inputs e buttons', () => {
    render(<Login />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const submitButton = screen.getByRole('button', { name: /entrar/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
  it('valida o formulário corretamente', () => {
    render(<Login />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const submitButton = screen.getByRole('button', { name: /entrar/i });

    expect(submitButton).toBeDisabled();

    act(() => {
      fireEvent.change(emailInput, { target: { value: 'teste@teste.com' } });
      fireEvent.change(passwordInput, { target: { value: '1234567' } });
    });
    expect(submitButton).toBeEnabled();
  });
});
