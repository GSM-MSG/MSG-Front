import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: 4rem;
`;

export const CoverImg = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: cover;
`;

export const Contents = styled.div`
  padding: 0 5rem;
`;

export const ClubName = styled.h1`
  font-size: 3rem;
`;

export const Users = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 4rem;
  display: flex;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const User = styled.li`
  position: relative;
  margin-right: 5rem;
`;

export const UserImg = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 100%;
`;

export const Badge = styled.div`
  position: absolute;
  width: 100%;
  height: 1.6rem;
  box-sizing: border-box;
  border: 2px solid #4d54ff;
  background: #1e1e1c;
  border-radius: 1rem;
  bottom: 1.4rem;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const UserName = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 1rem;
`;

export const Introduce = styled.p`
  font-size: 1.2rem;
  margin-bottom: 5rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Promotion = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: calc(10rem * 3 + 4rem);
  width: 100%;
`;

export const Imgs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Img = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 10px;
`;

export const Context = styled.div`
  height: 10rem;
`;

export const ContextUser = styled.div`
  position: relative;
  text-align: center;
`;

export const ContextInfo = styled.div;
