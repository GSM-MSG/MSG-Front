/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import Header from "../Header";
import Card from "../Card";

import * as S from "./styles";

export default function MainPage() {
  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Group>
          <S.GroupInfo>
            <S.GroupName>전공 동아리</S.GroupName>
            <S.GroupAllNumber>총 30개</S.GroupAllNumber>
          </S.GroupInfo>
          <Link href="/major">
            <S.AllViewLink>모두 보기</S.AllViewLink>
          </Link>
        </S.Group>
        <S.Cards>
          <Card link={`/major/라이엇`} />
          <Card link={`/major/라이엇`} />
          <Card link={`/major/라이엇`} />
          <Card link={`/major/라이엇`} />
          <Card link={`/major/라이엇`} />
        </S.Cards>
        <S.Group>
          <S.GroupInfo>
            <S.GroupName>자율 동아리</S.GroupName>
            <S.GroupAllNumber>총 30개</S.GroupAllNumber>
          </S.GroupInfo>
          <Link href="/autonomous">
            <S.AllViewLink>모두 보기</S.AllViewLink>
          </Link>
        </S.Group>
        <S.Cards>
          <Card link={`/autonomous/라이엇`} />
          <Card link={`/autonomous/라이엇`} />
          <Card link={`/autonomous/라이엇`} />
          <Card link={`/autonomous/라이엇`} />
          <Card link={`/autonomous/라이엇`} />
        </S.Cards>
        <S.Group>
          <S.GroupInfo>
            <S.GroupName>사설 동아리</S.GroupName>
            <S.GroupAllNumber>총 30개</S.GroupAllNumber>
          </S.GroupInfo>
          <Link href="/private">
            <S.AllViewLink>모두 보기</S.AllViewLink>
          </Link>
        </S.Group>
        <S.Cards>
          <Card link={`/private/라이엇`} />
          <Card link={`/private/라이엇`} />
          <Card link={`/private/라이엇`} />
          <Card link={`/private/라이엇`} />
          <Card link={`/private/라이엇`} />
        </S.Cards>
      </S.Wrapper>
    </>
  );
}
