import { useEffect, useState } from 'react';
import CarCatalogList from '../../../components/cars/tab/CarCatalogList';
import TabLayout from '../../../components/cars/tab/TabLayout';
import { useCarList } from '../../../hooks/useCarList';

export default function MidSizeCar() {
  const [isLoading, setLoading] = useState(true);

  const [carList, invalidate] = useCarList({ segment: 'D' });

  useEffect(() => {
    invalidate();
    setLoading(false);
  }, []);

  if (isLoading) {
    return <TabLayout>불러오는 중...</TabLayout>;
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
