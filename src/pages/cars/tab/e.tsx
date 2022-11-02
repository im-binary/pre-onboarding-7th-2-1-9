import Loading from '../../../components/Loading';
import { SSRSuspense } from '../../../components/cars/SSRSuspense';
import CarCatalogList from '../../../components/cars/tab/CarCatalogList';
import TabLayout from '../../../components/cars/tab/TabLayout';

export default function SegmentE() {
  return (
    <TabLayout>
      <SSRSuspense fallback={<Loading />}>
        <CarCatalogList segment="E" />
      </SSRSuspense>
    </TabLayout>
  );
}