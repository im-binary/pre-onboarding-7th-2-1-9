import React, { ReactNode, Suspense } from 'react';
import { Header } from '../../Header';
import { NavLink } from '../../NavLink';

export default function TabLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header>전체 차량</Header>
      <nav>
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
            <NavLink href="/cars/tab/small">
              <button type="button">소형</button>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<h1>불러오는 중...</h1>}>
        <main>{children}</main>
      </Suspense>
    </>
  );
}
