import CarCatalogList from '../../../components/cars/tab/CarCatalogList';
import TabLayout from '../../../components/cars/tab/TabLayout';
import { useSuvCarList } from '../../../hooks/useSuvCarList';

export default function SuvCar() {
  const [suvCarList] = useSuvCarList({ segment: 'SUV' });

  if (suvCarList.length === 0) {
    return (
      <TabLayout>
        <h1>차량이 없습니다.</h1>
      </TabLayout>
    );
  }

  return <CarCatalogList segmentCarList={suvCarList} />;
}
