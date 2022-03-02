/* eslint-disable jsx-a11y/alt-text */
import { signIn } from "next-auth/react";
import Image from "next/image";

import * as S from "./styles";

export default function LoginPage() {
  const onClick = () => signIn("google");

  return (
    <S.Wrapper>
      <S.Contents>
        <S.LoginButton onClick={onClick}>
          <Image src="/png/GoogleLogo.png" width={32} height={35} />
          <div>Google 계정으로 로그인</div>
          <div></div>
        </S.LoginButton>
      </S.Contents>
    </S.Wrapper>
  );
}
