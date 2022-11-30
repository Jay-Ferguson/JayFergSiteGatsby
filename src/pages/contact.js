import * as React from "react";
import Layout from "../components/Layout";
import Form from "../components/Form";
import StyledTitleCard from "../components/TitleCard";


export default function contact() {
  return (
    <Layout>
      <StyledTitleCard>
          Contact
      </StyledTitleCard>

      <Form></Form>
    </Layout>
  );
}
