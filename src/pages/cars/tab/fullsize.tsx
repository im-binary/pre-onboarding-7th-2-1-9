import CarCatalogList from '../../../components/cars/tab/CarCatalogList';
import TabLayout from '../../../components/cars/tab/TabLayout';
import { useFullSizeCarList } from '../../../hooks/useFullSizeCarList';

export default function FullSizeCar() {
  const [fullSizeCarList] = useFullSizeCarList({ segment: 'E' });

  if (fullSizeCarList.length === 0) {
    return (
      <TabLayout>
        <h1>차량이 없습니다.</h1>
      </TabLayout>
    );
  }

  return <CarCatalogList segmentCarList={fullSizeCarList} />;
}
