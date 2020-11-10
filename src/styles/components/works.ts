import styled, { css } from "styled-components";
import { worksModelEffect } from "../animations/keyframes";

type WorkBoxProps = {
  effect: any;
  image?: string;
};

export let Body = styled.div`
  & h1 {
    width: 100%;
    text-align: center;
    padding: 10px;
    letter-spacing: 5px;
    font: 60px Hacked;
    margin-bottom: 50px;
  }
  & .content {
    padding: 40px 8vw;
  }
  & .works-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
  }
  .translatedWork {
    margin: 120px 8vw 0 0;
  }
  .normal {
    margin: 120px 0 0;
  }
  @media screen and (max-width: 800px) {
    h1 {
      margin-bottom: 25px ;
      font-size: 55px;
    }
  }
`;

export let WorkBox = styled.div<WorkBoxProps>`
  width: 80%;
  height: 440px;
  background: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  transition: all 0.7s;
  ${(props) =>
    !props.effect &&
    css`
      background: #000;
    `}
  & .effect {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 101%;
    height: 440px;
    position: relative;
    backdrop-filter: brightness(0.2);
    :after {
      position: absolute;
      content: "";
      height: 100%;
      width: 100%;
      background: transparent;
      z-index: 10;
      ${(props) =>
        props.effect &&
        css`
          animation: ${worksModelEffect} 1.75s
            cubic-bezier(0.694, 0.048, 0.335, 1) reverse;
        `}
    }
  }
  @media screen and (max-width: 800px) {
    height: 310px;
    width: 100%;
    .effect {
      height: 100% !important;
      width: 101% !important;
    }
  }
`;

export const WorkContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 50px 50px;
  .work-box {
    display: flex;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    span {
      font-style: italic;
      margin: 3px 0;
    }
  }
  @media screen and (max-width: 800px) {
    padding: 30px 30px;
    span {
      display: none;
    }
  }
`;

export const Button = styled.a<WorkBoxProps>`
  @keyframes setZindex {
    0% {
      z-index: 0;
    }
    100% {
      z-index: 0;
    }
  }
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 20px;
  width: 210px;
  border: 1px solid #fff;
  color: #fff;
  font-weight: bold;
  background: transparent;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.7s;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  :hover {
    transition: all 0.7s;
    clip-path: polygon(0 0, 100% 5%, 100% 100%, 0% 90%);
  }
  ${(props) =>
    props.effect &&
    css`
      animation: setZindex 1.8s;
      z-index: 100;
    `}
  @media screen and (max-width: 800px) {
    width: 150px;
    height: 45px;
  }
`;
