import styled from "styled-components";
import React from "react";
import { Button } from "@material-ui/core";

export const ChatInput = ({ channelName, channelId }) => {

    const handleClick = () => {}
  return (
    <ChatInputContainer>
      <form action="">
        <input placeholder={`Message #Room`} />
        <Button hidden type="submit" onClick={sen}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
};

const ChatInputContainer = styled.div``;
