/* eslint-disable @next/next/no-img-element */
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useCarList } from '../../hooks/useCarList';
import { Theme } from '../../styles/Theme';
import { newCar } from '../../utils/newCar';
import NotFoundCar from '../NotFoundCar';

type Segment = 'E' | 'D' | 'C' | 'SUV';

export default function CarCatalogList({ segment }: { segment?: Segment }) {
  const carList = useCarList({ segment });

  if (carList.length === 0) {
    return <NotFoundCar />;
  }

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Ul>
        {carList.map(({ id, attribute, amount, createdAt }) => (
          <li key={id}>
            {newCar(new Date(createdAt)) && <New>신규</New>}

            <Link href={`/${id}`}>
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
    </motion.div>
  );
}

const Ul = styled.ul`
  word-break: keep-all;
  border-bottom: 1px solid;

  li {
    font-size: 1.4rem;
    position: relative;

    &:hover {
      background-color: #d9d9d959;
    }

    a {
      padding: 20px;
      text-decoration: none;
      display: grid;
      grid-template-columns: 1fr 152px;
    }
  }

  li + li {
    border-top: 1px solid;
  }
`;

const New = styled.div`
  border: 1px solid;
  position: absolute;
  top: 7px;
  right: 8px;
  padding: 4px 15px;
  background-color: ${Theme.pointColor};
  color: #fff;
  border-radius: 42px;
  font-size: 1.2rem;
  font-weight: 700;
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
  width: 152px;
  height: 80px;

  img {
    display: block;
    height: 100%;
    width: 100%;
  }
`;
