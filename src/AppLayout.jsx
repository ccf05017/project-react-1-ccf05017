import React from 'react';

import styled from '@emotion/styled';

import CategoryListContainer from './CategoryListContainer';
import ContentPage from './ContentPage';
import HeaderLogoContainer from './HeaderLogoContainer';

const GridContainer = styled('div')`
  display: grid;
  grid-template-rows: 100px 45px;
`;

const Header = styled('div')`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavBar = styled('div')`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Contents = styled('div')`
  height: 100%;
`;

const ContentsLayout = styled('div')`
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  padding: 1rem 1rem;
`;

export default function AppLayout() {
  return (
    <GridContainer>
      <Header>
        <HeaderLogoContainer />
      </Header>
      <NavBar>
        <CategoryListContainer />
      </NavBar>
      <Contents>
        <ContentsLayout>
          <ContentPage />
        </ContentsLayout>
      </Contents>
    </GridContainer>
  );
}
