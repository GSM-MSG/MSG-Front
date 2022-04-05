import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const Cycle = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  height: calc(100vh - 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingImg = styled.img`
  object-position: center;
  animation-name: ${Cycle};
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
