import React from 'react';

export default function CategoryItem({ category, onMouseOver, isSelected }) {
  function renderSelect() {
    if (isSelected) {
      return `${category.name}(O)`;
    }
    return `${category.name}`;
  }

  return (
    <li
      onMouseOver={() => onMouseOver(category.id)}
      onFocus={() => onMouseOver(category.id)}
    >
      {renderSelect()}
    </li>
  );
}
