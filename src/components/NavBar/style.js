import styled from "styled-components";

export const NavDiv = styled.div`
  margin-left: 10%
  width: 80%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 4px solid black;
`;

export const H1 = styled.h1`
  margin-top: -5px;
  margin-bottom: 3px;
  ${({ currentTab }) =>
    currentTab &&
    `
    color: blue;
  `}
  
  &:hover {
    text-decoration: underline;
  }
`;

export const ArrowDown = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid black;
`;
