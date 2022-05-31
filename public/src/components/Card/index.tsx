/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import * as S from "./styles";

interface CardProps {
  link: string;
  width?: number;
}

export default function Card({ link }: CardProps) {
  return (
    <Link href={link}>
      <S.Wrapper>
        <S.Picture />
        <S.Name>라이엇</S.Name>
      </S.Wrapper>
    </Link>
  );
}
