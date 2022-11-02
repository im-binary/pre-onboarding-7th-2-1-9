import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { Theme } from '../styles/Theme';

export function Header({ children }: { children: ReactNode }) {
  return <HeaderBar>{children}</HeaderBar>;
}

const HeaderBar = styled.header`
  padding: 20px;
  text-align: center;
  font-size: 1.7rem;
  border-bottom: 1px solid ${Theme.mainColor};
  font-weight: bold;
`;
