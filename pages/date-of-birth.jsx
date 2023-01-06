import React, { useState, useCallback } from "react";
import Layout from "../components/Layout";
import { Button, Fieldset, FormGroup, InputField } from "govuk-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Back from "../components/Back";
import Router, { useRouter } from "next/router";

export default function DateOfBirth() {
  const router = useRouter();

  const [submittedData, setSubmittedData] = useState();

  const validationSchema = Yup.object().shape({
    dob: Yup.string().required("Date of Birth is required."),
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
    router.push("/place-of-birth");
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

          <Fieldset.Legend size="MEDIUM">When were they born?</Fieldset.Legend>

          <FormGroup>
            <InputField
              mb={4}
              hint="They'll probably know this"
              meta={{
                touched: submitCount > 0,
                error: errors?.dob?.message,
              }}
              input={register("dob")}
            />
          </FormGroup>
        </Fieldset>
        <Button type="submit">Submit</Button>
      </form>
    </Layout>
  );
}
