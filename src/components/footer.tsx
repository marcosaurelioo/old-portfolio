import React from "react";
import Link from "next/link";

import { Body } from "../styles/components/footer";

const Footer = () => {

  function onLinkClick() {
    return window.scrollTo({ top: 0 });
  }

  return (
    <Body>
      <div className="content">
        <div className="title-box">
            <h1 onClick={onLinkClick} className="glitch" data-text="MAARK">
              MAARK
            </h1>
          <span>Top</span>
        </div>
        <div className="redirects">
          <Link href="https://github.com/Maark007">
            <a target="_black" className="reset">
              <span>GITHUB</span>
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/marcos007/">
            <a target="_black" className="reset">
              <span>LINKEDIN</span>
            </a>
          </Link>
        </div>
        <p>marcosaureliolelo@outlook.com</p>
      </div>
    </Body>
  );
};

export default Footer;
