import styled, { css } from "styled-components";
import { openWindow, closeWindow } from "../animations/keyframes";

type ToogleProps = {
  isOpen: boolean;
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
  animation: ${closeWindow} 0.75s cubic-bezier(0.23, 1, 0.32, 1);
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
