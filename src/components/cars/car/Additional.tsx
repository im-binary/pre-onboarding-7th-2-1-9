import styled from '@emotion/styled';
import React, { Fragment } from 'react';
import { Theme } from '../../../styles/Theme';

export default function Additional({
  additionalProducts,
}: {
  additionalProducts: {
    name: string;
    amount: number;
  }[];
}) {
  return (
    <Ul>
      <li>추가상품</li>
      {additionalProducts.map(({ name, amount }, index) => (
        <Fragment key={`${name}-${index}`}>
          <li>
            <span>{name}</span>
            <span>{amount}</span>
          </li>
        </Fragment>
      ))}
    </Ul>
  );
}

const Ul = styled.ul`
  li {
    padding: 14px 20px;
    font-size: 1.7rem;
  }

  li:first-of-type {
    background-color: aliceblue;
    color: #fff;
    background-color: ${Theme.pointColor};
    font-weight: 700;
  }

  li:not(li:first-of-type) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-of-type {
      font-weight: 700;
    }
  }
`;
