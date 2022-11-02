import CarCatalogList from '../../../components/cars/tab/CarCatalogList';
import TabLayout from '../../../components/cars/tab/TabLayout';
import { useSmallSizeCarList } from '../../../hooks/useSmallSizeCarList';

export default function SmallCar() {
  const [smallSizeCarList] = useSmallSizeCarList({ segment: 'C' });

  if (smallSizeCarList.length === 0) {
    return (
      <TabLayout>
        <h1>차량이 없습니다.</h1>
      </TabLayout>
    );
  }

  return <CarCatalogList segmentCarList={smallSizeCarList} />;
}
