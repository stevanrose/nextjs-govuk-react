import Layout from "../components/Layout";
import { Button, Fieldset } from "govuk-react";
import Router, { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <Layout>
      <Fieldset>
        <Fieldset.Legend isPageHeading size="XLARGE">
          Manage lost, stolen and recovered records
        </Fieldset.Legend>

        <Button onClick={() => router.push("/type")}>Start</Button>
      </Fieldset>
    </Layout>
  );
}
