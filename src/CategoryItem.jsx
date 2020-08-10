import React from 'react';

export default function CategoryItem({ category, onMouseOver, isSelected }) {
  const { id, name } = category;

  return (
    <div
      onMouseOver={() => onMouseOver(id)}
      onFocus={() => onMouseOver(id)}
    >
      {name + (isSelected ? '(O)' : '')}
    </div>
  );
}
