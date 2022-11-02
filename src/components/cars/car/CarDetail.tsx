import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useCarList } from '../../../hooks/useCarList';
import Additional from './Additional';
import Info from './Info';
import Insurance from './Insurance';
import Summary from './Summary';

export default function CarDetail() {
  const router = useRouter();
  const { carId } = router.query;

  const carList = useCarList({});
  const carDetail = carList.filter((x) => String(x.id) === carId);

  const { attribute, amount, startDate, insurance, additionalProducts } =
    carDetail[0];

  return (
    <article
      css={css`
        margin-bottom: 20px;
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
  );
}
