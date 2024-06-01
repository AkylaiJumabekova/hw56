import React from 'react';
import { IngredientInBurger } from '../types';

interface BurgerIngredientProps {
  ingredient: IngredientInBurger;
  onRemove: (ingredientName: string) => void;
}

const BurgerIngredient: React.FC<BurgerIngredientProps> = ({ ingredient, onRemove }) => (
  <div className="burger-ingredient">
    {ingredient.name} x{ingredient.count}
    <button className="remove-button" onClick={() => onRemove(ingredient.name)}>Delete</button>
  </div>
);

export default BurgerIngredient;
