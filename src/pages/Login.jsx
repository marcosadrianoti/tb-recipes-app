import { useState, useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisable] = useState(true);
  const [email, setEmail] = useState('');

  const history = useHistory();

  const validForm = useCallback(() => {
    // Verifica se o e-mail é válido
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValid = regexEmail.test(email);
    const minimalCharacters = 6;
    // Define se o formulário é válido ou não
    if (emailValid && password.length > minimalCharacters) setIsDisable(false);
    else setIsDisable(true);
  }, [password, email]);

  const receitasTeste = [
    {
      id: 1,
      type: 'meal',
      nationality: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      doneDate: '23/06/2020',
      tags: ['Pasta', 'Curry'],
    },
    {
      id: 2,
      type: 'meal',
      nationality: 'brazilian',
      category: 'dessert',
      alcoholicOrNot: '',
      name: 'brigadeirão',
      image: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
      doneDate: '25/02/2023',
      tags: ['teste', 'aaaaaaa'],
    },
  ];

  const handleClick = () => {
    const user = { email };
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('doneRecipes', JSON.stringify(receitasTeste));
    localStorage.setItem('inProgressRecipes', JSON.stringify({ drinks: {}, meals: {} }));
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    history.push('/meals');
  };

  useMemo(() => {
    validForm();
  }, [validForm]);

  return (
    <div>
      <label htmlFor="input-email">
        <input
          placeholder="Digite seu email"
          data-testid="email-input"
          type="text"
          name="email"
          className="input-email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>

      <label htmlFor="input-password">
        <input
          placeholder="Digite sua senha"
          data-testid="password-input"
          type="password"
          name="password"
          className="input-password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>

      <button
        data-testid="login-submit-btn"
        type="button"
        name="enter-button"
        className="enter-button"
        onClick={ () => {
          handleClick();
        } }
        disabled={ isDisabled }
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
