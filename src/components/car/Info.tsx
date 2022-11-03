import styled from '@emotion/styled';
import { Theme } from '../../styles/Theme';
import { formatDate } from '../../utils/date';

export default function CarInfo({
  attribute,
  startDate,
}: {
  attribute: { brand: string; name: string; segment: string; fuelType: string };
  startDate: string;
}) {
  return (
    <Ul>
      <li>차량 정보</li>
      <li>
        <span>차종</span>
        <span>{attribute.segment}</span>
      </li>
      <li>
        <span>연료</span>
        <span>{attribute.fuelType}</span>
      </li>
      <li>
        <span>이용 가능일</span>
        <span>{formatDate(new Date(startDate))}</span>
      </li>
    </Ul>
  );
}

const Ul = styled.ul`
  word-break: keep-all;

  li {
    padding: 14px 20px;
    font-size: 1.7rem;
  }

  li:first-of-type {
    background-color: aliceblue;
    color: #fff;
    background-color: ${Theme.pointColor};
    font-weight: 700;
  }

  li:not(li:first-of-type) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-of-type {
      font-weight: 700;
    }
    span + span {
      margin-left: 10px;
    }
  }
`;
