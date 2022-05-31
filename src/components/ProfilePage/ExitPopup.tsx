import { Dispatch, SetStateAction, useState } from "react";
import Card from "./Card";
import * as S from "./styles";
import * as SVG from "../../SVG";
import { MyPageType } from "../../types";

interface ExitPopupProps {
  setIsShow: Dispatch<SetStateAction<boolean>>;
  user: MyPageType;
}

export default function ExitPopup({ setIsShow, user }: ExitPopupProps) {
  const onClick = (id: number) => {};
  return (
    <S.PopupWrapper>
      <S.Popup>
        <S.RightX>
          <span style={{ cursor: "pointer" }} onClick={() => setIsShow(false)}>
            <SVG.X />
          </span>
        </S.RightX>
        <S.PopupTitle>탈퇴하기</S.PopupTitle>
        <S.Comment>탈퇴하고 싶은 동아리를 클릭해 주세요</S.Comment>
        <S.CardList>
          <Card />
          <Card />
          <Card />
          <Card />
        </S.CardList>
      </S.Popup>
    </S.PopupWrapper>
  );
}
