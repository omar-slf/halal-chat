import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase/firebase";

export const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => console.log(error));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src="data:image/png;base64,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" />
        <h1>Sign in to Halal chat</h1>
        <Button type="submit" onClick={handleSubmit}>
          Sign in with Google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0 0.24);
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  > button {
    margin: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;
