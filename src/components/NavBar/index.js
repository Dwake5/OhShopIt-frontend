import React from "react";

import { NavDiv, H1 } from "./style";

const NavBar = ({ navScreen, changeScreen }) => {
  const testCurrent = check => {
    return navScreen === check;
  };

  return (
    <NavDiv>
      <H1 currentTab={testCurrent("add")} onClick={() => changeScreen("add")}>
        Add
      </H1>
      <H1 currentTab={testCurrent("shop")} onClick={() => changeScreen("shop")}>
        Shop
      </H1>
      <H1
        currentTab={testCurrent("invite")}
        onClick={() => changeScreen("invite")}
      >
        Invite
      </H1>
    </NavDiv>
  );
};

export default NavBar;
