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

export const Users = styled.div`
  list-style: none;
  padding: 0;
  margin: 0 0 4rem;
  display: flex;
  overflow: auto;
  gap: 5rem;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const User = styled.div`
  position: relative;
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

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;
  flex: 1;
  gap: 2rem;

  @media (max-width: 1250px) {
    flex-wrap: wrap;
    padding: 0 2rem;
    justify-content: center;
  }
`;

export const AllInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const Introduce = styled.div`
  max-width: 60rem;
`;

export const SubInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;

  @media (max-width: 1250px) {
    justify-content: space-around;
  }
  @media (max-width: 790px) {
    flex-wrap: wrap;
  }
`;

export const Imgs = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 22rem;
  gap: 2rem;
`;

export const Img = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 10px;
`;

export const Contect = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const UserContact = styled.div`
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
  }
`;

export const Link = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const LinkButton = styled.a`
  background: #fff;
  padding: 1rem;
  border-radius: 1rem;
  max-width: 60rem;
  color: #5169e8;
  height: 3.3rem;
  overflow: hidden;

  :hover {
    text-decoration: underline;
  }
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
