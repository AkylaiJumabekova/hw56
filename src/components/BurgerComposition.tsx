import React from 'react';
import BurgerIngredient from './BurgerIngredient';
import { IngredientInBurger } from '../types';

interface BurgerCompositionProps {
  ingredients: IngredientInBurger[];
  onRemoveIngredient: (ingredientName: string) => void;
}

const BurgerComposition: React.FC<BurgerCompositionProps> = ({ ingredients, onRemoveIngredient }) => (
  <div className="burger-composition">
    {ingredients.map(ingredient => (
      <BurgerIngredient key={ingredient.name} ingredient={ingredient} onRemove={onRemoveIngredient} />
    ))}
  </div>
);

export default BurgerComposition;
