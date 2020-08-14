import React from 'react';

import {
  Link,
} from 'react-router-dom';

import styled from '@emotion/styled';

import { LogoImage } from './assets';

const MainNav = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Logo = styled('img')`
  width: 200px;
  height: 200px;
`;

export default function HeaderLogo() {
  return (
    <>
      <MainNav>
        <Link to="/">
          <Logo src={LogoImage} alt="YenTopper" />
        </Link>
      </MainNav>
    </>
  );
}
