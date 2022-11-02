import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import { Theme } from '../../../styles/Theme';
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
            <NavLink href="/cars/tab/e">
              <button type="button">대형</button>
            </NavLink>
          </li>
          <li>
            <NavLink href="/cars/tab/d">
              <button type="button">중형</button>
            </NavLink>
          </li>
          <li>
            <NavLink href="/cars/tab/c">
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
      <Main>{children}</Main>
    </>
  );
}

const Nav = styled.nav`
  border: 1px solid;

  ul {
    display: flex;
    margin: 6px 12px;
    overflow: scroll;
    word-break: keep-all;
  }

  li + li {
    margin-left: 8px;
  }

  a {
    display: block;
    border-radius: 62px;
    overflow: hidden;
    background-color: ${Theme.subColor};
  }

  a.active {
    background-color: ${Theme.mainColor};
    color: #ffffff;
  }

  button {
    padding: 5px 18px;
    width: 100%;
    height: 100%;
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

const Main = styled.main`
  height: calc(100vh - 99px);
  overflow-y: scroll;

  ul {
    border: 1px solid red;
  }

  li {
    border: 1px solid;
  }
`;
