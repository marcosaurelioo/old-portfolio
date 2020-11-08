import React from "react";
import Link from "next/link";

import { Body, Button } from "../styles/components/titles";

export const Title = () => {
  return (
    <Body>
      <div className="title-container">
        <h3>HELLO WORLD</h3>
        <h2 className="glitch" data-text="I AM MARCOS AURELIO">
          I AM MARCOS AURELIO
        </h2>
        <h4>Intuitive developer.</h4>
        <Link href="#myself">
          <Button>MY WORKS</Button>
        </Link>
      </div>
    </Body>
  );
};

export default Title;
