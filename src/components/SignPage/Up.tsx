import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
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
import { motion } from "framer-motion";

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
  const [error, setError] = useState("");

  const popup = async () => {
    try {
      if (!email) return;
      await api({ query: "/auth/verify", method: "post", body: { email } });
      setIsShow(true);
    } catch (e: any) {
      setError(e.response.data.message);
    }
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
      if (password !== passwordConfirm) {
        setError("비밀번호가 서로 다릅니다.");
        return;
      } else if (!password || !passwordConfirm) {
        setError("비밀번호를 작성해주세요.");
        return;
      }
      await api({
        query: "/auth/register",
        method: "post",
        body: { email, password },
      });
      router.push("/login");
    } catch (e: any) {
      setError(e.response.data.message);
    }
  };

  return (
    <S.LoginForm onSubmit={onSubmit}>
      <div>
        <S.InputsWrapper>
          <S.InputWrapper padding isFaile={!!error}>
            <S.Input
              maxLength={6}
              value={email}
              name="email"
              onChange={onChange}
              placeholder="학교 이메일을 입력하세요"
              disabled={confirmSuccess === true}
            />
            <S.Label>@gsm.hs.kr</S.Label>
            <S.ConfirmButton
              disabled={confirmSuccess === true}
              type="button"
              onClick={popup}
              style={{
                cursor: confirmSuccess ? "auto" : "pointer",
              }}
            >
              {confirmSuccess ? <SVG.Check /> : "인증하기"}
            </S.ConfirmButton>
          </S.InputWrapper>
          <S.InputWrapper isFaile={!!error}>
            <S.Input
              type="password"
              value={password}
              name="password"
              onChange={onChange}
              placeholder="비밀번호를 입력하세요"
            />
          </S.InputWrapper>
          <S.InputWrapper isFaile={!!error}>
            <S.Input
              type="password"
              value={passwordConfirm}
              name="passwordConfirm"
              onChange={onChange}
              placeholder="비밀번호를 입력하세요"
            />
          </S.InputWrapper>
        </S.InputsWrapper>
        {error && (
          <motion.div
            style={{ color: "#FF8181" }}
            whileInView={{
              position: "relative",
              display: "inline-block",
              rotate: [0, 5, -5, 0],
              transition: {
                duration: 0.2,
              },
            }}
          >
            {error}
          </motion.div>
        )}
      </div>
      <S.SubmitButton>회원가입</S.SubmitButton>
    </S.LoginForm>
  );
}
