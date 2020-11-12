import React from "react";

import { Body, Button } from "../styles/components/titles";

export const Title = () => {

  const onLinkClick = () => {
    return document.getElementById("myself")?.scrollIntoView();
  };

  return (
    <Body>
      <div className="title-container">
        <h3>HELLO WORLD</h3>
        <h2 className="glitch" data-text="I AM MARCOS AURELIO">I AM MARCOS AURELIO</h2>
        <h4>Intuitive developer.</h4>
        <Button onClick={onLinkClick}>MY WORKS</Button>
      </div>
    </Body>
  );
};

export default Title;
