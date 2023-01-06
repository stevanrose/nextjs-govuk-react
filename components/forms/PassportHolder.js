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

export default function PassportHolder({ nextStep, handleFormData, values }) {
  const submitFormData = (e) => {
    nextStep();
  };

  return (
    <form onSubmit={submitFormData}>
      <Fieldset>
        <Fieldset.Legend size="MEDIUM">
          Who is the passport holder?
        </Fieldset.Legend>

        <FormGroup>
          <Fieldset>
            <Label>
              <LabelText>Forename(s)</LabelText>
              <HintText>They probably know this</HintText>
              <Input
                mb={4}
                type="text"
                defaultValue={values.forenames}
                placeHolder="Forename(s)"
                onChange={handleFormData("forenames")}
              />
            </Label>
          </Fieldset>

          <Fieldset>
            <Label>
              <LabelText>Surname</LabelText>
              <HintText>They probably know this</HintText>
              <Input
                mb={4}
                type="text"
                defaultValue={values.surname}
                placeHolder="Surname"
                onChange={handleFormData("surname")}
              />
            </Label>
          </Fieldset>
          <Button type="submit">Continue</Button>
        </FormGroup>
      </Fieldset>
    </form>
  );
}
