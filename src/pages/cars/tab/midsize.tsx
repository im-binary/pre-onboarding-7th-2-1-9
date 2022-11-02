import { useEffect, useState } from 'react';
import NotFoundCar from '../../../components/NotFoundCar';
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
    return (
      <TabLayout>
        <h1>불러오는 중...</h1>
      </TabLayout>
    );
  }

  if (carList.length === 0) {
    return (
      <TabLayout>
        <NotFoundCar />
      </TabLayout>
    );
  }

  return <CarCatalogList segmentCarList={carList} />;
}
