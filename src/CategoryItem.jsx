import React from 'react';

export default function CategoryItem({ category, onMouseOver }) {
  return (
    <li
      onMouseOver={() => onMouseOver(category.id)}
      onFocus={() => onMouseOver(category.id)}
    >
      {category.name}
    </li>
  );
}
