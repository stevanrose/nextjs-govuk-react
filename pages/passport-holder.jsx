import React, { useState, useCallback } from "react";
import Layout from "../components/Layout";
import { Button, Fieldset, InputField } from "govuk-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Back from "../components/Back";
import Router, { useRouter } from "next/router";

export default function PassportHolder() {
  const router = useRouter();

  const [submittedData, setSubmittedData] = useState();

  const validationSchema = Yup.object().shape({
    forenames: Yup.string().required("Forenames is required."),
    surname: Yup.string().required("Surname is required"),
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
    router.push("/date-of-birth");
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

          <Fieldset.Legend size="MEDIUM">
            Who is the passport holder?
          </Fieldset.Legend>

          <InputField
            mb={4}
            hint="You probably know this"
            meta={{
              touched: submitCount > 0,
              error: errors?.forenames?.message,
            }}
            input={register("forenames")}
          >
            <Fieldset.Legend size="SMALL">Forename(s)</Fieldset.Legend>
          </InputField>

          <InputField
            mb={4}
            hint="You probably know this as well"
            meta={{
              touched: submitCount > 0,
              error: errors?.surname?.message,
            }}
            input={register("surname")}
          >
            <Fieldset.Legend size="SMALL">Surname</Fieldset.Legend>
          </InputField>
        </Fieldset>
        <Button type="submit">Submit</Button>
      </form>
    </Layout>
  );
}
