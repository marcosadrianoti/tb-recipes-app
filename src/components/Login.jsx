function Login() {
  return (
    <div>
      <label htmlFor="input-email">
        <input
          placeholder="Digite seu email"
          data-testid="email-input"
          type="text"
          name="email"
          className="input-email"
        />
      </label>

      <label htmlFor="input-password">
        <input
          placeholder="Digite sua senha"
          data-testid="password-input"
          type="password"
          name="password"
          className="input-password"
        />
      </label>

      <button
        data-testid="login-submit-btn"
        type="button"
        name="enter-button"
        className="enter-button"
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
