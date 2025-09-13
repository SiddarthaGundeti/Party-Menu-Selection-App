import React from "react";

function DishCard({ dish, onAddDish, onRemoveDish, isSelected, onViewIngredients }) {
  return (
    <div className="dish-card">
      <img src={dish.image} alt={dish.name} />
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      <div className="buttons">
        {isSelected ? (
          <button onClick={() => onRemoveDish(dish.id)}>Remove</button>
        ) : (
          <button onClick={() => onAddDish(dish.id)}>Add</button>
        )}
        <button onClick={() => onViewIngredients(dish)}>Ingredients</button>
      </div>
    </div>
  );
}

export default DishCard;
