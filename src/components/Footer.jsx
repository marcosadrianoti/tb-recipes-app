import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <div data-testid="footer" className="footer">
      <button>
        <img src={ drinkIcon } alt="drinkIcon" data-testid="drinks-bottom-btn" />
      </button>
      <button>
        <img src={ mealIcon } alt="mealIcon" data-testid="meals-bottom-btn" />
      </button>
    </div>
  );
}

export default Footer;
