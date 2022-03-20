/* eslint-disable jsx-a11y/alt-text */
import { useRouter } from "next/router";

import * as S from "./styles";

export default function LoginPage() {
  const router = useRouter();

  return (
    <S.Wrapper>
      <S.Contents></S.Contents>
    </S.Wrapper>
  );
}
