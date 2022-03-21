import * as S from "./styles";
import * as SVG from "../../SVG";

interface SignProps {
  type: "signin" | "signup";
}

export default function SignPage({ type }: SignProps) {
  return (
    <S.Wrapper>
      <S.Logo>
        <S.Title>
          GSM 동아리
          <br />
          관리의 모든 것
        </S.Title>
        <SVG.Whale />
      </S.Logo>
      <S.Login>
        <S.LoginWrapper>
          <S.LoginLogo>
            <SVG.LogoBlack />
            <S.LoginTitle>
              {type === "signin" ? "Sign in" : "Sign up"}
            </S.LoginTitle>
          </S.LoginLogo>
          <S.LoginForm>
            <S.InputWrapper>
              <S.Input placeholder="s12345" />
              <S.Label>@gsm.hs.kr</S.Label>
            </S.InputWrapper>
            <S.PasswordWrapper>
              <S.InputWrapper>
                <S.Input type="password" placeholder="***********" />
              </S.InputWrapper>
              <div>
                비밀번호를 잊으셨나요?
                <S.FindPassword>비밀번호 찾기</S.FindPassword>
              </div>
            </S.PasswordWrapper>
            <S.SubmitButton>
              {type === "signin" ? "로그인" : "회원가입"}
            </S.SubmitButton>
          </S.LoginForm>
        </S.LoginWrapper>
      </S.Login>
    </S.Wrapper>
  );
}
