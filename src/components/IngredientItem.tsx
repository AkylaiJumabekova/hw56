import React from "react";
import { Ingredient } from "../types";

interface IngredientItemProps {
  ingredient: Ingredient;
  onAdd: (ingredient: Ingredient) => void;
}

const IngredientItem: React.FC<IngredientItemProps> = ({ ingredient, onAdd }) => {
  const handleAddClick = () => {
    onAdd(ingredient);
  };

  return (
    <div className="ingredient-item">
      <img src={ingredient.image} alt={ingredient.name} />
      <button onClick={handleAddClick}>
        {ingredient.name} - {ingredient.price} som
      </button>
    </div>
  );
};

export default IngredientItem;
