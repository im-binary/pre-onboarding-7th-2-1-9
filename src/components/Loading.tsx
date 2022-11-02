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
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  font-weight: 700;
  border: 1px solid;
  height: 100%;
`;
