import * as React from "react";
import Layout from "../components/Layout";
import Form from "../components/Form";
import StyledTitleCard from "../components/TitleCard";
import ContactForm from "../components/ContactForm";


export default function contact() {
  return (
    <Layout>
      <StyledTitleCard>
          Contact
      </StyledTitleCard>

      {/* <Form></Form> */}
      <ContactForm></ContactForm>
    </Layout>
  );
}
