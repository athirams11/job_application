import styled from "styled-components";

export const PreviousButton = styled.span`
  color: gray;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  padding-bottom: 20px;
`;

export const Title = styled.h2`
  font-weight: Bold;
  padding-bottom: 10px;
`;

export const Hr = styled.hr`
  border-top: 2px solid gray;
  padding-top: 20px;
`;
export const ArrowLeft = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    padding-right: 25px;
  }
  &::after,
  &::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    left: 3px;
  }
  &::after {
    width: 6px;
    height: 6px;
    border-bottom: 2px solid;
    border-left: 2px solid;
    transform: rotate(45deg);
    bottom: 8px;
  }
  &::before {
    width: 13px;
    height: 1px;
    bottom: 10px;
    background: #ccc;
  }
`;

export const Div = styled.div`
  display: inline;
`;

export const Radio = styled.div`
  .form-check-input:checked {
    background-color: green;
    border-color: green;
  }
  .form-check-input.is-valid ~ .form-check-label {
    color: black;
  }
`;
