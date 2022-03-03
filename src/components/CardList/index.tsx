import { useRouter } from "next/router";
import Card from "../Card";

import * as S from "./styles";

interface CardListProps {
  title: string;
  kind: "private" | "autonomous" | "major";
}

export default function CardList({ title, kind }: CardListProps) {
  return (
    <>
      <div>
        <S.Title>{title}</S.Title>
        <S.Number>총 30개</S.Number>
      </div>
      <S.CardList>
        <Card link={`/${kind}/동아리입니다`} />
        <Card link={`/${kind}/동아리입니다`} />
        <Card link={`/${kind}/동아리입니다`} />
        <Card link={`/${kind}/동아리입니다`} />
        <Card link={`/${kind}/동아리입니다`} />
        <Card link={`/${kind}/동아리입니다`} />
        <Card link={`/${kind}/동아리입니다`} />
        <Card link={`/${kind}/동아리입니다`} />
        <Card link={`/${kind}/동아리입니다`} />
        <Card link={`/${kind}/동아리입니다`} />
        <Card link={`/${kind}/동아리입니다`} />
        <Card link={`/${kind}/동아리입니다`} />
        <Card link={`/${kind}/동아리입니다`} />
        <Card link={`/${kind}/동아리입니다`} />
      </S.CardList>
    </>
  );
}
