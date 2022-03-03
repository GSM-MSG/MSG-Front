import Card from "../Card";

import * as S from "./styles";

interface CardListProps {
  title: string;
}

export default function CardList({ title }: CardListProps) {
  return (
    <>
      <div>
        <S.Title>{title}</S.Title>
        <S.Number>총 30개</S.Number>
      </div>
      <S.CardList>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </S.CardList>
    </>
  );
}
