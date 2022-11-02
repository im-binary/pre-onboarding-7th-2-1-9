import { Fragment } from 'react';
import TabLayout from '../../../components/cars/tab/TabLayout';
import { useFullSizeCarList } from '../../../hooks/useFullSizeCarList';

export default function FullSizeCar() {
  const [fullSizeCarList] = useFullSizeCarList({ segment: 'E' });

  console.log(fullSizeCarList);
  if (fullSizeCarList.length === 0) {
    return (
      <TabLayout>
        <h1>차량이 없습니다.</h1>
      </TabLayout>
    );
  }

  return (
    <TabLayout>
      {fullSizeCarList.map(({ id, attribute, amount }) => (
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
