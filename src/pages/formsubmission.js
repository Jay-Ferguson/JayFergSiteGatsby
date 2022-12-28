import * as React from "react";
import Layout from "../components/Layout";
import StyledTitleCard from "../components/TitleCard";
import ContactForm from "../components/ContactForm";

export default function formsubmission() {
  return (
    <Layout>
      <StyledTitleCard>Thank you for reaching out!</StyledTitleCard>

      {/* <Form></Form> */}
      <ContactForm></ContactForm>
    </Layout>
  );
}
