import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Drinks from './pages/Drinks';
import Meals from './pages/Meals';
import Profile from './pages/Profile';
import FavoriteRecipes from './pages/FavoriteRecipes';
import DoneRecipes from './pages/DoneRecipes';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/meals/:id/in-progress" component={ Meals } />
      <Route path="/drinks/:id/in-progress" component={ Drinks } />
      <Route path="/meals/:id" component={ Meals } />
      <Route path="/drinks/:id" component={ Drinks } />
      <Route path="/meals" component={ Meals } />
      <Route path="/drinks" component={ Drinks } />
      <Route path="/profile" component={ Profile } />
      <Route path="/done-recipes" component={ DoneRecipes } />
      <Route path="/favorite-recipes" component={ FavoriteRecipes } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}
export default App;
