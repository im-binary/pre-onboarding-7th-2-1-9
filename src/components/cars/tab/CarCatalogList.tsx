import Link from 'next/link';
import React from 'react';
import { CarItem } from '../../../model/CarItem';
import TabLayout from './TabLayout';

export default function CarCatalogList({
  segmentCarList,
}: {
  segmentCarList: CarItem[];
}) {
  return (
    <TabLayout>
      <ul>
        {segmentCarList.map(({ id, attribute, amount }) => (
          <li key={id}>
            <Link
              href={`/cars/${id}?fuelType=${attribute.fuelType}&segment=${attribute.segment}`}
            >
              <div>{attribute.brand}</div>
              <div>{attribute.name}</div>
              <div>
                {attribute.segment} / {attribute.fuelType}
              </div>
              <div>월 {amount} 원 부터</div>
              <div>
                <img src={attribute.imageUrl} alt="" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </TabLayout>
  );
}
