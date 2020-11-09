import styled from "styled-components";

export const Body = styled.div`
  height: auto;
  width: 100%;
  padding: 10px 0 20px 0; 
  margin: 55px 0;
  & h1 {
    color: #fff;
    width: 100%;
    font-family: Hacked;
    font-weight: 100;
    font-size: 70px;
    letter-spacing: 5px;
    padding-bottom: 20px;
  }
  & .paragraph {
    width: 100%;
    padding: 25px 8vw;
    p {
      font: 24px "Montserrat", sans-serif;
      text-align: justify;
      width: 55%;
    }
  }
  & .logo-content {
    display: flex;
    width: 100%;
    img {
      opacity: 0.3;
      transition: all 0.5s ease;
    }
    span {
      font: 13px "Montserrat", sans-serif;
      font-weight: bold;
      opacity: 0.3;
      transition: all 0.5s ease;
      margin-top: 10px;
      text-align: center;
    }
  }
  & .image-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 0px 20px 0 0;
    :hover {
      img,
      span {
        transition: all 0.5s ease;
        opacity: 1;
      }
    }
  }
  & .top {
    margin-top: 10px;
  }
  @media screen and (max-width: 915px) {
    padding: 0;
    & .paragraph {
      h1 {
        text-align: center;
        font-size: 9vw;
      }
      p {
        width: 100%;
      }
    }
    & .logo-content {
      justify-content: space-evenly;
      flex-wrap: wrap;
      .image-container {
        margin-top: 20px;
      }
    }
  }
`;
