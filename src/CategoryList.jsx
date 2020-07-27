import React from 'react';

import CategoryItem from './CategoryItem';

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
