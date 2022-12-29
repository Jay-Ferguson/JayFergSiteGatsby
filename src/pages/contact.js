import * as React from "react";
import Layout from "../components/Layout";
import IntroCard from "../components/IntroCard";
import StyledTitleCard from "../components/TitleCard";
import ContactForm from "../components/ContactForm";
import ContactForm2 from "../components/ContactForm2";
import ContactSend from "../components/ContactSend";



export default function contact() {
  return (
    <Layout>
      <StyledTitleCard>Contact</StyledTitleCard>

      <IntroCard>
        <>
        {/* <ContactSend></ContactSend> */}
        {/* <ContactForm></ContactForm> */}
        <ContactForm2></ContactForm2>

        </>
      </IntroCard>
    </Layout>
  );
}
