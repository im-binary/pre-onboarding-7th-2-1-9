import styled from '@emotion/styled';
import React from 'react';

export default function Loading() {
  return (
    <Section>
      <p>불러오는 중....</p>
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
