import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { GetServerSideProps } from 'next';
import { fetchCarList } from '../apis/carList';
import SEOHead from '../components/SEOHead';
import TopBar from '../components/TopBar';
import CarDetail from '../components/car/CarDetail';
import { CarItem } from '../model/CarItem';

interface CarDetailPageProps {
  car: CarItem;
}

export default function CarDetailPage({ car }: CarDetailPageProps) {
  return (
    <>
      <SEOHead car={car} />
      <TopBar title="차량 상세" backButton />
      <Main>
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <CarDetail car={car} />
        </motion.div>
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
    return notFoundRedirection();
  }

  const carDetail = carList.find((car) => String(car.id) === carId);

  if (carDetail == null) {
    return notFoundRedirection();
  }

  return {
    props: {
      car: carDetail,
    }, // will be passed to the page component as props
  };
};

function notFoundRedirection() {
  return {
    redirect: {
      permanent: false,
      destination: `/404`,
    },
    props: {},
  };
}
