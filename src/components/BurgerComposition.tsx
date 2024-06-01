import React from 'react';
import BurgerIngredient from './BurgerIngredient';
import Burger from './Burger';
import { IngredientInBurger } from '../types';

interface BurgerCompositionProps {
  ingredients: IngredientInBurger[];
  onRemoveIngredient: (ingredientName: string) => void;
}

const BurgerComposition: React.FC<BurgerCompositionProps> = ({ ingredients, onRemoveIngredient }) => (
  <div className="burger-composition">
    <Burger ingredients={ingredients} />
    {ingredients.map(ingredient => (
      <BurgerIngredient key={ingredient.name} ingredient={ingredient} onRemove={onRemoveIngredient} />
    ))}
  </div>
);

export default BurgerComposition;
