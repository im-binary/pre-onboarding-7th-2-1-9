import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import { Theme } from '../../styles/Theme';
import { NavLink } from '../NavLink';
import TopBar from '../TopBar';

export default function TabLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <TopBar title={'전체 차량'} />
      <Nav>
        <ul>
          <li>
            <NavLink href="/">
              <button type="button">전체</button>
            </NavLink>
          </li>
          <li>
            <NavLink href="/tab/e">
              <button type="button">대형</button>
            </NavLink>
          </li>
          <li>
            <NavLink href="/tab/d">
              <button type="button">중형</button>
            </NavLink>
          </li>
          <li>
            <NavLink href="/tab/c">
              <button type="button">소형</button>
            </NavLink>
          </li>
          <li>
            <NavLink href="/tab/suv">
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
  border-bottom: 1px solid;
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  max-width: 450px;
  margin: 0 auto;
  background-color: #fff;
  z-index: 1;

  ul {
    display: flex;
    margin: 6px 12px;
    overflow-x: scroll;
    word-break: keep-all;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
      width: 0 !important;
    }
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
  min-height: 100vh;
  padding-top: 102px;
`;
