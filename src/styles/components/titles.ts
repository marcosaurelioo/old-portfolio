import styled from "styled-components";

export const Body = styled.div`
  height: 90vh;
  width: 100%;
  padding: 130px 8vw;
  transition: all 0.7s;
  h3 {
    font: 19px Anurati;
    opacity: 0.5;
    width: 100%;
  }
  h2 {
    margin-top: 10px;
    letter-spacing: 5px;
    width: 100%;
    font: 8vw Hacked;
  }
  h4 {
    font-family: "Montserrat", sans-serif;
    font-style: italic;
  }
  @media screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px !important;
    transition: all 0.7s;
    .title-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    h2 {
      font-size: 50px;
      text-align: center;
    }
    h3 {
      text-align: center;
    }
    h4 {
      padding-top: 10px;
    }
  } ;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  padding: 20px;
  width: 210px;
  border: 1px solid #fff;
  color: #fff;
  background: transparent;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  transition: all 0.7s;
  clip-path: polygon(0 0, 100% 5%, 100% 100%, 0% 90%);
  :hover {
    transition: all 0.7s;
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  }
  @media screen and (max-width: 700px) {
    width: 150px;
    height: 50px;
  }
`;
