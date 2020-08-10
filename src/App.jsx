import React from 'react';

import styled from '@emotion/styled';
import RoutePage from './RoutePage';

const GlobalStyleContainer = styled.div({
  fontFamily: "'Apple SD Gothic Neo', Roboto, 'Noto Sans KR', NanumGothic, 'Malgun Gothic', sans-serif",
  lineHeight: '1.2',
  wordWrap: 'break-word',
});

export default function App() {
  return (
    <GlobalStyleContainer>
      <RoutePage />
    </GlobalStyleContainer>
  );
}
