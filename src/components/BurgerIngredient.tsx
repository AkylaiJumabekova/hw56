import React from "react";
import { IngredientInBurger } from "../types";

interface BurgerIngredientProps {
  ingredient: IngredientInBurger;
  onRemove: (ingredientName: string) => void;
}

const BurgerIngredient: React.FC<BurgerIngredientProps> = ({ ingredient, onRemove }) => {
  const handleRemoveClick = () => {
    onRemove(ingredient.name);
  };

  return (
    <div className="burger-ingredient">
      {ingredient.name} x{ingredient.count}
      <button onClick={handleRemoveClick}>Удалить</button>
    </div>
  );
};

export default BurgerIngredient;
