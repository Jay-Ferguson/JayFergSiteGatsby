import * as React from "react";
import Layout from "../components/Layout";

import StyledTitleCard from "../components/TitleCard";
import ContactForm from "../components/ContactForm";


export default function contact() {
  return (
    <Layout>
      <StyledTitleCard>
          Contact
      </StyledTitleCard>


      <ContactForm></ContactForm>
    </Layout>
  );
}
