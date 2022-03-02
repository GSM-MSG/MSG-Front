import { signIn } from "next-auth/react";

import * as S from "./styles";

export default function MainPage() {
  const onClick = () => {
    signIn("google");
  };

  return (
    <S.Wrapper>
      <S.Contents>
        <S.LoginButton onClick={onClick}>Google 계정으로 로그인</S.LoginButton>
      </S.Contents>
    </S.Wrapper>
  );
}
