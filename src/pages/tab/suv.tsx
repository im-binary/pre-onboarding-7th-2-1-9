import Loading from '../../components/Loading';
import { SSRSuspense } from '../../components/SSRSuspense';
import CarCatalogList from '../../components/tab/CarCatalogList';
import TabLayout from '../../components/tab/TabLayout';

export default function SegmentSUVPage() {
  return (
    <TabLayout>
      <SSRSuspense fallback={<Loading />}>
        <CarCatalogList segment="SUV" />
      </SSRSuspense>
    </TabLayout>
  );
}
