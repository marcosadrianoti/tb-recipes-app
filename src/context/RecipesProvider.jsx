import React, { useState } from 'react';
import RecipesContext from './RecipesContext';

function Provider({ children }) {

  return (
    <RecipesContext.Provider>
      {children}
    </RecipesContext.Provider>
  )
}

export default Provider;
