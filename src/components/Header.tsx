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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  max-width: 450px;
  margin: 0 auto;
  background-color: #fff;
  padding: 18.75px;
  text-align: center;
  border-bottom: 1px solid ${Theme.mainColor};
  font-weight: bold;
  z-index: 1;

  h1 {
    font-size: 1.7rem;
  }
`;
