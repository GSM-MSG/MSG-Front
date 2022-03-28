import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 4rem 0;
`;

export const CoverImg = styled.img`
  width: 100%;
  height: 400px;
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

export const IntroduceContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
  flex-wrap: wrap;
`;

export const Introduce = styled.p`
  font-size: 1.2rem;
  margin-bottom: 5rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Imgs = styled.div`
  display: flex;
  width: 22rem;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Img = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 10px;
`;

export const Contect = styled.div`
  height: 10rem;
  width: 100%;
  margin-left: 7rem;
`;

export const ContectUser = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const ContectUserInfo = styled.div`
  position: relative;
`;

export const ContectInfo = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Info = styled.p`
  margin: 0.5rem 0;
  text-align: right;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: inherit;
  border-radius: 1rem;
  outline: none;
  border: none;
  color: #fff;
  padding: 1rem 10rem;
  transition: 0.2s;
  ${(props: { isDeadline?: boolean }) =>
    props.isDeadline
      ? `background: #646464;`
      : `box-shadow: -4px 10px 10px rgba(76, 83, 255, 0.5);
background: #4c53ff;
cursor: pointer;
:hover {
    transform: scale(1.1);
  }
`}
`;
