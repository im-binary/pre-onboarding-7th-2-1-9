import Loading from '../components/Loading';
import { SSRSuspense } from '../components/SSRSuspense';
import CarCatalogList from '../components/tab/CarCatalogList';
import TabLayout from '../components/tab/TabLayout';

export default function CarListPage() {
  return (
    <>
      <TabLayout>
        <SSRSuspense fallback={<Loading />}>
          <CarCatalogList />
        </SSRSuspense>
      </TabLayout>
    </>
  );
}
