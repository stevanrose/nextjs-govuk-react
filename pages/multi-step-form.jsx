import { useState } from "react";

import { BackLink, Button, Fieldset, FormGroup, InputField } from "govuk-react";
import Layout from "../components/Layout";
import PassportHolder from "../components/forms/PassportHolder";
import DateOfBirth from "../components/forms/DateOfBirth";
import PlaceOfBirth from "../components/forms/PlaceOfBirth";
import Confirmation from "../components/forms/Confirmation";

export default function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    forenames: "",
    surname: "",
    dateOfBirth: "",
    town: "",
    country: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleInputData = (input) => (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const forms = [
    <PassportHolder
      nextStep={nextStep}
      prevStep={prevStep}
      handleFormData={handleInputData}
      values={formData}
    />,
    <DateOfBirth
      nextStep={nextStep}
      prevStep={prevStep}
      handleFormData={handleInputData}
      values={formData}
    />,
    <PlaceOfBirth
      nextStep={nextStep}
      prevStep={prevStep}
      handleFormData={handleInputData}
      values={formData}
    />,
    <Confirmation values={formData} />,
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
      <Fieldset>
        <Fieldset.Legend isPageHeading size="XLARGE">
          Create a lost or stolen record
        </Fieldset.Legend>

        <Fieldset.Legend size="LARGE">
          Details of the lost/stolen passport
        </Fieldset.Legend>
        {forms[step]}
      </Fieldset>
    </Layout>
  );
}
