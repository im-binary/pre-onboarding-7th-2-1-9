import Loading from '../../components/Loading';
import { SSRSuspense } from '../../components/SSRSuspense';
import CarCatalogList from '../../components/tab/CarCatalogList';
import TabLayout from '../../components/tab/TabLayout';

export default function SegmentDPage() {
  return (
    <TabLayout>
      <SSRSuspense fallback={<Loading />}>
        <CarCatalogList segment="D" />
      </SSRSuspense>
    </TabLayout>
  );
}
