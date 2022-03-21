/* eslint-disable jsx-a11y/alt-text */
import { useRouter } from "next/router";

import * as S from "./styles";
import * as SVG from "../../SVG";

export default function LoginPage() {
  const router = useRouter();

  return (
    <S.Wrapper>
      <S.Contents>
        <S.Logo>
          <SVG.LogoWhite />
          <S.Title>
            GSM 동아리
            <br />
            관리의 모든것
          </S.Title>
        </S.Logo>
        <S.Buttons>
          <S.Signin onClick={() => router.push("login/signin")}>
            로그인
          </S.Signin>
          <S.Signup onClick={() => router.push("login/signup")}>
            회원가입
          </S.Signup>
        </S.Buttons>
      </S.Contents>
    </S.Wrapper>
  );
}
