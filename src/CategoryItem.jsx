import React from 'react';

export default function CategoryItem({ category, onClick, isSelected }) {
  const { id, name } = category;

  return (
    <div
      onClick={() => onClick(id)}
    >
      {name + (isSelected ? '(O)' : '')}
    </div>
  );
}
