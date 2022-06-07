import styled from "@emotion/styled";
import { type } from "os";

//------------------All-------------------

export const BackGround = styled.div`
  z-index: 200;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000000cc;
`;

export const ExLogo = styled.div``;

export const Logo = styled.a`
  font-size: 2rem;
  padding: 0;
  margin: 0;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  position: fixed;
  top: 12px;
  left: 31px;
`;

export const ExPlus = styled.div`
  svg {
    position: fixed;
    right: 110px;
    top: 20px;
  }
`;

export const ExSearch = styled.div`
  svg {
    position: fixed;
    top: 138px;
    right: 630px;
    border: 0px solid red;
    border-radius: 5px;
    background-color: #fff;
  }
`;
//------------------FixClub-------------------

export const ExClubSearch = styled.div`
  svg {
    position: fixed;
    top: 138px;
    right: 585px;
    border: 0px solid red;
    border-radius: 5px;
    background-color: #fff;
  }
`;

export const ExClubElement = styled.div``;

//------------------AfterAdmin-------------------

export const ExFilter = styled.div`
  svg {
    position: fixed;
    top: 138.5px;
    right: 585px;
    border: 0px solid red;
    background-color: #fff;
    border-radius: 5px;
    padding: 6px;
    width: 37px;
    height: 37px;
  }
`;

export const ExListButton = styled.div`
  button {
    position: fixed;
    right: 456px;
    top: 560px;
    width: 5.3rem;
    height: 2.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    margin-right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4c53ff;
  }
`;

export const ExManageButton = styled.div``;

//------------------Admin-------------------

export const ClubAdmin = styled.div``;
export const AfterSchollAdmin = styled.div``;

//------------------TriAngel-------------------

type TriAngleType = {
  Triheight: number;
  Triturn: number;
};

type ExBox = {
  BoxTop?: number;
  BoxLeft?: number;
  BoxBottom?: number;
  BoxRight?: number;
  ExTop: number;
  ExLeft: number;
  ExPosition?: boolean;
};

export const ExBox = styled.div<ExBox>`
  position: absolute;
  top: ${(props) => props.BoxTop}vh;
  left: ${(props) => props.BoxLeft}vw;
  bottom: ${(props) => props.BoxBottom}vh;
  right: ${(props) => props.BoxRight}vw;

  div:nth-child(2) {
    position: relative;
    top: ${(props) => props.ExTop}vh;
    left: ${(props) => props.ExLeft}vw;
    line-height: 10px;
  }
  div > p:nth-child(1) {
    color: #5959ff;
    font-size: 22px;
    width: 500;
    text-align: ${(prop) => (prop.ExPosition ? "right" : "left")};
  }
  div > p:nth-child(2) {
    color: #fff;
    white-space: nowrap;
    font-size: 18px;
  }
  animation: fadeInDown 1s;
  @keyframes fadeInDown {
    0% {
      transform: translate3d(0, 100%, 0);
    }
    to {
      transform: translateZ(0);
    }
  }
`;

export const Triangle = styled.div<TriAngleType>`
  width: 0px;
  height: 0px;
  border-bottom: 12px solid #5959ff;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  transform: rotate(${(props) => props.Triturn}deg);
  ::before {
    content: "";
    position: absolute;
    top: 10px;
    right: -0.37mm;
    width: 3px;
    height: ${(props) => props.Triheight}vh;
    background-color: #5959ff;
  }
`;

export const Enter = styled.input`
  border: none;
  background-color: transparent;
  :focus {
    outline: none;
  }
`;
