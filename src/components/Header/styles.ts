import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 0 2rem;
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1e1e1c;
  position: fixed;
  top: 0;
`;

export const Logo = styled.a`
  font-size: 2rem;
  padding: 0;
  margin: 0;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
`;

export const Icons = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 13rem;
`;

export const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background: #fff;
`;

export const UserImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
`;
