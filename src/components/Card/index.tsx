/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import * as S from "./styles";

interface CardProps {
  link: string;
  width?: number;
}

export default function Card({ link, width }: CardProps) {
  return (
    <Link href={link}>
      <S.Wrapper
        style={{
          width: `${width ? width : 20}rem`,
          minWidth: `${width ? width : 20}rem`,
        }}
      >
        <S.Picture />
        <S.Name>라이엇</S.Name>
      </S.Wrapper>
    </Link>
  );
}
