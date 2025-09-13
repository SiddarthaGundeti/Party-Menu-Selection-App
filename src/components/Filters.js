import React from "react";

function Filters({ activeCategory, onCategoryChange, searchTerm, onSearchChange, vegOnly, onVegOnlyChange }) {
  const categories = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES"];

  return (
    <div className="filters">
      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <input
        type="text"
        placeholder="Search dishes..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={vegOnly}
          onChange={(e) => onVegOnlyChange(e.target.checked)}
        />
        Veg Only
      </label>
    </div>
  );
}

export default Filters;
