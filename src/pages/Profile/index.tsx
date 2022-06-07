/* eslint-disable react-hooks/exhaustive-deps */
import Card from "./Card";
import * as S from "./styles";
import { Global } from "@emotion/react";
import api from "../../lib/api";
import * as SVG from "../../SVG";
import ExitPopup from "./ExitPopup";
import { useState } from "react";
import { MyPageType } from "../../types";

interface ProfilePageProps {
  username: string;
  user: MyPageType;
}

export default function ProfilePage({ username, user }: ProfilePageProps) {
  const [isShow, setIsShow] = useState(false);
  const Logout = async () => {};

  return (
    <>
      <Global
        styles={{
          body: {
            background: "#000",
          },
        }}
      />
      <S.Wrapper>
        <S.Title>프로필</S.Title>
        <S.Main>
          <S.User>
            <S.UserImgWrapper>
              <S.UserImg />
              {/* <S.UserImg src={user.userData.userImg} /> */}
              <S.EditButton>
                <SVG.Pen />
              </S.EditButton>
            </S.UserImgWrapper>
            <h1>박영재박영재</h1>
            <h3>jjaejjae12@gmail.com</h3>
            {/* <h1>{username}</h1> */}
            {/* <h3>{user.userData.email}</h3> */}
            <S.Logout onClick={Logout}>로그아웃</S.Logout>
          </S.User>
          <S.Hr />
          <h2>내 방과후</h2>
          <S.AftarSBox>
            <S.AftarSElement>
              <p>배드민턴</p>
              <p>월 8,9교시</p>
              <p>2학년</p>
            </S.AftarSElement>
            <S.AftarSElement>
              <p>배드민턴</p>
              <p>월 8,9교시</p>
              <p>2학년</p>
            </S.AftarSElement>
            <S.AftarSElement>
              <p>배드민턴</p>
              <p>월 8,9교시</p>
              <p>2학년</p>
            </S.AftarSElement>
          </S.AftarSBox>
          <h2>내 동아리</h2>
          {/* {user.clubs[0] && <h2>내 동아리</h2>} */}
          <S.Clubs>
            {/* {user.clubs.filter((i) => i.type === "EDITORIAL")[0] && ( */}
            <S.TitleClubs>
              <S.ClubTitle>사설 동아리</S.ClubTitle>
              <S.Cards>
                {/* {user.clubs
                    .filter((i) => i.type === "EDITORIAL")
                    .map((i) => (
                      <Card key={i.id} club={i} />
                    ))} */}
              </S.Cards>
            </S.TitleClubs>
            {/* )} */}
            <S.Combine>
              {/* {user.clubs.filter((i) => i.type === "MAJOR")[0] && ( */}
              <div>
                <S.ClubTitle>전공 동아리</S.ClubTitle>
                <S.Cards>
                  {/* {user.clubs
                      .filter((i) => i.type === "MAJOR")
                      .map((i) => (
                        <Card key={i.id} club={i} />
                      ))} */}
                </S.Cards>
              </div>
              {/* )} */}
              {/* {user.clubs.filter((i) => i.type === "FREEDOM")[0] && ( */}
              <div>
                <S.ClubTitle>자율 동아리</S.ClubTitle>
                <S.Cards>
                  {/* {user.clubs
                      .filter((i) => i.type === "FREEDOM")
                      .map((i) => (
                        <Card key={i.id} club={i} />
                      ))} */}
                </S.Cards>
              </div>
              {/* )} */}
            </S.Combine>
          </S.Clubs>
          {/* {user.clubs[0] && ( */}
          <S.ButtonWrapper>
            <S.ExitButton onClick={() => setIsShow(true)}>
              탈퇴하기
            </S.ExitButton>
          </S.ButtonWrapper>
          {/* )} */}
        </S.Main>
      </S.Wrapper>
      {isShow && <ExitPopup user={user} setIsShow={setIsShow} />}
    </>
  );
}
