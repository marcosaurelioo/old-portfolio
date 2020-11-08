import { keyframes } from "styled-components";

export const openWindow = keyframes`
 0% {
  height: 0;
 }
 100% {
   height: 100vh;
 }
`;

export const closeWindow = keyframes`
 0% {
   height: 100vh;
   background: #fff;
 }
 100% {
   background: #fff;
   height: 0;
 }
`;

export const worksModelEffect = keyframes`
 0% {
   transform-origin: left;
   transform: scaleX(0);
   background-color: #000;
 }
 100% {
   transform-origin: left;
   transform: scaleX(1);
   background-color: #000;
 }`;

export const glitchAnim = keyframes`
0% {
    clip: rect(78px, 9999px, 28px, 0);
    transform: skew(0.4deg);
  }
  5% {
    clip: rect(83px, 9999px, 16px, 0);
    transform: skew(0.47deg);
  }
  10% {
    clip: rect(45px, 9999px, 83px, 0);
    transform: skew(0.91deg);
  }
  15% {
    clip: rect(17px, 9999px, 49px, 0);
    transform: skew(0.94deg);
  }
  20% {
    clip: rect(89px, 9999px, 85px, 0);
    transform: skew(0.61deg);
  }
  25% {
    clip: rect(50px, 9999px, 37px, 0);
    transform: skew(0.23deg);
  }
  30% {
    clip: rect(66px, 9999px, 92px, 0);
    transform: skew(0.6deg);
  }
  35% {
    clip: rect(43px, 9999px, 76px, 0);
    transform: skew(0.78deg);
  }
  40% {
    clip: rect(74px, 9999px, 34px, 0);
    transform: skew(0.08deg);
  }
  45% {
    clip: rect(16px, 9999px, 34px, 0);
    transform: skew(0.28deg);
  }
  50% {
    clip: rect(90px, 9999px, 11px, 0);
    transform: skew(0.38deg);
  }
  55% {
    clip: rect(26px, 9999px, 6px, 0);
    transform: skew(0.91deg);
  }
  60% {
    clip: rect(100px, 9999px, 44px, 0);
    transform: skew(0.06deg);
  }
  65% {
    clip: rect(69px, 9999px, 8px, 0);
    transform: skew(0.28deg);
  }
  70% {
    clip: rect(16px, 9999px, 43px, 0);
    transform: skew(0.35deg);
  }
  75% {
    clip: rect(12px, 9999px, 53px, 0);
    transform: skew(0.2deg);
  }
  80% {
    clip: rect(93px, 9999px, 18px, 0);
    transform: skew(0.94deg);
  }
  85% {
    clip: rect(25px, 9999px, 60px, 0);
    transform: skew(0.43deg);
  }
  90% {
    clip: rect(49px, 9999px, 2px, 0);
    transform: skew(0.73deg);
  }
  95% {
    clip: rect(59px, 9999px, 64px, 0);
    transform: skew(0.25deg);
  }
  100% {
    clip: rect(11px, 9999px, 39px, 0);
    transform: skew(0.59deg);
  }
`;

export const glitchAnim2 = keyframes`
0% {
    clip: rect(80px, 9999px, 44px, 0);
    transform: skew(0.45deg);
  }
  5% {
    clip: rect(84px, 9999px, 95px, 0);
    transform: skew(0.68deg);
  }
  10% {
    clip: rect(71px, 9999px, 82px, 0);
    transform: skew(0.53deg);
  }
  15% {
    clip: rect(62px, 9999px, 90px, 0);
    transform: skew(0.86deg);
  }
  20% {
    clip: rect(98px, 9999px, 57px, 0);
    transform: skew(0.27deg);
  }
  25% {
    clip: rect(14px, 9999px, 45px, 0);
    transform: skew(0.64deg);
  }
  30% {
    clip: rect(31px, 9999px, 99px, 0);
    transform: skew(0.52deg);
  }
  35% {
    clip: rect(92px, 9999px, 28px, 0);
    transform: skew(0.85deg);
  }
  40% {
    clip: rect(91px, 9999px, 29px, 0);
    transform: skew(0.02deg);
  }
  45% {
    clip: rect(5px, 9999px, 17px, 0);
    transform: skew(0.69deg);
  }
  50% {
    clip: rect(10px, 9999px, 72px, 0);
    transform: skew(0.28deg);
  }
  55% {
    clip: rect(9px, 9999px, 32px, 0);
    transform: skew(0.16deg);
  }
  60% {
    clip: rect(69px, 9999px, 96px, 0);
    transform: skew(0.32deg);
  }
  65% {
    clip: rect(63px, 9999px, 6px, 0);
    transform: skew(0.33deg);
  }
  70% {
    clip: rect(94px, 9999px, 57px, 0);
    transform: skew(0.47deg);
  }
  75% {
    clip: rect(88px, 9999px, 97px, 0);
    transform: skew(0.28deg);
  }
  80% {
    clip: rect(77px, 9999px, 95px, 0);
    transform: skew(0.54deg);
  }
  85% {
    clip: rect(34px, 9999px, 33px, 0);
    transform: skew(0.62deg);
  }
  90% {
    clip: rect(85px, 9999px, 97px, 0);
    transform: skew(0.14deg);
  }
  95% {
    clip: rect(94px, 9999px, 35px, 0);
    transform: skew(0.72deg);
  }
  100% {
    clip: rect(15px, 9999px, 17px, 0);
    transform: skew(0.9deg);
  }
`;

export const glitchSkew = keyframes`
0% {
    transform: skew(5deg);
  }
  10% {
    transform: skew(3deg);
  }
  20% {
    transform: skew(2deg);
  }
  30% {
    transform: skew(1deg);
  }
  40% {
    transform: skew(-2deg);
  }
  50% {
    transform: skew(2deg);
  }
  60% {
    transform: skew(2deg);
  }
  70% {
    transform: skew(-3deg);
  }
  80% {
    transform: skew(2deg);
  }
  90% {
    transform: skew(1deg);
  }
  100% {
    transform: skew(4deg);
  }
`;
