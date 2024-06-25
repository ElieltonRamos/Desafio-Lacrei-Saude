'use client';
import styled from "styled-components";

export const footer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 90vw;
  margin: 20px;
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