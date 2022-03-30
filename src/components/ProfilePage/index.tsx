import Card from "../Card";
import * as S from "./styles";
import { Global } from "@emotion/react";
import api from "../../lib/api";
import { useRouter } from "next/router";

interface ProfilePageProps {
  username: string;
}

export default function ProfilePage({ username }: ProfilePageProps) {
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
    } catch (e) {}
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
            <S.UserImg src="https://bit.ly/3NwF4Oc" />
            <h1>{username}</h1>
            <h3>s12345@gsm.hs.kr</h3>
            <S.Logout onClick={Logout}>로그아웃</S.Logout>
          </S.User>
          <S.Hr />
          <h2>내 동아리</h2>
          <S.Clubs>
            <S.TitleClubs>
              <S.ClubTitle>사설 동아리</S.ClubTitle>
              <S.Cards>
                <Card link="/major/동아리임" />
                <Card link="/major/동아리임" />
              </S.Cards>
            </S.TitleClubs>
            <S.Combine>
              <div>
                <S.ClubTitle>전공 동아리</S.ClubTitle>
                <S.Cards>
                  <Card link="/major/동아리임" />
                </S.Cards>
              </div>
              <div>
                <S.ClubTitle>자율 동아리</S.ClubTitle>
                <S.Cards>
                  <Card link="/major/동아리임" />
                </S.Cards>
              </div>
            </S.Combine>
          </S.Clubs>
        </S.Main>
      </S.Wrapper>
    </>
  );
}
