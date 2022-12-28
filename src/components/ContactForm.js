import React from "react";
import { useState, useRef } from "react";
import styled from "styled-components";
import IntroCard from "../components/IntroCard";
import ExternalButton from "../components/ExternalButton";
import { Formik, Field, Form, ErrorMessage } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import { tokenToString } from "typescript";
import { useEffect } from "react";

const FormField = styled(Form)`
  display: flex;
  flex-flow: column;
  padding: 2rem;
  align-self: center;
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
`;

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function ContactForm() {
  const [token, setToken] = useState(null);

  useEffect(() => {
     const script = document.createElement("script")
     script.src = "https://www.google.com/recaptcha/api.js"
     script.async = true
     script.defer = true
     document.body.appendChild(script)
  }, [])

  return (
    <IntroCard>
      <StyledContactP>
        If you have a project in mind you’d like to work on, or just interested
        in talking please feel free to contact me via email.
      </StyledContactP>

      <Formik
        initialValues={{ function: "", email: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.fullName) {
            errors.fullName = "required";
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
          return errors;
        }}
        onSubmit={(data) => {
          fetch("/", {
            method: "POST",
            headers: { "Content-type": "application/" },
            body: encode({
              "form-name": "contact",
              ...data,
                  "g-recaptcha-response":token,
            }),
          })
            .then(() => {
              alert("send");
            })
            .catch((error) => alert(error));
        }}
      >
        <FormField
          name="contact"
          method="post"
          data-netlify-honeypot="bot-field"
          data-netlify="true"
          data-netlify-ReCAPTCHA="true"
        >
          <Field type="hidden" name="form-name" />
          <Field type="hidden" name="bot-field" />

          <label htmlFor="fullName">Full name:</label>
          <Field name="fullName" type="text" />
          <ErrorMessage name="fullName" />
          <br></br>
          <label htmlFor="email">Email</label>
          <Field name="email" type="text" />
          <ErrorMessage name="email"></ErrorMessage>
          <br></br>

          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />

          <label htmlFor="email">
            <Input type="email" name="email" placeholder="Email" />
          </label>

          <label htmlFor="name">
            <Input type="text" name="name" placeholder="Name" />
          </label>

          <label htmlFor="message">
            <MessageInput
              as="textarea"
              type="text"
              name="message"
              placeholder="Message"
            />
          </label>
          <ReCAPTCHA
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

          <ExternalButton type="submit" href="">
            Send
          </ExternalButton>
        </FormField>
      </Formik>
    </IntroCard>
  );
}
