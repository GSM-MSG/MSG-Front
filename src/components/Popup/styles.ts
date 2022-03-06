import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: absolute;
  background: #fff;
  max-width: 20rem;
  width: 90%;
  height: 25rem;
  top: 4rem;
  right: 6.4rem;
  border-radius: 10px;
  padding: 1rem;
  box-sizing: border-box;

  ::after {
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
    content: "";
    position: absolute;
    top: -10px;
    right: 1rem;
  }
`;

export const Title = styled.h2`
  color: #000;
  text-align: center;
  margin-top: 0;
`;

export const Alarms = styled.div`
  display: flex;
  flex-direction: column;
`;
