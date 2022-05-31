import { Dispatch, SetStateAction, useState } from "react";
import api from "../../lib/api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules";
import { confirm_success } from "../../modules/signup";
import OtpInput from "react-otp-input";
import { motion } from "framer-motion";

import * as S from "./styles";
import * as SVG from "../../SVG";

interface PopupProps {
  setIsShow: Dispatch<SetStateAction<boolean>>;
}

export default function Popup({ setIsShow }: PopupProps) {
  const [value, setValue] = useState("");
  const [isFail, setIsFail] = useState(false);
  const { email } = useSelector((state: RootState) => ({
    email: state.signup.email,
  }));

  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      if (value.length < 4) return;
      await api({
        query: `/auth/verify?code=${value}&email=${email}`,
        method: "head",
      });
      setIsShow(false);
      dispatch(confirm_success());
    } catch (e) {
      setValue("");
      setIsFail(true);
    }
  };

  return (
    <S.PopupWrapper>
      <S.Popup>
        <h2>
          입력하신 이메일로
          <br />
          인증 번호를 전송했어요!
        </h2>
        <SVG.Email />
        <S.Inputs>
          <OtpInput
            isInputNum
            inputStyle={{
              width: "5rem",
              height: "5rem",
            }}
            onChange={(value: string) => setValue(value)}
            value={value}
            hasErrored={isFail}
          />
        </S.Inputs>

        <motion.div
          style={{
            color: "#FF8181",
            display: isFail ? "block" : "none",
          }}
          whileInView={{
            position: "relative",
            rotate: [0, 5, -5, 0],
            scale: [1, 1.4, 1.2, 1],
            transition: {
              duration: 0.2,
            },
          }}
          whileHover={{
            position: "relative",
            rotate: [0, 5, -5, 0],
            scale: [1, 1.4, 1.2, 1],
            transition: {
              duration: 0.2,
            },
          }}
        >
          인증번호를 다시 확인해 주세요!
        </motion.div>
        <S.FinishButton onClick={onSubmit}>완료</S.FinishButton>
      </S.Popup>
    </S.PopupWrapper>
  );
}
