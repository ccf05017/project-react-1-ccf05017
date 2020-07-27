import React from 'react';

function CategoryItem({ category, onMouseOver }) {
  return (
    <li
      onMouseOver={() => onMouseOver(category.id)}
      onFocus={() => onMouseOver(category.id)}
    >
      {category.name}
    </li>
  );
}

export default function CategoryList({ categories, onMouseOver }) {
  return (
    <>
      <h1>YenTopper</h1>
      <ul>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            onMouseOver={onMouseOver}
          />
        ))}
      </ul>
    </>
  );
}
