import React, { useState } from "react";
import { dishes } from "./data/mockDishes";
import Filters from "./components/Filters";
import DishList from "./components/DishList";
import IngredientModal from "./components/IngredientModal";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("STARTER");
  const [searchTerm, setSearchTerm] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState(null);

  const filteredDishes = dishes.filter((dish) => {
    const categoryMatch = dish.mealType === selectedCategory;
    const searchMatch = dish.name.toLowerCase().includes(searchTerm.toLowerCase());
    const vegMatch = !vegOnly || dish.type === "VEG";
    return categoryMatch && searchMatch && vegMatch;
  });

  const handleAddDish = (id) => {
    setSelectedDishes((prev) => [...prev, id]);
  };

  const handleRemoveDish = (id) => {
    setSelectedDishes((prev) => prev.filter((dishId) => dishId !== id));
  };

  const handleViewIngredients = (dish) => {
    setCurrentDish(dish);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentDish(null);
  };

  return (
    <div className="app-container">
      <h1>Party Menu Selection App</h1>

      <Filters
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        vegOnly={vegOnly}
        onVegOnlyChange={setVegOnly}
      />

      <DishList
        dishes={filteredDishes}
        onAddDish={handleAddDish}
        onRemoveDish={handleRemoveDish}
        selectedDishes={selectedDishes}
        onViewIngredients={handleViewIngredients}
      />

      {isModalOpen && <IngredientModal dish={currentDish} onClose={handleCloseModal} />}

      <div className="summary">
        <h3>Selected Dishes ({selectedDishes.length})</h3>
      </div>
    </div>
  );
}

export default App;
