import React from 'react';

import { useSelector } from 'react-redux';

import CategoryItem from './CategoryItem';

export default function CategoryItemContainer({ category, onMouseOver }) {
  const { selectedCategory } = useSelector((state) => ({
    selectedCategory: state.selectedCategory,
  }));

  const isSelected = (selectedCategory && selectedCategory.id) === category.id;

  return (
    <>
      <CategoryItem
        category={category}
        onMouseOver={onMouseOver}
      />
      {isSelected && '(O)'}
    </>
  );
}
