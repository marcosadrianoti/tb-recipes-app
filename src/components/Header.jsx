import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function urlToTitle(url) {
  if (url !== '/' && !url.includes(':id')) {
    const getWords = url.replace('/', '').replace('-', ' '); // Tira o '/' e substitui o '-' por espaço...
    const title = getWords.replace(/\b\w/g, (letra) => letra.toUpperCase()); // Troca a primeira letra de cada palavra para maiúscula.
    return title;
  }
}

function Header() {
  const [isHiddenSearchTopBtn, setIsHiddenSearchTopBtn] = useState(false);
  const [isHiddenTextForSearch, setIsHiddenTextForSearch] = useState(false);
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (pathname === '/profile'
    || pathname === '/done-recipes'
    || pathname === '/favorite-recipes') { setIsHiddenSearchTopBtn(true); }
  }, [pathname]);

  return (
    <div className="header-container">
      <div className="logo-btns">
        <img src="https://imgur.com/zBnKe4p.png" className="logo-app-minor" alt="logo" />
        <div className="header-btns-container">
          <button
            className="profile-top-btn"
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
              className="search-top-btn"
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
              <SearchBar />
            </div>
          ) }
        </div>
      </div>
      <h1 data-testid="page-title">{ urlToTitle(pathname) }</h1>
    </div>
  );
}

export default Header;
