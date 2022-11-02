import styled from '@emotion/styled';
import React, { ReactNode, Suspense } from 'react';
import { Header } from '../../Header';
import { NavLink } from '../../NavLink';

export default function TabLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header>전체 차량</Header>
      <Nav>
        <ul>
          <li>
            <NavLink href="/cars">
              <button type="button">전체</button>
            </NavLink>
          </li>
          <li>
            <NavLink href="/cars/tab/fullsize">
              <button type="button">대형</button>
            </NavLink>
          </li>
          <li>
            <NavLink href="/cars/tab/midsize">
              <button type="button">중형</button>
            </NavLink>
          </li>
          <li>
            <NavLink href="/cars/tab/smallsize">
              <button type="button">소형</button>
            </NavLink>
          </li>
          <li>
            <NavLink href="/cars/tab/suv">
              <button type="button">suv</button>
            </NavLink>
          </li>
        </ul>
      </Nav>
      <Suspense fallback={<h1>불러오는 중...</h1>}>
        <Main>{children}</Main>
      </Suspense>
    </>
  );
}

const Nav = styled.nav`
  border: 1px solid;
`;

const Main = styled.main`
  ul {
    border: 1px solid;
  }

  li {
    border: 1px solid;

    img {
      width: 100px;
    }
  }

  h1 {
    font-size: 2rem;
    text-align: center;
  }
`;
