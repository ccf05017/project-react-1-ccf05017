import React from 'react';

import styled from '@emotion/styled';

import CategoryItemContainer from './CategoryItemContainer';

const LocalNavContainer = styled('div')`
  height: 52px;
  border-bottom: 1px solid #ddd;
  padding: 0 1rem;
`;

const LocalNavComponents = styled('div')`
  display: flex;
  align-items: center;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  justify-content: space-around;
`;

export default function CategoryList({ categories }) {
  return (
    <>
      <LocalNavContainer>
        <LocalNavComponents>
          {categories.map((category) => (
            <CategoryItemContainer
              key={category.id}
              category={category}
            />
          ))}
        </LocalNavComponents>
      </LocalNavContainer>
    </>
  );
}
