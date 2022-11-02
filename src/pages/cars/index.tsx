import { useEffect, useState } from 'react';
import CarsList from '../../components/cars/tab/CarCatalogList';
import TabLayout from '../../components/cars/tab/TabLayout';
import { useAllCarList } from '../../hooks/useAllCarList';

export default function CarList() {
  const [isLoading, setLoading] = useState(true);

  const [allCarList, invalidate] = useAllCarList();

  useEffect(() => {
    invalidate();
    setLoading(false);
  }, []);

  if (isLoading) {
    return (
      <TabLayout>
        <h1>불러오는 중...</h1>
      </TabLayout>
    );
  }

  if (allCarList.length === 0) {
    return (
      <TabLayout>
        <h1>차량이 없습니다.</h1>
      </TabLayout>
    );
  }

  return <CarsList segmentCarList={allCarList} />;
}
