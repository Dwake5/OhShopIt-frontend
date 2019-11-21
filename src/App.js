import React, { useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Add from "./components/navComponents/Add";
import Shop from "./components/navComponents/Shop";
import Invite from "./components/navComponents/Invite";

import { MainDiv, Padding, NoMarginP } from "./style";

const App = () => {
  const [navScreen, changeScreen] = useState("add");

  return (
    <MainDiv>
      <Header />
      <NoMarginP>Current Basket: HOME</NoMarginP>
      <Padding>
        <NavBar navScreen={navScreen} changeScreen={changeScreen} />
        {navScreen === "add" && <Add />}
        {navScreen === "shop" && <Shop />}
        {navScreen === "invite" && <Invite />}
      </Padding>
      <Footer />
    </MainDiv>
  );
};

export default App;
