import Card from "../Card";
import * as S from "./styles";
import { Global } from "@emotion/react";

interface ProfilePageProps {
  username: string;
}

export default function ProfilePage({ username }: ProfilePageProps) {
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
            <S.Logout>로그아웃</S.Logout>
          </S.User>
          <S.Hr />
          <h2>내 동아리</h2>
          <S.Cards>
            <Card link="/major/동아리임" />
            <Card link="/major/동아리임" />
            <Card link="/major/동아리임" />
            <Card link="/major/동아리임" />
          </S.Cards>
        </S.Main>
      </S.Wrapper>
    </>
  );
}
