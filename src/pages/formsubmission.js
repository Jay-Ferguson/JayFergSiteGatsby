import * as React from "react";
import Layout from "../components/Layout";
import StyledTitleCard from "../components/TitleCard";
import ContactForm from "../components/ContactForm";

const formsubmission = () => {
  return (
    <Layout>
      <StyledTitleCard>Thank you for reaching out!</StyledTitleCard>

      {/* <Form></Form> */}
      <ContactForm></ContactForm>
    </Layout>
  );
};

export default formsubmission;