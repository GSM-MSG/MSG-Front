import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../lib/api";
import { RootState } from "../../modules";
import { change_email, change_password } from "../../modules/login";
import * as S from "./styles";

export default function In() {
  const [isFaile, setIsFaile] = useState(false);
  const dispatch = useDispatch();
  const { email, password } = useSelector((state: RootState) => ({
    ...state.login,
  }));

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        dispatch(change_email(e.target.value));
        break;
      case "password":
        dispatch(change_password(e.target.value));
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await api({
        query: "/auth/login",
        method: "post",
        body: { email, password },
      });
    } catch (e) {
      setIsFaile(true);
    }
  };

  return (
    <S.LoginForm onSubmit={onSubmit}>
      <S.InputWrapper isFaile={isFaile}>
        <S.Input
          onChange={onChange}
          value={email}
          maxLength={6}
          placeholder="s12345"
          name="email"
        />
        <S.Label>@gsm.hs.kr</S.Label>
      </S.InputWrapper>
      <S.PasswordWrapper>
        <S.InputWrapper isFaile={isFaile}>
          <S.Input
            onChange={onChange}
            value={password}
            type="password"
            placeholder="***********"
            name="password"
          />
        </S.InputWrapper>
        {isFaile && (
          <S.Comment style={{ textAlign: "left" }}>
            이메일 또는 비밀번호를 다시 확인해 주세요!
          </S.Comment>
        )}
      </S.PasswordWrapper>
      <S.SubmitButton>로그인</S.SubmitButton>
    </S.LoginForm>
  );
}
