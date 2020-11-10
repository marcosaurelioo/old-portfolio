import { createGlobalStyle } from "styled-components";
import { glitchAnim, glitchAnim2, glitchSkew } from './animations/keyframes'

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}

body {
   background: #000;
}

html {
 scroll-behavior: smooth;
}

@font-face {
  font-family: Anurati;
  src: url(Anurati.otf);
}

@font-face {
  font-family: Aileron;
  src: url(Ailerons-Regular.otf);
}

@font-face {
  font-family: Hacked;
  src: url(Hacked.ttf);
}

h1, h2, h3, h4, span, p {
  color: #fff;
}

.reset {
  text-decoration: none;
  padding: 0;
  margin: 0;
}

.glitch {
  position: relative;
  color: white;
  font-size: 4em;
  letter-spacing: 0.5em;
  animation: ${glitchSkew} 3s infinite linear alternate-reverse;
}

.glitch::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  left: 2px;
  text-shadow: -2px 0 #ff00c1;
  clip: rect(44px, 450px, 56px, 0);
  animation: ${glitchAnim} 3s infinite linear alternate-reverse;
}

.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  left: -2px;
  text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
  animation: ${glitchAnim2} 3s infinite linear alternate-reverse;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #000; 
}
 
::-webkit-scrollbar-thumb {
  background: #fff; 
}
`;
