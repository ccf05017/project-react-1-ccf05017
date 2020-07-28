import React from 'react';

import CategoryItem from './CategoryItem';

export default function CategoryItemContainer({ category, onMouseOver }) {
  return (
    <CategoryItem
      category={category}
      onMouseOver={onMouseOver}
    />
  );
}
