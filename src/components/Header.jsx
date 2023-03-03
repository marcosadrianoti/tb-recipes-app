import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const { pathname } = useLocation();

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
      <img src={ profileIcon } data-testid="profile-top-btn" alt="profile-top-btn" />
      { !isHidden && (<img
        src={ searchIcon }
        data-testid="search-top-btn"
        alt="search-top-btn"
      />) }

    </div>
  );
}

export default Header;
