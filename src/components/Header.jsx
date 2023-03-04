import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export function urlToTitle(url) {
  if (url !== '/' && !url.includes(':id')) {
    const getWords = url.replace('/', '').replace('-', ' '); // Tira o '/' e substitui o '-' por espaço...
    const title = getWords.replace(/\b\w/g, (letra) => letra.toUpperCase()); // Troca a primeira letra de cada palavra para maiúscula.
    return title;
  }
}

function Header() {
  const [isHiddenSearchTopBtn, setIsHiddenSearchTopBtn] = useState(false);
  const [isHiddenTextForSearch, setIsHiddenTextForSearch] = useState(false);
  const [textForSearch, setTextForSearch] = useState('');
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (pathname === '/profile'
    || pathname === '/done-recipes'
    || pathname === '/favorite-recipes') { setIsHiddenSearchTopBtn(true); }
  }, [pathname]);

  return (
    <div>
      <h1 data-testid="page-title">{ urlToTitle(pathname) }</h1>
      <button
        onClick={ () => {
          history.push('/profile');
        } }
      >
        <img
          src={ profileIcon }
          data-testid="profile-top-btn"
          alt="profile-top-btn"
        />
      </button>
      { !isHiddenSearchTopBtn && (
        <button
          onClick={ () => {
            setIsHiddenTextForSearch(!isHiddenTextForSearch);
          } }
        >
          <img
            src={ searchIcon }
            data-testid="search-top-btn"
            alt="search-top-btn"
          />
        </button>
      ) }
      { isHiddenTextForSearch && (
        <div className="seach-container">
          <label htmlFor="input-email">
            <input
              data-testid="search-input"
              type="text"
              name="search-input"
              className="search-input"
              value={ textForSearch }
              onChange={ ({ target: { value } }) => setTextForSearch(value) }
            />
          </label>
        </div>
      ) }
    </div>
  );
}

export default Header;
