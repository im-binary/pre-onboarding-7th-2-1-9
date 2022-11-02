import styled from '@emotion/styled';

export default function Summary({
  attribute,
  amount,
}: {
  attribute: {
    brand: string;
    name: string;
    segment: string;
    fuelType: string;
    imageUrl: string;
  };
  amount: number;
}) {
  return (
    <Section>
      <div>
        <img src={`${attribute.imageUrl}`} alt="" />
      </div>
      <ul>
        <li>{attribute.brand}</li>
        <li>{attribute.name}</li>
        <li>월 {amount}</li>
      </ul>
    </Section>
  );
}

const Section = styled.section`
  div {
    height: 205px;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border: 1px solid red;
    }
  }

  ul {
    padding: 20px;
    font-size: 2rem;
    font-weight: 700;

    li:last-of-type {
      font-size: 1.7rem;
      font-weight: 400;
      text-align: end;
    }
  }
`;
