import React from 'react';

import CategoryItemContainer from './CategoryItemContainer';

export default function CategoryList({ categories }) {
  return (
    <>
      <h1>YenTopper</h1>
      <ul>
        {categories.map((category) => (
          <CategoryItemContainer
            key={category.id}
            category={category}
          />
        ))}
      </ul>
    </>
  );
}
