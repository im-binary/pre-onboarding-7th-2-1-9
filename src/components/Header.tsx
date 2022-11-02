import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { Theme } from '../styles/Theme';

export function Header({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <HeaderBar className={className}>{children}</HeaderBar>;
}

const HeaderBar = styled.header`
  position: relative;
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid ${Theme.mainColor};
  font-weight: bold;

  h1 {
    font-size: 1.7rem;
  }
`;
