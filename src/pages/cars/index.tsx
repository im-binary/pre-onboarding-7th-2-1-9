import CarsList from '../../components/cars/tab/CarCatalogList';
import TabLayout from '../../components/cars/tab/TabLayout';
import { useAllCarList } from '../../hooks/useAllCarList';

export default function CarList() {
  const [allCarList] = useAllCarList();

  if (allCarList.length === 0) {
    return (
      <TabLayout>
        <h1>차량이 없습니다.</h1>
      </TabLayout>
    );
  }

  return <CarsList segmentCarList={allCarList} />;
}
