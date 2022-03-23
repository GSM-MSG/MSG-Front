import styled from "@emotion/styled";

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
  ${(props: { padding?: boolean }) =>
    props.padding ? "padding: 0 0 0 1rem;" : "padding: 0 1rem;"}
  box-sizing: border-box;
  gap: 1rem;
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

export const ForgetPassword = styled.div`
  width: 100%;
  text-align: left;
  max-width: 30rem;
`;

export const ConfirmButton = styled.button`
  color: #fff;
  border: none;
  background: #5169e8;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  width: 10rem;
  height: 100%;
  cursor: pointer;
`;

export const PasswordWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #000;
`;

export const FindPassword = styled.span`
  margin-left: 0.5rem;
  color: #00a8fe;
  cursor: pointer;
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

export const Squares = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Square = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 1rem;
  box-sizing: border-box;
  border: 3px solid #5169e8;
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
