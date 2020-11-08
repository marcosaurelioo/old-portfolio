import React from "react";
import Link from "next/link";

import { Body } from "../styles/components/footer";

const Footer = () => {
  return (
    <Body>
      <div className="content">
        <div className="title-box ">
          <Link href="#">
            <h1 className="glitch" data-text="MAARK">
              MAARK
            </h1>
          </Link>
          <span>Top</span>
        </div>
        <div className="redirects">
          <Link href="https://github.com/Maark007">
            <span>GITHUB</span>
          </Link>
          <Link href="https://www.linkedin.com/in/marcos007/">
            <span>LINKEDIN</span>
          </Link>
        </div>
        <p>marcosaureliolelo@outlook.com</p>
      </div>
    </Body>
  );
};

export default Footer;
