import * as S from "./styles";

export default function Up() {
  return (
    <S.LoginForm>
      <S.InputWrapper padding>
        <S.Input maxLength={6} placeholder="학교 이메일을 입력하세요" />
        <S.Label>@gsm.hs.kr</S.Label>
        <S.ConfirmButton>인증하기</S.ConfirmButton>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Input type="password" placeholder="비밀번호를 입력하세요" />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Input type="password" placeholder="비밀번호를 입력하세요" />
      </S.InputWrapper>
      <S.SubmitButton>회원가입</S.SubmitButton>
    </S.LoginForm>
  );
}
