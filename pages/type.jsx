import React, { useState, useCallback } from "react";
import Layout from "../components/Layout";
import { Button, Fieldset, FormGroup, MultiChoice, Radio } from "govuk-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Back from "../components/Back";
import Router, { useRouter } from "next/router";

export default function Type() {
  const router = useRouter();

  const [submittedData, setSubmittedData] = useState();

  const validationSchema = Yup.object().shape({
    reportType: Yup.string()
      .oneOf(
        ["Adult", "Child", "Third Party"],
        "Select whether this LS record is for an adult, child or third party"
      )
      .nullable(),
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
    router.push("/passport-holder");
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

          <FormGroup>
            <Fieldset.Legend size="SMALL">
              What type of LS Record is this?
            </Fieldset.Legend>
            <MultiChoice
              mb={8}
              meta={{
                error: errors?.reportType?.message,
                touched: submitCount > 0,
              }}
            >
              <Radio type="radio" value="Adult" {...register("reportType")}>
                Adult
              </Radio>
              <Radio type="radio" value="Child" {...register("reportType")}>
                Child
              </Radio>
              <Radio
                type="radio"
                value="Third Party"
                {...register("reportType")}
              >
                Third Party
              </Radio>
            </MultiChoice>
            <Button type="submit">Submit</Button>
          </FormGroup>
        </Fieldset>
      </form>
    </Layout>
  );
}
