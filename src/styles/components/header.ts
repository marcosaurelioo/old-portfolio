import styled, { css } from "styled-components";
import { openWindow, closeWindow } from "../animations/keyframes";

type ToogleProps = {
  isOpen: boolean | undefined;
};

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  h3 {
    font: 1.3rem Anurati;
    letter-spacing: 5px;
    color: #ffff;
  }
  .menu {
    cursor: pointer;
    height: 17px;
  }
`;

export const ToggleIcon = styled.div<ToogleProps>`
  position: relative;
  width: 28px;
  height: 2px;
  background: #ffff;
  cursor: pointer;
  transition: all 0.7s ease;
  :before {
    content: "";
    position: absolute;
    background: #fff;
    margin-top: 10px;
    width: 14px;
    height: 2px;
    transition: all 0.7s ease;
  }
  ${(props) =>
    props.isOpen &&
    css`
      transition: all 0.7s ease;
      transform: rotate(45deg);
      background: #000;
      :before {
        transform: rotate(-90deg);
        transition: all 0.7s ease;
        margin-top: 1px;
        height: 2px;
        width: 28px;
        background: #000;
      }
    `}
`;

export const FloatHeader = styled.div<ToogleProps>`
  ${(props) =>
    props.isOpen === false &&
    css`
      animation: ${closeWindow} 0.75s cubic-bezier(0.23, 1, 0.32, 1);
    `}
  width: 100%;
  ${(props) =>
    props.isOpen &&
    css`
      height: 100vh;
      width: 100%;
      background: #fff;
      position: fixed;
      animation: ${openWindow} 0.75s cubic-bezier(0.23, 1, 0.32, 1);
      h3 {
        color: #000 !important;
        transition: color 0.75s ease-in-out;
      }
    `}
`;

export const OpenedMenu = styled.div`
  height: 100%;
  width: 100%;
  padding: 40px;
  & .spacing {
    padding-top: 10px;
  }
  & .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between
  }
  & h1 {
    color: #000;
    font-family: "Montserrat", sans-serif;
    cursor: pointer;
    position: relative;
    font-size: 2.5rem;
    width: fit-content;
    :before {
      content: "";
      position: absolute;
      width: 0;
      bottom: 0;
      height: 3px;
      background: #000;
      transition: all 0.25s cubic-bezier(0.694, 0.048, 0.335, 1) 0.15s;
    }
    :hover {
      :before {
        transition: all 0.25s cubic-bezier(0.694, 0.048, 0.335, 1) 0.15s;
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 690px) {
    padding: 10px 40px !important;
    h1 {
      font-size: 30px;
    }
  }
`;
