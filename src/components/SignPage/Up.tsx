import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import api from "../../lib/api";
import * as S from "./styles";

interface UpProps {
  setIsShow: Dispatch<SetStateAction<boolean>>;
}

export default function Up({ setIsShow }: UpProps) {
  const [email, setEmail] = useState("");
  const popup = async () => {
    try {
      if (!email) return;
      await api({ query: "/auth/verify", method: "post", body: { email } });
      setIsShow(true);
    } catch (e) {}
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value.trim());
  };

  return (
    <S.LoginForm>
      <S.InputWrapper padding>
        <S.Input
          maxLength={6}
          value={email}
          name="email"
          onChange={onChange}
          placeholder="학교 이메일을 입력하세요"
        />
        <S.Label>@gsm.hs.kr</S.Label>
        <S.ConfirmButton type="button" onClick={popup}>
          인증하기
        </S.ConfirmButton>
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
