import React from 'react';

import styled from '@emotion/styled';

import HeaderLogo from './HeaderLogo';
import ContentPage from './ContentPage';

const GridContainer = styled('div')`
  display: grid;
  grid-template-rows: 100px 100px;
`;

const Header = styled('div')`
  height: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavBar = styled('div')`
  height: 100%;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Contents = styled('div')`
  height: 100%;
  background-color: green;
`;

export default function AppLayout() {
  return (
    <GridContainer>
      <Header>
        <HeaderLogo />
      </Header>
      <NavBar />
      <Contents>
        <ContentPage />
      </Contents>
    </GridContainer>
  );
}
