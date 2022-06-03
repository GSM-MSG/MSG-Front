import { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as S from "./styles";
import * as SVG from "../../SVG";
import api from "../../lib/api";
import checkQuery from "../../lib/checkQuery";
import { ClubKind } from "./types/ClubKind";
import { UserType } from "../../types";

interface PopupProps {
  setIsShow: Dispatch<SetStateAction<boolean>>;
  type: ClubKind;
  users: UserType[];
  setUsers: Dispatch<SetStateAction<UserType[]>>;
}

export default function Popup({
  setIsShow,
  type,
  users,
  setUsers,
}: PopupProps) {
  const [name, setName] = useState<string>("");
  const [usersTemp, setUsersTemp] = useState<UserType[] | null>(null);

  const onClick = () => {
    setIsShow(false);
  };

  useEffect(() => {
    (async () => {
      const data = await checkQuery(() =>
        api.get(`/user/web/search?name=${name}&type=${type}`)
      );
      setUsersTemp(data);
    })();
  }, [name, type]);

  return (
    <S.PopupWrapper>
      <S.PopupBackground onClick={() => setIsShow(false)} />

      <S.Popup>
        <S.PopupTitle>구성원 추가</S.PopupTitle>
        <S.SearchBar>
          <SVG.ReadingGlasses />
          <S.SearchInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="구성원의 이름을 입력해주세요"
          />
        </S.SearchBar>
        <S.PopupUsers>
          {usersTemp?.map((i) => (
            <S.PopupUser key={i.email}>
              <S.AddUserImg src={i.userImg} />
              <S.UserInfo>
                <div>
                  <h3>{i.name}</h3>
                  <div>
                    {i.grade}학년 {i.class}반 {i.num}번
                  </div>
                </div>
                <S.CheckBox type="checkbox" />
              </S.UserInfo>
            </S.PopupUser>
          ))}
        </S.PopupUsers>
        <S.PopupButton onClick={onClick}>추가하기</S.PopupButton>
      </S.Popup>
    </S.PopupWrapper>
  );
}
