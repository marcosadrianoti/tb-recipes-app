import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const { pathname } = useLocation();
  const history = useHistory();

  function urlToTitle(url) {
    if (url !== '/' && !url.includes(':id')) {
      const getWords = url.replace('/', '').replace('-', ' '); // Tira o '/' e substitui o '-' por espaço...
      const title = getWords.replace(/\b\w/g, (letra) => letra.toUpperCase()); // Troca a primeira letra de cada palavra para maiúscula.
      return title;
    }
  }

  useEffect(() => {
    if (pathname === '/profile'
    || pathname === '/done-recipes'
    || pathname === '/favorite-recipes') { setIsHidden(true); }
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
      { !isHidden && (
        <button
          onClick={ () => {
            history.push('/profile');
          } }
        >
          <img
            src={ searchIcon }
            data-testid="search-top-btn"
            alt="search-top-btn"
          />
        </button>
      ) }

    </div>
  );
}

export default Header;
