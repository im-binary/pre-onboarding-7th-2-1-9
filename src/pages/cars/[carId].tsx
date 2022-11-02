import styled from '@emotion/styled';
import Loading from '../../components/Loading';
import { SSRSuspense } from '../../components/cars/SSRSuspense';
import CarDetail from '../../components/cars/car/CarDetail';
import TopBar from '../../components/cars/car/TopBar';

export default function CarDetailPage() {
  return (
    <>
      <TopBar />
      <Main>
        <SSRSuspense fallback={<Loading />}>
          <CarDetail />
        </SSRSuspense>
      </Main>
    </>
  );
}

const Main = styled.main`
  height: calc(100vh - 60px);
  overflow-y: scroll;
`;
