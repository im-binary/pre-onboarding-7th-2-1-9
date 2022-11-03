import styled from '@emotion/styled';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { fetchCarList } from '../apis/carList';
import TopBar from '../components/TopBar';
import CarDetail from '../components/car/CarDetail';
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
      <TopBar title="차량 상세" backButton />
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
    return NotFoundRedirection(
      encodeURIComponent(`존재하지 않는 차량입니다. ${carId}`)
    );
  }

  const carDetail = carList.find((car) => String(car.id) === carId);

  if (carDetail == null) {
    return NotFoundRedirection(
      encodeURIComponent(`존재하지 않는 차량입니다. ${carId}`)
    );
  }

  return {
    props: {
      car: carDetail,
    }, // will be passed to the page component as props
  };
};

function NotFoundRedirection(message: string) {
  return {
    redirect: {
      permanent: false,
      destination: `/404?message=${message}`,
    },
    props: {},
  };
}
