import styled from '@emotion/styled';
import { Theme } from '../../../styles/Theme';

export default function Insurance({
  insurance,
}: {
  insurance: { name: string; description: string }[];
}) {
  return (
    <Ul>
      <li>보험</li>
      {insurance.map(({ name, description }, index) => (
        <li key={`${name}-${index}`}>
          <span>{name}</span>
          <span>{description}</span>
        </li>
      ))}
    </Ul>
  );
}

const Ul = styled.ul`
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
  }
`;
