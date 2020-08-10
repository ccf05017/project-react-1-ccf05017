import React from 'react';

import {
  Link,
} from 'react-router-dom';

import styled from '@emotion/styled';

const MainNav = styled.div({
  display: 'flex',
  height: '44px',
  padding: '0 1rem',
});

const MainLink = styled('h1')`
  align-items: center;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  justify-content: space-between;
  & > a {
    text-decoration: none;
  }
  & > a:visited {
    color: black;
  }
`;

export default function Header() {
  return (
    <MainNav>
      <MainLink>
        <Link to="/">
          YenTopper
        </Link>
      </MainLink>
    </MainNav>
  );
}
