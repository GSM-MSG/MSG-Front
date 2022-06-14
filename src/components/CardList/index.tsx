import { useRouter } from "next/router";
import Card from "../Card";

import * as S from "./styles";

interface CardListProps {
  kind: "editorial" | "freedom" | "major";
}

export default function CardList({ kind }: CardListProps) {
  return (
    <S.CardList>
      <Card link={`/${kind}/MSG`} />
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
  );
}
