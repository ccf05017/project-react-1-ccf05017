import React from 'react';

import styled from '@emotion/styled';

import CategoryItemContainer from './CategoryItemContainer';

const LocalNavContainer = styled('nav')`
  position: absolute;
  top: 45px;
  left: 0;
  width: 100%;
  height: 44px;
  padding: 0 1rem;
`;

const LocalNavComponents = styled('div')`
  display: flex;
  align-items: center;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  justify-content: space-between;
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
