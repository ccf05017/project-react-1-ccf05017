import React from 'react';

import {
  Link,
} from 'react-router-dom';

import styled from '@emotion/styled';

import { LogoImage } from './assets';

const MainNav = styled.div({
  display: 'flex',
  height: '44px',
  padding: '0 1rem',
  alignItems: 'center',
  justifyContent: 'center',
});

const Logo = styled('img')`
  padding-top: 100px;
  width: 300px;
  height: 300px;
`;

export default function Header() {
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
