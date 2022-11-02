import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import Additional from '../../components/cars/car/Additional';
import Info from '../../components/cars/car/Info';
import Insurance from '../../components/cars/car/Insurance';
import Summary from '../../components/cars/car/Summary';
import { useCarDetail } from '../../hooks/useCarDetail';

export default function CarDetail({
  fuelType,
  segment,
}: {
  fuelType: string;
  segment: string;
}) {
  const [isLoading, setLoading] = useState(true);

  const [carDetail, invalidate] = useCarDetail({ segment, fuelType });

  useEffect(() => {
    invalidate();
    setLoading(false);
  }, []);

  if (isLoading) {
    return (
      <>
        <h1>불러오는 중...</h1>
      </>
    );
  }

  const { startDate, attribute, amount, insurance, additionalProducts } =
    carDetail;

  return (
    <>
      <Header>차량상세</Header>
      <section>
        <Summary attribute={attribute} amount={amount} />

        {/* 차량정보 */}
        <Info attribute={attribute} startDate={startDate} />

        {/* 보험 */}
        <Insurance insurance={insurance} />

        {/* 추가상품 */}
        <Additional additionalProducts={additionalProducts} />
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { fuelType, segment } = query;
  return {
    props: {
      fuelType,
      segment,
    },
  };
};
