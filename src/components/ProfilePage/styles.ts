import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Wrapper = styled.div`
  margin-top: 4rem;
  min-height: calc(100vh - 4rem);
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
  flex: 1;
  width: 80%;
  height: auto;
  max-width: 70rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  background: #1e1e1c;
  padding: 2rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1300px) {
    padding: 2rem;
    width: 90%;
  }
`;

export const User = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const UserImgWrapper = styled.span`
  position: relative;
`;

export const EditButton = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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

  @media (max-width: 570px) {
    position: static;
  }
`;

export const Hr = styled.hr`
  border: 1px solid #646464;
  width: 100%;
`;

export const Clubs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const TitleClubs = styled.div``;

export const ClubTitle = styled.h2`
  width: 100%;
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
`;

export const Combine = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  width: 100%;
`;

export const ExitButton = styled.button`
  max-width: 25rem;
  width: 90%;
  padding: 0.7rem 0;
  border: none;
  outline: none;
  background: #4c53ff;
  color: #fff;
  border-radius: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: inherit;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover:after {
    right: -10%;
    border-radius: 5rem;
  }

  ::after {
    content: "";
    display: block;
    width: 120%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 100%;
    background: rgba(0, 0, 0, 0.1);
    transition: 0.5s cubic-bezier(0.23, 0.56, 0.68, 0.38);
  }
`;

//----------------------ExitPopup------------------------------

const Opacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Sliding = keyframes`
  0% {
    top: -100%;
  }
  60% {
    top: 5%;
  }
  100% {
    top: 0;
  }
`;

export const PopupWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: ${Opacity};
  animation-duration: 0.2s;
`;

export const Popup = styled.div`
  background: #1e1e1c;
  padding: 1rem;
  border-radius: 0.5rem;
  position: relative;
  animation-name: ${Sliding};
  animation-duration: 0.3s;
  animation-direction: alternate;
  animation-play-state: running;

  @media (max-width: 900px) {
    width: 90%;
    max-height: 70%;
    overflow: scroll;
  }
`;

export const RightX = styled.div`
  display: flex;
  justify-content: right;
`;

export const PopupTitle = styled.h1`
  text-align: center;
`;

export const Comment = styled.p`
  color: #646464;
  margin-top: 0;
  text-align: center;
`;

export const CardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  padding: 1rem;
  justify-content: center;

  @media (max-width: 900px) {
    grid-template-columns: 20rem;
  }
`;

//----------------Card--------------------

export const CardWrapper = styled.a`
  max-width: 20rem;
  width: 20rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  cursor: pointer;
`;

export const Picture = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 20px;
  object-fit: cover;
`;

export const Name = styled.h3`
  width: 100%;
  border-radius: 10px;
  background: #5169e8;
  height: 17%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
