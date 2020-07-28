import React from 'react';

import CategoryItemContainer from './CategoryItemContainer';

export default function CategoryList({ categories, onMouseOver }) {
  return (
    <>
      <h1>YenTopper</h1>
      <ul>
        {categories.map((category) => (
          <CategoryItemContainer
            key={category.id}
            category={category}
            onMouseOver={onMouseOver}
          />
        ))}
      </ul>
    </>
  );
}
