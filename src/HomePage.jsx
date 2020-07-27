import React from 'react';

export default function HomePage({ categories }) {
  return (
    <>
      <h1>YenTopper</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </>
  );
}
