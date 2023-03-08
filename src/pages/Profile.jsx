import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  return (
    <>
      <Header />
      <h3 data-testid="profile-email">email do usuário</h3>
      <button type="button" data-testid="profile-done-btn">Done Recipes</button>
      <button type="button" data-testid="profile-favorite-btn">Favorite Recipes</button>
      <button type="button" data-testid="profile-logout-btn">Logout</button>
      <Footer />
    </>
  );
}

export default Profile;
