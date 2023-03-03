import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  const history = useHistory();
  return (
    <div data-testid="footer" className="footer">
      <button
        onClick={ () => {
          history.push('/drinks');
        } }
      >
        <img src={ drinkIcon } alt="drinkIcon" data-testid="drinks-bottom-btn" />
      </button>
      <button
        onClick={ () => {
          history.push('/meals');
        } }
      >
        <img src={ mealIcon } alt="mealIcon" data-testid="meals-bottom-btn" />
      </button>
    </div>
  );
}

export default Footer;
