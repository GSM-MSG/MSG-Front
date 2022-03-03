/* eslint-disable @next/next/link-passhref */
import { useSession } from "next-auth/react";
import Link from "next/link";

import * as S from "./styles";

export default function Header() {
  const { data } = useSession();
  return (
    <S.Wrapper>
      <Link href="/">
        <S.Logo>GCMS</S.Logo>
      </Link>
      <S.Icons>
        <S.Icon></S.Icon>
        <S.Icon></S.Icon>
        <S.Icon></S.Icon>
        <S.UserImage src={data?.user?.image || ""} />
      </S.Icons>
    </S.Wrapper>
  );
}
