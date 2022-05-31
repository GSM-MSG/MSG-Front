import * as S from "./styles";
import * as SVG from "../../SVG";
import In from "./In";
import Up from "./Up";
import { useRouter } from "next/router";
import Popup from "./Popup";
import { useState } from "react";

interface SignProps {
  type: "signin" | "signup";
}

export default function SignPage({ type }: SignProps) {
  const router = useRouter();
  const [isShow, setIsShow] = useState<boolean>(false);

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
          <S.LoginLogo onClick={() => router.push("/login")}>
            <SVG.LogoBlack />
            <S.LoginTitle>
              {type === "signin" ? "Sign in" : "Sign up"}
            </S.LoginTitle>
          </S.LoginLogo>
          {type === "signin" ? <In /> : <Up setIsShow={setIsShow} />}
        </S.LoginWrapper>
      </S.Login>
      {isShow && <Popup setIsShow={setIsShow} />}
    </S.Wrapper>
  );
}
