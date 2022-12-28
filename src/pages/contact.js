import * as React from "react";
import Layout from "../components/Layout";
import IntroCard from "../components/IntroCard";
import StyledTitleCard from "../components/TitleCard";
import ContactForm from "../components/ContactForm";
import ContactSend from "../components/ContactSend";



export default function contact() {
  return (
    <Layout>
      <StyledTitleCard>Contact</StyledTitleCard>

      <IntroCard>
        <>
        {/* <ContactSend></ContactSend> */}
        <ContactForm></ContactForm>
        </>
      </IntroCard>
    </Layout>
  );
}
