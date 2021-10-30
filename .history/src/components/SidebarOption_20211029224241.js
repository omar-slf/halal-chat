import styled from "styled-components";
import React from "react";
import { db } from "../firebase/firebase";

export const SidebarOption = ({ Icon, title, addChangeOption }) => {
  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");

    if(channelName){
        db.collection('rooms').add({
            
        })
    }
  };
  const selectChannel = () => {};

  return (
    <SidebarOptionContainer
      onClick={addChangeOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <spam>#</spam>
          {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
};

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }
  > h3 > span {
    padding: 15px;
  }
`;
const SidebarOptionChannel = styled.div``;
