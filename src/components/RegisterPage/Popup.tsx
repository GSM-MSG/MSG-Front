import { Dispatch, SetStateAction } from "react";
import * as S from "./styles";
import * as SVG from "../../SVG";

interface PopupProps {
  setIsShow: Dispatch<SetStateAction<boolean>>;
}

export default function Popup({ setIsShow }: PopupProps) {
  const onClick = () => {
    setIsShow(false);
  };

  return (
    <>
      <S.PopupBackground onClick={() => setIsShow(false)} />
      <S.Popup>
        <S.PopupTitle>구성원 추가</S.PopupTitle>
        <S.SearchBar>
          <SVG.ReadingGlasses />
          <S.SearchInput placeholder="구성원의 이름을 입력해주세요" />
        </S.SearchBar>
        <S.Users>
          <S.PopupUser>
            <S.AddUserImg src="https://lh3.googleusercontent.com/ogw/ADea4I4zqtWpnVaYhx-bTzASelMDxzPaBQFTVSh86XPm=s32-c-mo" />
            <S.UserInfo>
              <div>
                <h3>김준</h3>
                <div>2학년 1반 5번</div>
              </div>
              <S.CheckBox type="checkbox" />
            </S.UserInfo>
          </S.PopupUser>
        </S.Users>
        <S.PopupButton onClick={onClick}>추가하기</S.PopupButton>
      </S.Popup>
    </>
  );
}
