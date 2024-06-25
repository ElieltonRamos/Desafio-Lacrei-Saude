'use client';
import styled from "styled-components";

export const div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 24px;
`;

export const text = styled.p`
  color: var(--gray-ligth);
  font-size: 3rem;

  @media (max-width: 1040px) {
    font-size: 2rem;
  }

  @media (max-width: 520px) {
    font-size: 1.5rem;
  }
`;

export const h1 = styled.h1`
  color: var(--green-midlle);
  font-size: 32px;
`;