import React from "react";

import Header from "../components/header";
import Title from "../components/title";
import AboutMe from "../components/about-me";
import MyWorks from "../components/works";

import { Body, Content } from "../styles/index";

export default function Home() {
  return (
    <Body>
      <Header>
        <Content>
          <Title />
          <AboutMe />
          <MyWorks />
        </Content>
      </Header>
    </Body>
  );
}
