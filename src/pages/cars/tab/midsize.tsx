import CarCatalogList from '../../../components/cars/tab/CarCatalogList';
import TabLayout from '../../../components/cars/tab/TabLayout';
import { useMidSizeCarList } from '../../../hooks/useMidSizeCarList';

export default function MidSizeCar() {
  const [midSizeCarList] = useMidSizeCarList({ segment: 'D' });

  if (midSizeCarList.length === 0) {
    return (
      <TabLayout>
        <h1>차량이 없습니다.</h1>
      </TabLayout>
    );
  }

  return <CarCatalogList segmentCarList={midSizeCarList} />;
}
