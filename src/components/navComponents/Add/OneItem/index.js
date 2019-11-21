import React from "react";

import { Div, P, Img, Column, Button } from "./style";

const OneItem = ({ name, quantity, img }) => {
  return (
    <Div>
      <Column>
        <P>{name}</P>
      </Column>
      <Column>
        <P>{quantity}</P>
      </Column>
      <Column>
        <Img alt="persons face" src={img} />
      </Column>
      <Column>
        <Button>X</Button>
      </Column>
    </Div>
  );
};

export default OneItem;
