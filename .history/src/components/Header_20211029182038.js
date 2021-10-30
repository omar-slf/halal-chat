import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { AccessTime, Search } from "@material-ui/icons";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLEft>
        <HeaderAvata onClick={() => {}} />
        <AccessTime />
      </HeaderLEft>
      <HeaderSearch>
        <Search />
        <input type="text" placeholder="Search" />
      </HeaderSearch>
    </HeaderContainer>
  );
};

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  border-color: #421f44;
  text-align: center;
  display: flex;
  padding: 
`;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 10px 0;
  color: white;
  background-color: var(--slack-color);
`;

const HeaderLEft = styled.div`
  flex: 0.3;
  align-items: center;
  margin-left: 20px;
  display: flex;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvata = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
