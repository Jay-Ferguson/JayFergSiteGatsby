import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { navigate } from "gatsby";
import styled from "styled-components";
import IntroCard from "../components/IntroCard";
import ExternalButton from "../components/ExternalButton";
import Recaptcha from "react-recaptcha";

//styles 

const StyledRecaptcha = styled(Recaptcha)`
  margin-top: 4rem;
  margin-left:3rem;
  align-self: center;
`;

const StyledFormField = styled(Form)`
  display: flex;
  flex-flow: column;
  padding: 2rem;
  align-self: center;
`;

const StyledField = styled(Field)`
  border-radius: 10px;
  width: 25rem;
  height: 2rem;
  margin: 1rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border: none;
  word-wrap: break-word;
  word-break: break-all;

  @media (min-width: 600px) {
    min-width: 45rem;
  }
`;

const StyledErrorMessage = styled(ErrorMessage)`
  font-size: 1.5rem;
  margin-left: 1.5rem;
  color: white;
`;

const Input = styled.input`
  border-radius: 10px;
  width: 25rem;
  height: 2rem;
  margin: 1rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border: none;
  word-wrap: break-word;
  word-break: break-all;

  @media (min-width: 600px) {
    min-width: 45rem;
  }

  &:active {
  }
`;
const StyledContactP = styled.p`
  font-size: 1.5rem;

  @media (min-width: 600px) {
    font-size: 2rem;
  }
`;

const MessageInput = styled(Input)`
  height: 10rem;
  margin-bottom:4rem;
`;





const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
function ContactForm() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <StyledContactP>
        If you have a project in mind you’d like to work on, or just interested
        in talking please feel free to contact me via email.
      </StyledContactP>

      <Formik
        initialValues={{ fullName: "", email: "", message: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.fullName) {
            errors.fullName = "Required";
          } else if (values.fullName.length <= 1) {
            errors.fullName = "must be at least 2 characters";
          }
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.message) {
            errors.messsage = "Required";
          } else if (values.message.length <= 1) {
            errors.message = "message must be at least 2 characters";
          }
          return errors;
        }}
        onSubmit={(data, { resetForm }) => {
          console.log(data);
          if (token !== null) {
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({
                "form-name": "contact-form",
                ...data,
                "g-recaptcha-response": token,
              }),
            })
              .then(() => {
                resetForm();
                navigate("/thanks/");
                alert("send");
              })
              .catch((error) => alert(error));
          }
        }}
      >
        <StyledFormField
          name="contact-form"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
        >
          <StyledField type="hidden" name="form-name" />
          <StyledField type="hidden" name="bot-field" />
          <label htmlFor="fullName" style={{ marginLeft: "1rem" }}>
            Full name*
          </label>
          <StyledField name="fullName" type="text" />
          <StyledErrorMessage
            name="fullName"
            component="p"
          ></StyledErrorMessage>
          {/* <ErrorMessage name="fullName" /> */}
          <br />
          <label htmlFor="email" style={{ marginLeft: "1rem" }}>
            Email*
          </label>
          <StyledField name="email" type="text" />
          <StyledErrorMessage name="email" component="p"></StyledErrorMessage>
          {/* <ErrorMessage name="email" /> */}
          <br />
          <label
            htmlFor="message"
            style={{ marginLeft: "1rem", marginTop: "2rem" }}
          >
            Message*
          </label>
         
          <MessageInput
            name="message"
            type="text-area"
            as="textarea"
            placeholder="Message"
          />
          <StyledErrorMessage name="message" component="p"></StyledErrorMessage>



          <StyledRecaptcha
            sitekey={process.env.SITE_RECAPTCHA_KEY}
            render="explicit"
            theme="dark"
            verifyCallback={(response) => {
                 setToken(response);
               }}
               onloadCallback={() => {
                    console.log("done loading!");
               }}
               />

          <br />
          <ExternalButton type="submit" href="">
            Send email
          </ExternalButton>
        </StyledFormField>
      </Formik>
    </>
  );
}

export default ContactForm;
