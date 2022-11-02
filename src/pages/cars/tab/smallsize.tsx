import { useEffect, useState } from 'react';
import CarCatalogList from '../../../components/cars/tab/CarCatalogList';
import TabLayout from '../../../components/cars/tab/TabLayout';
import { useCarList } from '../../../hooks/useCarList';

export default function SmallCar() {
  const [isLoading, setLoading] = useState(true);

  const [carList, invalidate] = useCarList({ segment: 'C' });

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

  if (carList.length === 0) {
    return (
      <TabLayout>
        <h1>차량이 없습니다.</h1>
      </TabLayout>
    );
  }

  return <CarCatalogList segmentCarList={carList} />;
}
