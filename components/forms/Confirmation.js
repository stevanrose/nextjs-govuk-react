import React, { useState } from "react";
import { Button, CellHeader, Fieldset, Table } from "govuk-react";

export default function Confirmation({ values }) {
  return (
    <Fieldset>
      <h2 class="govuk-heading-m">
        Check your answers before sending your application
      </h2>
      <dl class="govuk-summary-list govuk-!-margin-bottom-9">
        <div class="govuk-summary-list__row">
          <dt class="govuk-summary-list__key">Name</dt>
          <dd class="govuk-summary-list__value">
            {values.forenames} {values.surname}
          </dd>
          <dd class="govuk-summary-list__actions">
            <a class="govuk-link" href="#">
              Change<span class="govuk-visually-hidden"> name</span>
            </a>
          </dd>
        </div>
        <div class="govuk-summary-list__row">
          <dt class="govuk-summary-list__key">Date of Birth</dt>
          <dd class="govuk-summary-list__value">{values.dateOfBirth}</dd>
          <dd class="govuk-summary-list__actions">
            <a class="govuk-link" href="#">
              Change<span class="govuk-visually-hidden"> name</span>
            </a>
          </dd>
        </div>
        <div class="govuk-summary-list__row">
          <dt class="govuk-summary-list__key">Town of Birth</dt>
          <dd class="govuk-summary-list__value">{values.town}</dd>
          <dd class="govuk-summary-list__actions">
            <a class="govuk-link" href="#">
              Change<span class="govuk-visually-hidden"> name</span>
            </a>
          </dd>
        </div>
        <div class="govuk-summary-list__row">
          <dt class="govuk-summary-list__key">Country of Birth</dt>
          <dd class="govuk-summary-list__value">{values.country}</dd>
          <dd class="govuk-summary-list__actions">
            <a class="govuk-link" href="#">
              Change<span class="govuk-visually-hidden"> name</span>
            </a>
          </dd>
        </div>
      </dl>

      <Button type="submit">Submit</Button>
    </Fieldset>
  );
}
