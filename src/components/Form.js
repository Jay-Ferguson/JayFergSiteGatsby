import React from "react";
import styled from 'styled-components';
import IntroCard from "../components/IntroCard";
import ExternalButton from '../components/ExternalButton';

const FormField = styled.form`
display:flex;
flex-flow:column;
padding:2rem;
align-self: center;
`

const Input = styled.input`
border-radius:10px;
width: 25rem;
height:2rem;
margin:1rem;
padding:.5rem 1rem .5rem 1rem;
border:none;
word-wrap: break-word;
word-break: break-all;


&:active{

border:none;
}

`
const MessageInput = styled(Input)`
height:10rem;
`

export default function Form() {

  return (
    <>
      <IntroCard>
        <p>
          If you have a project in mind you’d like to work on, or just
          interested in talking please feel free to contact me via email.
        </p>


        <FormField
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />

        <label htmlFor="email">
          <Input type="email" name="email" placeholder="Email" />
        </label>

        <label htmlFor="name">
          <Input type="text" name="name" placeholder="Name"/>
        </label>

        <label htmlFor="message">
          <MessageInput as="textarea" type="text" name="message" placeholder="Message"/>
        </label>

        <ExternalButton type="submit" href="">Send</ExternalButton>
      </FormField>

      </IntroCard>

   
    </>
  );
}
