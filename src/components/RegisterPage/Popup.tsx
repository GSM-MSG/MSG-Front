import { Dispatch, SetStateAction } from "react";
import * as S from "./styles";
import * as SVG from "../../SVG";

interface PopupProps {
  setIsShow: Dispatch<SetStateAction<boolean>>;
}

export default function Popup({ setIsShow }: PopupProps) {
  return (
    <>
      <S.PopupBackground onClick={() => setIsShow(false)} />
      <S.Popup>
        <S.PopupTitle>구성원 추가</S.PopupTitle>
        <S.SearchBar>
          <SVG.ReadingGlasses />
          <S.SearchInput />
        </S.SearchBar>
      </S.Popup>
    </>
  );
}
