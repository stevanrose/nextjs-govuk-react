import { Panel } from "govuk-react";
import Layout from "../components/Layout";

export default function Confirmation() {
  return (
    <Layout>
      <Panel title="Application complete">
        Your reference number
        <br />
        <strong>HDJ2123F</strong>
      </Panel>
    </Layout>
  );
}
