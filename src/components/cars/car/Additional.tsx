import React, { Fragment } from 'react';

export default function Additional({
  additionalProducts,
}: {
  additionalProducts: {
    name: string;
    amount: number;
  }[];
}) {
  return (
    <>
      <ul>
        {additionalProducts.map(({ name, amount }, index) => (
          <Fragment key={`${name}-${index}`}>
            <li>{name}</li>
            <li>{amount}</li>
          </Fragment>
        ))}
      </ul>
    </>
  );
}
