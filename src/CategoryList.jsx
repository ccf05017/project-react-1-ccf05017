import React from 'react';

import styled from '@emotion/styled';

import CategoryItemContainer from './CategoryItemContainer';

const MenuNavigation = styled('nav')`
  position: absolute;
  top: 45px;
  left: 0;
  width: 100%;
  height: 44px;
  padding: 0 1rem;
`;

const MenuNavigationComponents = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  border-bottom: 1px solid #ddd;
`;

export default function CategoryList({ categories }) {
  return (
    <>
      <MenuNavigation>
        <MenuNavigationComponents>
          {categories.map((category) => (
            <CategoryItemContainer
              key={category.id}
              category={category}
            />
          ))}
        </MenuNavigationComponents>
      </MenuNavigation>
    </>
  );
}
