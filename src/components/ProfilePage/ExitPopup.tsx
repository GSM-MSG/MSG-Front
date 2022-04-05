import { Dispatch, SetStateAction, useState } from "react";
import Card from "./Card";
import * as S from "./styles";
import * as SVG from "../../SVG";

interface ExitPopupProps {
  setIsShow: Dispatch<SetStateAction<boolean>>;
}

export default function ExitPopup({ setIsShow }: ExitPopupProps) {
  const [] = useState();
  const onClick = () => {
    setTimeout(() => {
      setIsShow(false);
    }, 300);
  };

  return (
    <S.PopupWrapper>
      <S.Popup>
        <S.RightX>
          <span style={{ cursor: "pointer" }} onClick={onClick}>
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
