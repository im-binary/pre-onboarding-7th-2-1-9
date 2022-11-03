import { css } from '@emotion/react';
import Head from 'next/head';
import { CarItem } from '../../model/CarItem';
import Additional from './Additional';
import Info from './Info';
import Insurance from './Insurance';
import Summary from './Summary';

interface CarDetailProps {
  car: CarItem;
}

export default function CarDetail({ car }: CarDetailProps) {
  const { attribute, amount, startDate, insurance, additionalProducts } = car;

  return (
    <>
      <Head>
        <title>
          {`${attribute.brand} - ${attribute.name} | 차량 대여 서비스`}
        </title>
      </Head>

      <article
        css={css`
          padding-bottom: 20px;
        `}
      >
        <Summary attribute={attribute} amount={amount} />

        {/* 차량정보 */}
        <Info attribute={attribute} startDate={startDate} />

        {/* 보험 */}
        <Insurance insurance={insurance} />

        {/* 추가상품 */}
        <Additional additionalProducts={additionalProducts} />
      </article>
    </>
  );
}
