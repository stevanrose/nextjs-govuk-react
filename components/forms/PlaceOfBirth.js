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

export default function PlaceOfBirth({ nextStep, handleFormData, values }) {
  const submitFormData = (e) => {
    nextStep();
  };

  return (
    <form onSubmit={submitFormData}>
      <Fieldset>
        <Fieldset.Legend size="MEDIUM">Where were they born?</Fieldset.Legend>

        <FormGroup>
          <Fieldset>
            <Label>
              <LabelText>Town</LabelText>
              <HintText>They probably know this</HintText>
              <Input
                mb={4}
                type="text"
                defaultValue={values.town}
                placeHolder="Town"
                onChange={handleFormData("town")}
              />
            </Label>
          </Fieldset>

          <Fieldset>
            <Label>
              <LabelText>Country</LabelText>
              <HintText>They probably know this</HintText>
              <Input
                mb={4}
                type="text"
                defaultValue={values.country}
                placeHolder="Country"
                onChange={handleFormData("country")}
              />
            </Label>
          </Fieldset>
          <Button type="submit">Continue</Button>
        </FormGroup>
      </Fieldset>
    </form>
  );
}
