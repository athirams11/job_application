import React from "react";
import check from "../../assets/image/big-green-check.png";
import { Title } from "../CreateUserDetails/style";
import { Container, Parent, Child } from "./style";
export default function Success() {
  return (
    <Container>
      <Child>
        <img src={check} alt="Success" />
      </Child>
      <Parent>
        <Title>Application Submitted</Title>
        <span style={{ color: "grey" }}>
          Thanks for your interest!
          <br />
          Our review team will review your application and call you for
          interview
        </span>
      </Parent>
    </Container>
  );
}
