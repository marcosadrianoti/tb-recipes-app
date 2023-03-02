import { useState, useCallback, useMemo } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisable] = useState(true);

  const validForm = useCallback(() => {
    // Verifica se o e-mail é válido
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValid = regexEmail.test(email);
    const minimalCharacters = 6;

    // Define se o formulário é válido ou não
    if (emailValid && password.length > minimalCharacters) setIsDisable(false);
    else setIsDisable(true);
  }, [password, email]);

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
        disabled={ isDisabled }
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
