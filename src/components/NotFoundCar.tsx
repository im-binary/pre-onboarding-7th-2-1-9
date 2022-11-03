import styled from '@emotion/styled';

export default function NotFoundCar() {
  return (
    <Section>
      <p>차량이 없습니다.</p>
    </Section>
  );
}

const Section = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.7rem;
  font-weight: 700;
`;
