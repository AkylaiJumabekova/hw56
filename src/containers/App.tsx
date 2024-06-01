import { useState } from "react";
import IngredientList from "../components/IngredientList";
import BurgerComposition from "../components/BurgerComposition";
import { Ingredient, IngredientInBurger } from "../types";
import meatImage from "../assets/meat.png";
import cheeseImage from "../assets/cheese.png";
import saladImage from "../assets/salad.png";
import baconImage from "../assets/bacon.png";
import "./App.css";

const createIngredients = () => [
  { name: "Meat", price: 80, image: meatImage },
  { name: "Cheese", price: 50, image: cheeseImage },
  { name: "Salad", price: 10, image: saladImage },
  { name: "Bacon", price: 60, image: baconImage },
];

const App = () => {
  const [burgerIngredients, setBurgerIngredients] = useState<IngredientInBurger[]>([]);

  const addIngredient = (ingredient: Ingredient) => {
    setBurgerIngredients((prev) => {
      const index = prev.findIndex((ing) => ing.name === ingredient.name);
      if (index >= 0) {
        const newIngredients = [...prev];
        newIngredients[index].count++;
        return newIngredients;
      } else {
        return [...prev, { name: ingredient.name, count: 1 }];
      }
    });
  };

  const removeIngredient = (name: string) => {
    setBurgerIngredients((prev) => {
      return prev.reduce<IngredientInBurger[]>((acc, ing) => {
        if (ing.name === name) {
          if (ing.count > 1) {
            acc.push({ ...ing, count: ing.count - 1 });
          }
        } else {
          acc.push(ing);
        }
        return acc;
      }, []);
    });
  };

  return (
    <div className="App">
      <IngredientList ingredients={createIngredients()} onAddIngredient={addIngredient} />
      <BurgerComposition ingredients={burgerIngredients} onRemoveIngredient={removeIngredient} />
    </div>
  );
};

export default App;
