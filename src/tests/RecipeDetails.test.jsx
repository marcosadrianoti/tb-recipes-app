import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';

describe('Teste do componente RecipeDetails', () => {
  it('Verifica se renderiza o componente correto na rota correta', async () => {
    renderWithRouter(<App />, '/meals/53013');
    await waitFor(() => {
      screen.getByRole('heading', { name: /big mac/i });
    });
  });
});
