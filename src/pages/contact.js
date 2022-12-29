import * as React from "react";
import Layout from "../components/Layout";
import IntroCard from "../components/IntroCard";
import StyledTitleCard from "../components/TitleCard";
import Head from '../shared/Head';
import ContactForm2 from "../components/ContactForm2";




export default function contact() {
  return (
    <>
      <Head title="contact" />
      <Layout>
        <StyledTitleCard>Contact</StyledTitleCard>

        <IntroCard>
          <>
            <ContactForm2></ContactForm2>
          </>
        </IntroCard>
      </Layout>
    </>
  );
}
