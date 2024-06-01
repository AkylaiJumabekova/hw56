import React from "react";
import IngredientItem from "./IngredientItem";
import { Ingredient } from "../types";

interface IngredientListProps {
  ingredients: Ingredient[];
  onAddIngredient: (ingredient: Ingredient) => void;
}

const IngredientList: React.FC<IngredientListProps> = ({
  ingredients,
  onAddIngredient,
}) => {
  return (
    <div className="ingredient-list">
      {ingredients.map((ingredient, index) => (
        <IngredientItem
          key={index}
          ingredient={ingredient}
          onAdd={onAddIngredient}
        />
      ))}
    </div>
  );
};

export default IngredientList;
