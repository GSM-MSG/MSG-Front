import styled from "@emotion/styled";

type StyledProps = {
  bgcolor: boolean;
  isModal: boolean;
};

type ModalProps = {
  isModal: boolean;
};

type BtnProps = {
  isModal: boolean;
  club: any;
};

type BeingProps = {
  isBeing: boolean;
};

export const ModifyLayout = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(3px);
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: animate 0.5s;

  @keyframes animate {
    0% {
      opacity: 0;
      margin-top: -100px;
      height: calc(100vh + 100px);
    }
    100% {
      opacity: 1;
      margin-bottom: 0px;
      height: 100vh;
    }
  }
`;

export const ModifyBox = styled.div<ModalProps>`
  position: fixed;
  width: ${(props) => (props.isModal ? "846px" : "700px")};
  height: ${(props) => (props.isModal ? "610px" : "780px")};
  background: #1e1e1c;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 200;
  padding: ${(props) => (props.isModal ? "30px 172px" : "20px 98px")};
  transition: width 0.5s, height 0s, gap 0s;
  gap: 30px;

  ul {
    padding: 0;
  }

  p {
    width: 65%;
    margin-bottom: 2px;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: ${(props) => (props.isModal ? "center" : "flex-end")};
  }
`;

export const ProfileImg = styled.img`
  border-radius: 100%;
  width: 100px;
`;

export const ModifyInput = styled.input`
  background: none;
  border: 1px solid #fff;
  border-radius: 5px;
  height: 40px;
  color: #fff;
  text-align: center;
  font-size: 22px;

  :focus {
    outline: none;
  }
`;

export const FindBtn = styled.button`
  position: relative;
  color: #fff;
  background: #5959ff;
  top: -4px;
  right: 0;
  width: 100px;
  height: 50px;
  margin-left: 14px;
  z-index: 300;
  cursor: pointer;
`;

export const DoneBtn = styled.button<BtnProps>`
  color: #fff;
  background: ${(props) => (props.club !== undefined ? "#4C53FF" : "#A3A3A3")};
  width: 50%;
  height: 60px;
  border-radius: 10px;
  gap: ${(props) => (props.isModal ? "30px" : 0)};
  font-weight: 600;
  font-size: 26px;
  line-height: 35px;
  cursor: ${(props) => (props.club ? "pointer" : "auto")};
`;
