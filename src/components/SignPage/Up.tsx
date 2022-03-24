import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../lib/api";
import { RootState } from "../../modules";
import {
  change_email,
  change_password,
  change_password_confirm,
} from "../../modules/register";
import * as S from "./styles";
import * as SVG from "../../SVG";
import { useRouter } from "next/router";

interface UpProps {
  setIsShow: Dispatch<SetStateAction<boolean>>;
}

export default function Up({ setIsShow }: UpProps) {
  const { email, password, passwordConfirm, confirmSuccess } = useSelector(
    (state: RootState) => ({
      ...state.register,
    })
  );
  const dispatch = useDispatch();
  const router = useRouter();

  const popup = async () => {
    try {
      if (!email) return;
      await api({ query: "/auth/verify", method: "post", body: { email } });
      setIsShow(true);
    } catch (e) {}
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        dispatch(change_email(e.target.value.trim()));
        break;
      case "password":
        dispatch(change_password(e.target.value));
        break;
      case "passwordConfirm":
        dispatch(change_password_confirm(e.target.value));
        break;
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (password !== passwordConfirm) return;
      await api({
        query: "/auth/register",
        method: "post",
        body: { email, password },
      });
      router.push("/login");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <S.LoginForm onSubmit={onSubmit}>
      <S.InputWrapper padding>
        <S.Input
          maxLength={6}
          value={email}
          name="email"
          onChange={onChange}
          placeholder="학교 이메일을 입력하세요"
        />
        <S.Label>@gsm.hs.kr</S.Label>
        <S.ConfirmButton
          disabled={confirmSuccess === true}
          type="button"
          onClick={popup}
        >
          {confirmSuccess ? <SVG.Check /> : "인증하기"}
        </S.ConfirmButton>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Input
          type="password"
          value={password}
          name="password"
          onChange={onChange}
          placeholder="비밀번호를 입력하세요"
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Input
          type="password"
          value={passwordConfirm}
          name="passwordConfirm"
          onChange={onChange}
          placeholder="비밀번호를 입력하세요"
        />
      </S.InputWrapper>
      <S.SubmitButton>회원가입</S.SubmitButton>
    </S.LoginForm>
  );
}
