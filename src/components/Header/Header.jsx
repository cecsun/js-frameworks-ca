import React from 'react';
import * as S from './Header.styles';
import Nav from '../Nav/Nav';

export function Header() {
  return (
    <S.Header>
      <Nav />
    </S.Header>
  );
}
