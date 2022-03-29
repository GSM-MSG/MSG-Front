import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: 4rem;
  height: calc(100vh - 4rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: left;
  width: 80%;
  max-width: 70rem;
`;

export const Main = styled.div`
  width: 80%;
  max-width: 70rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  background: #1e1e1c;
  padding: 2rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const User = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const UserImg = styled.img`
  width: 7rem;
  height: 7rem;
  object-fit: cover;
  border-radius: 100%;
`;
export const SubUserInfo = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

export const Logout = styled.p`
  color: #ff8181;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export const Hr = styled.hr`
  border: 1px solid #646464;
  width: 100%;
`;
