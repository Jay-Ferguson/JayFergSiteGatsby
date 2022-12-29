import React from "react";
import { useState, useRef } from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import IntroCard from "../components/IntroCard";
import ExternalButton from "../components/ExternalButton";
import { Formik, Field, Form, ErrorMessage } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect } from "react";



const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function ContactForm() {
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
 

      <Formik
        initialValues={{ fullName: "", email: "", message: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.fullName) {
            errors.fullName = "Please enter all information.";
          } else if (values.fullName.length <= 1) {
            errors.fullName = "must be at least 2 characters";
          }
          if (!values.email) {
            errors.email = "Please enter required fields.";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "please enter a valid email address";
          } if (!values.message) {
            errors.messsage = "a message is required";
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
              headers: { "Content-type": "application/" },
              body: encode({
                "form-name": "contact",
                ...data,
                "g-recaptcha-response": token,
              }),
            })
              .then(() => {
                resetForm();
                navigate(`../pages/success.js`);
              })
              .catch((error) => alert(error));
          }
        }}
      >
        <FormField
          name="contact"
          method="post"
          data-netlify-honeypot="bot-field"
          // action="/success/"
          // onSubmit="submit"
          data-netlify="true"
          data-netlify-ReCAPTCHA="true"
        >
          <Field type="hidden" name="form-name" />
          <Field type="hidden" name="bot-field" />

          <label htmlFor="fullName" style={{ marginLeft: "1rem" }}>
            Full name*{" "}
          </label>
          <StyledField name="fullName" type="text" placeholder="name" />
          <StyledErrorMessage name="fullName" component="p" />
          <br></br>
          <label htmlFor="email" style={{ marginLeft: "1rem" }}>
            Email*
          </label>
          <StyledField name="email" type="text" placeholder="email" />
          <StyledErrorMessage name="email" component="p"></StyledErrorMessage>
          <br></br>

          <label htmlFor="message">
            <MessageInput
              as="textarea"
              type="text"
              name="message"
              placeholder="Message"
            />
          </label>

          <StyledReCAPTCHA
            //   sitekey={process.env.SITE_RECAPTCHA_KEY}
            sitekey={process.env.SITE_RECAPTCHA_KEY}
            render="explicit"
            theme="dark"
            verifyCallback={(response) => {
              setToken(response);
            }}
            onloadCallback={() => {
              console.log("done api response!");
            }}
          />

          <ExternalButton type="submit" href="">
            Send email
          </ExternalButton>
        </FormField>
      </Formik>
    </>
  );
}
