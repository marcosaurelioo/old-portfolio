import styled from "styled-components";

export const Body = styled.div`
  height: 250px;
  width: 100%;
  & h1 {
    font: 1.5rem Anurati;
    letter-spacing: 5px;
    cursor: pointer;
    position: relative;
  }

  & .title-box {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    span {
      position: absolute;
      right: -30px;
      font-family: "Montserrat", sans-serif;
      transition: all 0.3s ease;
      opacity: 0;
    }
    :hover {
      span {
        opacity: 1;
        visibility: visible;
        transform: translateX(20px);
        transition: all 0.3s ease;
      }
    }
  }

  & .content {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  & .redirects {
    padding: 30px 0;
    span {
      padding: 0 20px;
      padding-bottom: 5px;
      cursor: pointer;
      font-family: "Montserrat", sans-serif;
      font-style: italic;
      position: relative;
      :before {
        content: "";
        position: absolute;
        width: 0;
        bottom: 0;
        height: 1px;
        background: #fff;
        transition: all 0.25s cubic-bezier(0.694, 0.048, 0.335, 1) 0.15s;
      }
      :hover {
        :before {
          transition: all 0.25s cubic-bezier(0.694, 0.048, 0.335, 1) 0.15s;
          width: 65%;
        }
      }
    }
  }
  & p {
    font-family: "Montserrat", sans-serif;
  }
`;
