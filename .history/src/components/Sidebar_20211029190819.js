import { Create, FiberManualRecord } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Hey wassap</h2>
          <h3>
            <FiberManualRecord />
            Omar
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  flex: 0.3;
  max-width: 260px;
  margin-top: 60px;
  border-top: 1px solid #49274b;
  color: #f9f9f9;
`;
const SidebarHeader = styled.div``;
const SidebarInfo = styled.div``;
