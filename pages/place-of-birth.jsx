import React, { useState, useCallback } from "react";
import Layout from "../components/Layout";
import { Button, Fieldset, FormGroup, InputField } from "govuk-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Back from "../components/Back";
import Router, { useRouter } from "next/router";

export default function PlaceOfBirth() {
  const router = useRouter();

  const [submittedData, setSubmittedData] = useState();

  const validationSchema = Yup.object().shape({
    town: Yup.string().required("Town of Birth is required."),
    country: Yup.string().required("Country of Birth is required"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
  } = useForm(formOptions);

  const errorsToShow = Object.keys(errors);

  const handleFormSubmit = useCallback((values) => {
    setSubmittedData(values);
    alert(JSON.stringify(values));
    router.push("/confirmation");
  });

  return (
    <Layout>
      <Back />
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Fieldset>
          <Fieldset.Legend isPageHeading size="XLARGE">
            Create a lost or stolen record
          </Fieldset.Legend>

          <Fieldset.Legend size="LARGE">
            Details of the lost/stolen passport
          </Fieldset.Legend>

          <Fieldset.Legend size="MEDIUM">Where were they born?</Fieldset.Legend>

          <FormGroup>
            <InputField
              mb={4}
              hint="You probably know this as well"
              meta={{
                touched: submitCount > 0,
                error: errors?.town?.message,
              }}
              input={register("town")}
            >
              <Fieldset.Legend size="SMALL">Town of Birth</Fieldset.Legend>
            </InputField>

            <InputField
              mb={4}
              hint="You probably know this as well"
              meta={{
                touched: submitCount > 0,
                error: errors?.country?.message,
              }}
              input={register("country")}
            >
              <Fieldset.Legend size="SMALL">Town of Birth</Fieldset.Legend>
            </InputField>
          </FormGroup>
        </Fieldset>
        <Button type="submit">Submit</Button>
      </form>
    </Layout>
  );
}
