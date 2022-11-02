import { Fragment } from 'react';
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

  return (
    <TabLayout>
      {suvCarList.map(({ id, attribute, amount }) => (
        <Fragment key={id}>
          <li>{attribute.brand}</li>
          <li>{attribute.name}</li>
          <li>
            {attribute.segment} / {attribute.fuelType}
          </li>
          <li>월 {amount} 원 부터</li>
          <li>
            <img src={attribute.imageUrl} alt="" />
          </li>
        </Fragment>
      ))}
    </TabLayout>
  );
}
