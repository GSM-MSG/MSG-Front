import styled from "@emotion/styled";


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
  display: auto;

  div:nth-of-type(2) {
    position: relative;
    top: ${(props) => props.ExTop}vh;
    left: ${(props) => props.ExLeft}vw;
    line-height: 10px;
  }
  div > p:nth-of-type(1) {
    color: #5959ff;
    font-size: 22px;
    width: 500;
    text-align: ${(prop) => (prop.ExPosition ? "right" : "left")};
  }
  div > p:nth-of-type(2) {
    color: #fff;
    white-space: nowrap;
    font-size: 18px;
  }
  animation: fadeInDown .8s;
  @keyframes fadeInDown {
    0% {
      transform: translate3d(0, 100%, 0);
      opacity: 0;
    }
    to {
      transform: translateZ(0);
      opacity: 1;
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