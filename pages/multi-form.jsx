import Head from "next/head";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { BackLink, Button, Fieldset, FormGroup, InputField } from "govuk-react";
import Layout from "../components/Layout";

export default function MultiForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => console.log(data);

  const PassportHolderFields = () => {
    return (
      <Fieldset>
        <Fieldset.Legend size="MEDIUM">
          Who is the passport holder?
        </Fieldset.Legend>

        <FormGroup>
          <InputField
            mb={4}
            hint="You probably know this"
            input={register("forenames")}
          >
            <Fieldset.Legend size="SMALL">Forename(s)</Fieldset.Legend>
          </InputField>

          <InputField
            mb={4}
            hint="You probably know this as well"
            input={register("surname")}
          >
            <Fieldset.Legend size="SMALL">Surname</Fieldset.Legend>
          </InputField>
        </FormGroup>
      </Fieldset>
    );
  };

  const DateOfBirthFields = () => {
    return (
      <Fieldset>
        <Fieldset.Legend size="MEDIUM">When were they born?</Fieldset.Legend>
        <FormGroup>
          <InputField
            mb={4}
            hint="They'll probably know this"
            input={register("dob")}
          />
        </FormGroup>
      </Fieldset>
    );
  };

  const PlaceOfBirthFields = () => {
    return (
      <Fieldset>
        <Fieldset.Legend size="MEDIUM">Where were they born?</Fieldset.Legend>

        <FormGroup>
          <InputField
            mb={4}
            hint="You probably know this as well"
            input={register("town")}
          >
            <Fieldset.Legend size="SMALL">Town of Birth</Fieldset.Legend>
          </InputField>

          <InputField
            mb={4}
            hint="You probably know this as well"
            input={register("country")}
          >
            <Fieldset.Legend size="SMALL">Town of Birth</Fieldset.Legend>
          </InputField>
        </FormGroup>
      </Fieldset>
    );
  };

  const [step, setStep] = useState(0);

  const Navigation = () => (
    <Fieldset>
      {step === fieldGroups.length - 1 && <Button type="submit">SAVE</Button>}

      {step < fieldGroups.length - 1 && (
        <Button
          onClick={() => {
            setStep(step + 1);
          }}
        >
          NEXT
        </Button>
      )}
    </Fieldset>
  );

  const fieldGroups = [
    <PassportHolderFields />,
    <DateOfBirthFields />,
    <PlaceOfBirthFields />,
  ];

  return (
    <Layout>
      <BackLink
        onClick={() => {
          setStep(step - 1);
        }}
      >
        Back
      </BackLink>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset>
          <Fieldset.Legend isPageHeading size="XLARGE">
            Create a lost or stolen record
          </Fieldset.Legend>

          <Fieldset.Legend size="LARGE">
            Details of the lost/stolen passport
          </Fieldset.Legend>
          {fieldGroups[step]}
          <Navigation />
        </Fieldset>
      </form>
    </Layout>
  );
}
