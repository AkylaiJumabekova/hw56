import React from 'react';
import { IngredientInBurger } from '../types';
import './Burger.css';

interface BurgerProps {
  ingredients: IngredientInBurger[];
}

const Burger: React.FC<BurgerProps> = ({ ingredients }) => {
  const renderIngredients = () => {
    return ingredients.flatMap((ingredient, index) => {
      const items = [];
      for (let i = 0; i < ingredient.count; i++) {
        items.push(
          <div key={`${ingredient.name}-${index}-${i}`} className={`ingredient ${ingredient.name.toLowerCase()}`} ></div>
        );
      }
      return items;
    });
  };

  return (
    <div className="burger">
      <div className="top-bun"></div>
      {renderIngredients()}
      <div className="bottom-bun"></div>
    </div>
  );
};

export default Burger;
