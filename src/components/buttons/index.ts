'use client';
import styled from "styled-components";

export const buttonSecundary = styled.button`
  border-radius: 8px;
  border: 2px solid var(--green-midlle);
  padding: 10px 32px;
  color: var(--green-midlle);
  background-color: white;
`

export const buttonPrimary = styled.button`
  background-color: var(--green-midlle);
  border-radius: 8px;
  padding: 0.75rem 2rem;
  font-size: 1.125rem;
  font-weight: 700;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
  transition: all 0.2s ease 0s;
  margin: 0.5rem;
  border: none;
  color: white;
  width: 170px;

  &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
`;