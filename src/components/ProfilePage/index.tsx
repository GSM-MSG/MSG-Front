/* eslint-disable react-hooks/exhaustive-deps */
import Card from "../Card";
import * as S from "./styles";
import { Global } from "@emotion/react";
import api from "../../lib/api";
import { useRouter } from "next/router";
import * as SVG from "../../SVG";
import ExitPopup from "./ExitPopup";
import { useEffect, useState } from "react";
import { MyPageType } from "../../types";

interface ProfilePageProps {
  username: string;
  user: MyPageType;
}

export default function ProfilePage({ username, user }: ProfilePageProps) {
  const [isShow, setIsShow] = useState(false);
  const router = useRouter();
  const Logout = async () => {
    try {
      await api({
        query: "/auth/logout",
        method: "post",
      });
      localStorage.removeItem("msgAccess");
      localStorage.removeItem("expiredAt");
      localStorage.removeItem("msgRefresh");
      router.push("/login");
    } catch (e) {
      console.log(e);
    }
  };

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
              <S.UserImg src="https://bit.ly/3NwF4Oc" />
              <S.EditButton>
                <SVG.Pen />
              </S.EditButton>
            </S.UserImgWrapper>
            <h1>{username}</h1>
            <h3>{user.userData.email}</h3>
            <S.Logout onClick={Logout}>로그아웃</S.Logout>
          </S.User>
          <S.Hr />
          {user.clubs[0] && <h2>내 동아리</h2>}
          <S.Clubs>
            {user.clubs.filter((i) => i.type === "EDITORIAL")[0] && (
              <S.TitleClubs>
                <S.ClubTitle>사설 동아리</S.ClubTitle>
                <S.Cards>
                  {user.clubs
                    .filter((i) => i.type === "EDITORIAL")
                    .map((i) => (
                      <Card key={i.id} link={`/editorial/${i.title}`} />
                    ))}
                </S.Cards>
              </S.TitleClubs>
            )}
            <S.Combine>
              {user.clubs.filter((i) => i.type === "MAJOR")[0] && (
                <div>
                  <S.ClubTitle>전공 동아리</S.ClubTitle>
                  <S.Cards>
                    {user.clubs
                      .filter((i) => i.type === "MAJOR")
                      .map((i) => (
                        <Card key={i.id} link={`/major/${i.title}`} />
                      ))}
                  </S.Cards>
                </div>
              )}
              {user.clubs.filter((i) => i.type === "FREEDOM")[0] && (
                <div>
                  <S.ClubTitle>자율 동아리</S.ClubTitle>
                  <S.Cards>
                    {user.clubs
                      .filter((i) => i.type === "FREEDOM")
                      .map((i) => (
                        <Card key={i.id} link={`/freedom/${i.title}`} />
                      ))}
                  </S.Cards>
                </div>
              )}
            </S.Combine>
          </S.Clubs>
          {user.clubs[0] && (
            <S.ButtonWrapper>
              <S.ExitButton onClick={() => setIsShow(true)}>
                탈퇴하기
              </S.ExitButton>
            </S.ButtonWrapper>
          )}
        </S.Main>
      </S.Wrapper>
      {isShow && <ExitPopup user={user} setIsShow={setIsShow} />}
    </>
  );
}
