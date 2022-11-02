/* eslint-disable @next/next/no-img-element */
import styled from '@emotion/styled';
import Link from 'next/link';
import { useCarList } from '../../../hooks/useCarList';
import NotFoundCar from '../../NotFoundCar';

type Segment = 'E' | 'D' | 'C' | 'SUV';

export default function CarCatalogList({ segment }: { segment?: Segment }) {
  const carList = useCarList({ segment });

  if (carList.length === 0) {
    return <NotFoundCar />;
  }

  return (
    <Ul>
      {carList.map(({ id, attribute, amount }) => (
        <li key={id}>
          <Link href={`/cars/${id}`}>
            <Brand>{attribute.brand}</Brand>
            <Name>{attribute.name}</Name>
            <CarType>
              {attribute.segment} / {attribute.fuelType}
            </CarType>
            <Amount>월 {amount} 원 부터</Amount>
            <CarImage>
              <img src={attribute.imageUrl} alt="" />
            </CarImage>
          </Link>
        </li>
      ))}
    </Ul>
  );
}

const Ul = styled.ul`
  li {
    border: 1px solid green;
    padding: 20px;
    font-size: 1.4rem;

    a {
      text-decoration: none;
      display: grid;
      grid-template-columns: 1fr 152px;
    }
  }
`;

const Brand = styled.div`
  font-weight: 700;
`;

const Name = styled.div`
  font-weight: 700;
  margin-bottom: 8px;
`;

const CarType = styled.div`
  font-size: 1.2rem;
`;

const Amount = styled.div`
  font-size: 1.2rem;
`;

const CarImage = styled.div`
  grid-column: 2;
  grid-row: 1/5;
  vertical-align: middle;

  img {
    display: block;
    height: 100%;
    width: 100%;
  }
`;
