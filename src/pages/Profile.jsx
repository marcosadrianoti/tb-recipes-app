import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  const [email, setEmail] = useState('');

  const history = useHistory();

  const getEmailLocalStorage = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    if (!user) user = { email: '' };
    return user;
  };

  useEffect(() => {
    const user = getEmailLocalStorage();
    setEmail(user.email);
  }, []);

  return (
    <>
      <Header />
      <h3 data-testid="profile-email">{email}</h3>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ () => history.push('/done-recipes') }
      >
        Done Recipes
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ () => history.push('/favorite-recipes') }
      >
        Favorite Recipes
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ () => {
          localStorage.clear();
          history.push('/');
        } }
      >
        Logout
      </button>
      <Footer />
    </>
  );
}

export default Profile;
