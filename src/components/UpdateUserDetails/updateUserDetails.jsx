import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import { ErrorText, Button } from "../CreateUserDetails/style";
import { PreviousButton, Title, Hr, ArrowLeft, Radio } from "./style";

export default function UpdateUserDetails({ userData }) {
  const { job_titles, user, setPage, error, onSubmit, handleChange } = userData;

  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [isClickSubmit, setClickSubmit] = useState(false);
  const handleSubmit = (e) => {
    console.log(termsAndConditions);
    setClickSubmit(true);
    termsAndConditions ? onSubmit(e) : setClickSubmit(false);
  };
  return (
    <Form>
      <PreviousButton onClick={() => setPage("")}>
        <ArrowLeft />
        <span>PREVIOUS STEP</span>
      </PreviousButton>
      <Title>Select Job Position</Title>
      <Hr />
      <Form.Group size="lg" controlId="job_title">
        <Radio>
          {job_titles.map((position) => (
            <div key={position} className="mb-3">
              <Form.Check
                type="radio"
                name="job_title"
                value={position}
                checked={user.job_title === position}
                onChange={(e) => handleChange(e)}
                label={position}
              ></Form.Check>
            </div>
          ))}
        </Radio>
        <ErrorText>{error.job_title}</ErrorText>
      </Form.Group>
      <Form.Group size="lg" controlId="terms" style={{ paddingBottom: 30 }}>
        <Form.Check
          type="checkbox"
          id="terms"
          checked={termsAndConditions}
          onChange={() => setTermsAndConditions(!termsAndConditions)}
        >
          <Form.Check.Input
            type="checkbox"
            isValid
            checked={termsAndConditions}
            onChange={() => setTermsAndConditions(!termsAndConditions)}
          />
          <Form.Check.Label>
            I Accept The
            <span style={{ color: "green", fontWeight: "bold" }}>
              {" "}
              Terms Of Conditions{" "}
            </span>
            And
            <span style={{ color: "green", fontWeight: "bold" }}>
              {" "}
              Privacy Policy
            </span>
          </Form.Check.Label>
        </Form.Check>
        {isClickSubmit && !termsAndConditions && (
          <ErrorText>
            Please accept terms of conditions and privacy policy
          </ErrorText>
        )}
      </Form.Group>
      <Button
        block
        size="lg"
        type="button"
        variant="success"
        onClick={(e) => handleSubmit(e)}
      >
        SUBMIT
      </Button>
    </Form>
  );
}
