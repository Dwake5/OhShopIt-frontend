import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
`;

export const Img = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: auto;
`;

export const P = styled.p`
  margin: 0%;
  margin-top: 5px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  text-align: center;
`;

export const Button = styled.button`
  padding-top: 2px;
  background: red;
  width: 25px;
  margin: auto;

  &:hover {
    background-color: black;
    color: white;
  }
`;
