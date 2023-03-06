import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getDetailsRecipe } from '../services/fetchApi';

function RecipeDetails() {
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    const typeRecipe = location.pathname.includes('drinks') ? 'drinks' : 'meals';
    getDetailsRecipe(id, typeRecipe);
  });

  return (
    <div>RecipeDetails</div>
  );
}

export default RecipeDetails;
