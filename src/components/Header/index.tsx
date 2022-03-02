import { useSession } from "next-auth/react";

import * as S from "./styles";

export default function Header() {
  const { data } = useSession();
  return (
    <S.Wrapper>
      <S.Logo>GCMS</S.Logo>
      <S.Icons>
        <S.Icon></S.Icon>
        <S.Icon></S.Icon>
        <S.Icon></S.Icon>
        <S.UserImage src={data?.user?.image || ""} />
      </S.Icons>
    </S.Wrapper>
  );
}
