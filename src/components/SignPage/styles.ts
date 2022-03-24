import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const Show = keyframes`
  0% {
    opacity: 0;
    scale: 0;
  }
  100% {
    opacity: 1;
    scale: 1;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const Logo = styled.div`
  flex: 1.5;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 790px) {
    flex: auto;
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
`;

export const Login = styled.div`
  flex: 1;
  background-color: #fff;
  border-top-left-radius: 3rem;
  border-bottom-left-radius: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1350px) {
    flex: 1.5;
  }
  @media (max-width: 900px) {
    flex: 2;
  }
  @media (max-width: 790px) {
    flex: auto;
    width: 100%;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
`;

export const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const LoginLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const LoginTitle = styled.h1`
  color: #000;
  text-align: center;
  font-size: 2.5rem;
`;

export const LoginForm = styled.form`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 30rem;
  border: 1px solid #1e1e1c;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  ${(props: { padding?: boolean; isFaile?: boolean }) =>
    props.padding ? "padding: 0 0 0 1rem;" : "padding: 0 1rem;"}
  box-sizing: border-box;
  gap: 1rem;

  ${({ isFaile }: { isFaile?: boolean }) =>
    isFaile ? "border: 1px solid #FF8181;" : ""}
`;

export const Input = styled.input`
  background: none;
  border: none;
  width: 100%;
  height: 3rem;
  padding: 0.5rem 0;
  outline: none;
  font-size: 1rem;
  font-family: inherit;

  ::placeholder {
    color: #bdbdbd;
  }
`;

export const Label = styled.div`
  color: #bdbdbd;
`;

export const ConfirmButton = styled.button`
  color: #fff;
  border: none;
  background: #5169e8;
  border-top-right-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  width: 10rem;
  height: 3rem;
  cursor: pointer;
  outline: none;
  font-size: 1rem;
  font-family: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    animation-name: ${Show};
    animation-duration: 0.2s;
  }
`;

export const PasswordWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #000;
`;

export const SubmitButton = styled.button`
  width: 100%;
  max-width: 30rem;
  height: 3rem;
  font-size: 1.5rem;
  font-family: inherit;
  font-weight: bold;
  border: none;
  border-radius: 1rem;
  background: #4c53ff;
  color: #fff;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    transform: scale(1.05);
  }
`;

export const PopupWrapper = styled.div`
  animation-name: ${Show};
  animation-duration: 0.2s;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const Popup = styled.div`
  background: #1e1e1c;
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 40rem;
`;

export const Inputs = styled.div`
  width: 100%;

  input {
    appearance: none;
    outline: none;
    border: none;
    display: inline-block;
    border-radius: 1rem;
    margin: 0 0.5rem;
    font-size: 3rem;
    font-family: inherit;
    color: #000;
    background: none;
    border: 3px solid #5169e8;
    color: #fff;
  }
`;

export const FinishButton = styled.button`
  border-radius: 5rem;
  height: 3rem;
  width: 80%;
  border: none;
  outline: none;
  background: #4c53ff;
  font-size: 1.5rem;
  font-family: inherit;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    background: #3e45ff;
  }
`;

export const VerifyInput = styled.input`
  width: 100%;
  height: 100%;
  background: none;
  font-size: 2rem;
  border: none;
  outline: none;
  color: none;
  text-align: center;
  color: #fff;
`;
