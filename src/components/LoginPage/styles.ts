import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Contents = styled.div`
  height: 80%;
  width: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 40rem) {
    width: 80%;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Signin = styled.button`
  background: #4d54ff;
  color: #fff;
  border: none;
  outline: none;
  height: 3.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: inherit;
  border-radius: 1rem;
  box-shadow: -0.2rem 0.2rem 0.5rem rgba(77, 84, 255, 0.3);
  cursor: pointer;
  transition: 0.2s;

  :hover {
    transform: scale(1.02);
  }
`;

export const Signup = styled.button`
  background: #fff;
  border: none;
  outline: none;
  height: 3.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: inherit;
  border-radius: 1rem;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    transform: scale(1.02);
  }
`;
