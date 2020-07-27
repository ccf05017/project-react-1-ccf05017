import React from 'react';

export default function CategoryList({ categories, onMouseOver }) {
  return (
    <>
      <h1>YenTopper</h1>
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            onMouseOver={() => onMouseOver(category.id)}
            onFocus={() => onMouseOver(category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </>
  );
}
