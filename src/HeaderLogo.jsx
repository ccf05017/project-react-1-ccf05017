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

export default function HeaderLogo({ onClick }) {
  return (
    <>
      <MainNav>
        <Link to="/" onClick={onClick}>
          <Logo src={LogoImage} alt="YenTopper" />
        </Link>
      </MainNav>
    </>
  );
}
