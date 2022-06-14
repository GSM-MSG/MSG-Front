import { NextPage } from "next";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import * as SVG from "../../SVG";
import { UserType } from "../../types";
import Popup from "./Popup";
import * as S from "./styles";
import { ClubKind } from "./types/ClubKind";
import { TextsType } from "./types/TextsType";

interface LeftFormProps {
  texts: TextsType;
  setTexts: Dispatch<SetStateAction<TextsType>>;
  users: UserType[];
  setUsers: Dispatch<SetStateAction<UserType[]>>;
  type: ClubKind;
  isEdit: boolean;
}

const LeftForm: NextPage<LeftFormProps> = ({
  users,
  setUsers,
  texts,
  setTexts,
  type,
  isEdit,
}) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const element = e.target;
    setTexts({ ...texts, [element.name]: element.value });
  };

  return (
    <>
      <S.LeftFormWrapper>
        <div>
          <S.SubTitle>동아리 이름</S.SubTitle>
          <S.TitleInput
            name="title"
            value={texts.title}
            onChange={onChange}
            placeholder="동아리 이름을 입력해주세요"
          />
        </div>
        {!isEdit && (
          <div>
            <S.SubTitle>동아리 구성원</S.SubTitle>
            <S.Users>
              {users?.map((i) => (
                <S.UserBox key={i.email}>
                  <S.UserImg src={i.userImg} alt="profile" />
                  <h3>{i.name}</h3>
                </S.UserBox>
              ))}
              <S.UserBox onClick={() => setIsShow(true)}>
                <SVG.PlusUser />
                <h3>추가하기</h3>
              </S.UserBox>
            </S.Users>
          </div>
        )}
        <div>
          <S.SubTitle>동아리 소개</S.SubTitle>
          <S.Textarea
            name="description"
            value={texts.description}
            onChange={onChange}
          ></S.Textarea>
        </div>
        <div>
          <S.SubTitle>노션 링크</S.SubTitle>
          <S.LinkWrapper>
            <S.Link
              name="notionLink"
              id="url"
              value={texts.notionLink}
              onChange={onChange}
            />
          </S.LinkWrapper>
        </div>
      </S.LeftFormWrapper>
      {isShow && (
        <Popup
          setIsShow={setIsShow}
          type={type}
          users={users}
          setUsers={setUsers}
        />
      )}
    </>
  );
};

export default LeftForm;
