import { ChangeEvent, useEffect, useRef, useState } from "react";

import * as S from "./styles";
import * as SVG from "../../SVG";
import api from "../../lib/api";

export default function Popup() {
  const [value, setValue] = useState("");
  const InputRef1 = useRef<HTMLInputElement>(null);
  const InputRef2 = useRef<HTMLInputElement>(null);
  const InputRef3 = useRef<HTMLInputElement>(null);
  const InputRef4 = useRef<HTMLInputElement>(null);
  const inputs = [InputRef1, InputRef2, InputRef3, InputRef4];

  useEffect(() => {
    InputRef1.current?.focus();
  }, []);

  const onChange = (pos: number, e: ChangeEvent<HTMLInputElement>) => {
    const r: RegExp = /[0-9]/g;
    const num = e.target.value;

    console.log(num);

    if (/[\b]/.test(num)) {
      console.log("hello");
      setValue(value.slice(0, value.length - 1));
      return;
    }

    if (!r.test(num)) return;
    setValue(value + num);
    if (pos >= 4) return;
    inputs[pos].current?.focus();
  };

  const onSubmit = async () => {
    try {
      if (value.length < 4) return;
      await api({ query: "/auth/verify", method: "head", body: value });
    } catch (e) {
      setValue("");
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
        <S.Squares>
          <S.Square>
            <S.VerifyInput
              value={value.slice(0, 1)}
              onChange={(e) => onChange(1, e)}
              maxLength={1}
              pattern=""
              ref={InputRef1}
            />
          </S.Square>
          <S.Square>
            <S.VerifyInput
              value={value.slice(1, 2)}
              onChange={(e) => onChange(2, e)}
              maxLength={1}
              ref={InputRef2}
            />
          </S.Square>
          <S.Square>
            <S.VerifyInput
              value={value.slice(2, 3)}
              onChange={(e) => onChange(3, e)}
              maxLength={1}
              ref={InputRef3}
            />
          </S.Square>
          <S.Square>
            <S.VerifyInput
              value={value.slice(3, 4)}
              onChange={(e) => onChange(4, e)}
              maxLength={1}
              ref={InputRef4}
            />
          </S.Square>
        </S.Squares>
        <S.FinishButton onClick={onSubmit}>완료</S.FinishButton>
      </S.Popup>
    </S.PopupWrapper>
  );
}
