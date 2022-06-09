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

  @media (max-width: 1030px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    padding: 0 2rem;
  }
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
  width: 100%;

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
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 5rem;
  gap: 10rem;

  @media (max-width: 1030px) {
    display: flex;
    justify-content: center;
    gap: 5rem;
  }
  @media (max-width: 640px) {
    padding: 0 2rem;
  }
`;

export const Left = styled.div`
  flex: 1;
  max-width: 55%;
`;

export const Introduce = styled.div`
  margin-bottom: 5rem;
`;

export const Title = styled.h2`
  margin-bottom: 5rem;
`;

export const ContactMeans = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 811px) {
    flex-wrap: wrap;
    gap: 5rem;
    width: 100%;
  }
`;

export const ContactUser = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;
`;

export const Contact = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const NotionLink = styled.div`
  @media (max-width: 400px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Link = styled.a`
  background: #fff;
  color: #5169e8;
  text-decoration: none;
  border-radius: 1rem;
  text-align: center;
  padding: 0.8rem 1rem;
  overflow: hidden;

  :hover {
    text-decoration: underline;
  }
`;

export const Right = styled.div``;

export const ImgTitle = styled.h2`
  @media (max-width: 415px) {
    text-align: center;
  }
`;

export const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 22rem;

  @media (max-width: 1030px) {
    justify-content: center;
  }
`;

export const Img = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 0.5rem;
  object-fit: cover;
`;
