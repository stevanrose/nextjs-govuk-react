import React, { useState } from "react";
import {
  Button,
  Fieldset,
  FormGroup,
  HintText,
  Label,
  LabelText,
  Input,
} from "govuk-react";

export default function DateofBirth({ nextStep, handleFormData, values }) {
  const submitFormData = (e) => {
    nextStep();
  };

  return (
    <form onSubmit={submitFormData}>
      <Fieldset>
        <Fieldset.Legend size="MEDIUM">When were they born?</Fieldset.Legend>

        <FormGroup>
          <Fieldset>
            <Label>
              <LabelText>Date of Birth</LabelText>
              <HintText>They probably know this</HintText>
              <Input
                mb={4}
                type="text"
                defaultValue={values.dateOfBirth}
                placeHolder="25/12/2001"
                onChange={handleFormData("dateOfBirth")}
              />
            </Label>
          </Fieldset>
        </FormGroup>
        <Button type="submit">Continue</Button>
      </Fieldset>
    </form>
  );
}
