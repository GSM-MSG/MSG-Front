import * as S from "./styles";

export default function In() {
  return (
    <S.LoginForm>
      <S.InputWrapper>
        <S.Input maxLength={6} placeholder="s12345" />
        <S.Label>@gsm.hs.kr</S.Label>
      </S.InputWrapper>
      <S.PasswordWrapper>
        <S.InputWrapper>
          <S.Input type="password" placeholder="***********" />
        </S.InputWrapper>
        <S.ForgetPassword>
          비밀번호를 잊으셨나요?
          <S.FindPassword>비밀번호 찾기</S.FindPassword>
        </S.ForgetPassword>
      </S.PasswordWrapper>
      <S.SubmitButton>로그인</S.SubmitButton>
    </S.LoginForm>
  );
}
