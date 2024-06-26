'use client';
import styled from "styled-components";

export const footer = styled.footer`
  margin: 0px 1rem;
  border-top: 1px solid #b0e0d3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 0 0.5rem;
  height: 10rem;
  width: 95vw;
`;

export const link = styled.a`
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

export const div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 100%;
`;