import styled from '@emotion/styled';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { fetchCarList } from '../apis/carList';
import CarDetail from '../components/car/CarDetail';
import TopBar from '../components/car/TopBar';
import { CarItem } from '../model/CarItem';

interface CarDetailPageProps {
  car: CarItem;
}

export default function CarDetailPage({ car }: CarDetailPageProps) {
  const { id, attribute, amount } = car;

  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://pre-onboarding-7th-2-1-9-two.vercel.app/${id}`}
        />
        <meta property="og:image" content={`${attribute.imageUrl}`} />
        <meta
          property="og:title"
          content={`${attribute.brand} - ${attribute.name} | 차량 대여 서비스`}
        />
        <meta
          property="og:description"
          content={`${attribute.brand} | ${attribute.name} | 월 ${amount} 원`}
        />
        <meta property="og:site_name" content="차량 대여 서비스" />
        <meta property="og:locale" content="en_KO" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <TopBar />
      <Main>
        <CarDetail car={car} />
      </Main>
    </>
  );
}

const Main = styled.main`
  height: calc(100vh - 62.5px);
  overflow-y: scroll;
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { carId } = query;
  const carList = await fetchCarList();
  if (Array.isArray(carId) || carId == null) {
    return {
      // TODO: Error 처리
      props: {},
    };
  }

  const carDetail = carList.find((x) => String(x.id) === carId);
  if (carDetail == null) {
    return {
      // TODO: Error 처리
      props: {},
    };
  }

  return {
    props: {
      car: carDetail,
    }, // will be passed to the page component as props
  };
};
