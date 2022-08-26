import React from "react";

import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { Input, ErrorText, Title, SubTitle, Button, Checkbox } from "./style";

export default function UserDetails({ userData }) {
  const { user, page, error, handleChange, setNextPage } = userData;

  return (
    <Form>
      {!page && (
        <>
          <Title>Personal Information</Title>
          <Form.Group size="lg" controlId="name">
            <Input
              name="name"
              id="name"
              type="text"
              placeholder="Name"
              value={user.name}
              onChange={(e) => handleChange(e)}
            />
            <ErrorText>{error.name}</ErrorText>
          </Form.Group>
          <Form.Group size="lg" controlId="email">
            <Input
              name="email"
              id="email"
              type="email"
              value={user.email}
              placeholder="Email"
              onChange={(e) => handleChange(e)}
            />
            <ErrorText>{error.email}</ErrorText>
          </Form.Group>
          <Form.Group size="lg" controlId="phone">
            <Input
              name="phone"
              id="phone"
              type="number"
              placeholder="Phone number"
              value={user.phone}
              pattern="[1-9]{1}[0-9]{9}"
              onChange={(e) => handleChange(e)}
            />
            <ErrorText>{error.phone}</ErrorText>
          </Form.Group>
          <Form.Group size="lg" controlId="gender">
            <SubTitle> Select Gender</SubTitle>
            <Checkbox>
              <Form.Check
                type="checkbox"
                id="male"
                label="Male"
                name="gender"
                value="male"
                checked={user.gender === "male"}
                onChange={(e) => handleChange(e)}
              />
              <Form.Check
                type="checkbox"
                id="female"
                label="Female"
                name="gender"
                value="female"
                checked={user.gender === "female"}
                onChange={(e) => handleChange(e)}
              />
            </Checkbox>
            <ErrorText>{error.gender}</ErrorText>
          </Form.Group>
          <Button
            block
            size="lg"
            type="button"
            variant="success"
            onClick={(e) => {
              setNextPage(e);
            }}
          >
            NEXT
          </Button>
        </>
      )}
    </Form>
  );
}
