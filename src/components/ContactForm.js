import React from "react";
import styled from "styled-components";
import IntroCard from "../components/IntroCard";
import ExternalButton from "../components/ExternalButton";
import {Formik, Field, Form, ErrorMessage } from "formik";


const FormField = styled.form`
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



const encode = data => {
     return Object.keys(data)
     .map(key => econdoeURIComponent(key) + "=" + encodeURIComponent(data[key]))
     .join("&")
} 
function ContactForm(){
     onSubmit={data => {
          console.log(data)
          fetch("/", {
               method:"POST",
               headers: {"Content-type": "application/"},
               body: encode({
                    "form-name": "contact",
                    ...data,
               }),
          })
          .then(() => {
               alert("send")
          })
          .catch(error => alert(error))
     }}
}

export default function Form() {
  return (
       <IntroCard>
        <StyledContactP>
          If you have a project in mind you’d like to work on, or just
          interested in talking please feel free to contact me via email.
        </StyledContactP>

     <Formik
     initialValues={{function:"", email:""}}
     validate={values => {
          const errors = {}
          if (!values.fullName) {
               errors.fullName = "required"
          } else if(values.fullName.length <= 1) {
               errors.fullName = "must be at least 2 characters"
          }
          if(!values.email){
               errors.email = "required"
          } else if (
               !/^[A-Z0-9._%+-]+@[A-ZO-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
               errors.email = "invalid email address"
          } 
          return errors
     }} 
     onSubmit={data => {
          console.log(data)
     }}
     
     
     >
        <FormField
          method="post"
          data-netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
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

          <ExternalButton type="submit" href="">
            Send
          </ExternalButton>
        </FormField>
    </Formik>
      </IntroCard>
  );
}
