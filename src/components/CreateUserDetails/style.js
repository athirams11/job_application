import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  height: 50px;
  font-size: 14px;
  padding: 10px;
  margin-top: 20px;
`;

export const ErrorText = styled.label`
  color: red;
  font-size: 13px;
`;

export const Title = styled.h1`
  font-weight: Bold;
  padding-bottom: 10px;
`;

export const SubTitle = styled.h6`
  font-weight: Bold;
  padding-bottom: 20px;
  padding-top: 20px;
`;

export const Button = styled.button`
  background-color: green;
  color: white;
  padding: 15px;
  width: 120px;
  border: 1px solid green;
  border-radius: 5px;
  font-size: 13px;
  margin-top: 20px;
`;

export const Checkbox = styled.div`
  display: flex;
  .form-check {
    display: block;
    min-height: 1.5rem;
    margin-bottom: 0.125rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px 20px 10px 20px;
    margin-right: 15px;
  }
  .form-check .form-check-input {
    float: left;
    margin-left: 1px;
    background-color: #ccc;
    border: 1px solid #ccc;
  }
  label {
    display: inline-block;
    padding-left: 10px;
    color: #ccc;
  }
  .form-check-input:checked {
    background-color: green;
    border-color: green;
  }
`;
