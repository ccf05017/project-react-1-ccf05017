import React from 'react';

import CategoryItemContainer from './CategoryItemContainer';

export default function CategoryList({ categories }) {
  return (
    <>
      <h2>카테고리</h2>
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
