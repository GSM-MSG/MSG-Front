import styled from "@emotion/styled";

export const AfterMoveBg = styled.div`
  z-index: 200;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(1, 1, 0, 0.6);
  backdrop-filter: Blur(2px);
`;
export const AfterMoveBox = styled.div`
  z-index: 200;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 56rem;
  height: 56rem;
  height: 37rem;
  border-radius: 10px;
  background-color: white;
  color: black;
  text-align: center;
  h2 {
    margin-top: 4rem;
  }
  svg {
    margin-top: 2.5rem;
    margin-bottom: 3.5rem;
  }
  p {
    font-size: 24px;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 0.2rem;
  }
  @media (max-width: 65rem) {
    width: 85vw;
  }
`;
export const AfterMoveBt = styled.button`
  width: 23rem;
  height: 3rem;
  background-color: #4c53ff;
  font-size: 1.5rem;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 2rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &:hover:after {
    right: -10%;
    border-radius: 5rem;
  }

  ::after {
    content: "";
    display: block;
    width: 120%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 100%;
    background: rgba(0, 0, 0, 0.1);
    transition: 0.5s cubic-bezier(0.23, 0.56, 0.68, 0.38);
  }
`;
export const NotToDay = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  input[type="checkbox"] + label {
    cursor: pointer;
  }
`;
