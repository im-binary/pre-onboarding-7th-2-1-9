import styled from '@emotion/styled';

export default function NotFoundCar() {
  return (
    <Section>
      <p>차량이 없습니다.</p>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  font-weight: 700;
  border: 1px solid;
  height: 100%;
`;
