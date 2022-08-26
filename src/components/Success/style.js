import styled from "styled-components";

export const Container = styled.div`
  padding-top: ${window.innerHeight / 3}px;
`;

export const Center = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export const Parent = styled.div`
  padding-top: 15px;
  text-align: center;
`;
export const Child = styled.div`
  text-align: center;
  display: block;
`;
