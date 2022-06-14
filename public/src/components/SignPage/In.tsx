import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../lib/api";
import { RootState } from "../../modules";
import { change_email, change_password } from "../../modules/signin";
import * as S from "./styles";
import { LoginType } from "../../types/LoginType";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function In() {
  const [isFaile, setIsFaile] = useState(false);
  const dispatch = useDispatch();
  const { email, password } = useSelector((state: RootState) => ({
    ...state.signin,
  }));
  const router = useRouter();

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
      const { data }: LoginType = await api({
        query: "/auth/login",
        method: "post",
        body: { email, password },
        access: true,
      });
      localStorage.setItem("msgAccess", data.accessToken);
      localStorage.setItem("expiredAt", data.expiredAt);
      localStorage.setItem("msgRefresh", data.refreshToken);
      dispatch(change_email(""));
      dispatch(change_password(""));
      router.push("/");
    } catch (e) {
      setIsFaile(true);
      dispatch(change_password(""));
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
          <motion.div
            style={{ textAlign: "left", color: "#FF8181" }}
            whileInView={{
              position: "relative",
              rotate: [0, -5, 5, 0],
              scale: [1, 1.1, 1],
              transition: {
                duration: 0.2,
              },
            }}
          >
            이메일 또는 비밀번호를 다시 확인해 주세요!
          </motion.div>
        )}
      </S.PasswordWrapper>
      <S.SubmitButton>로그인</S.SubmitButton>
    </S.LoginForm>
  );
}