import { NextPage } from "next";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import * as SVG from "../../SVG";
import { UserType } from "../../types";
import * as S from "./styles";
import { TextsType } from "./types/TextsType";

interface LeftFormProps {
  texts: TextsType;
  setTexts: Dispatch<SetStateAction<TextsType>>;
  users: UserType[];
  setUsers: Dispatch<SetStateAction<UserType[]>>;
}

const LeftForm: NextPage<LeftFormProps> = ({ users, texts, setTexts }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const element = e.target;
    if (element.name === "relatedLinkLd") {
      setTexts({
        ...texts,
        relatedLinkLd: { ...texts.relatedLinkLd, [element.id]: element.value },
      });
    }
    setTexts({ ...texts, [element.name]: element.value });
  };

  return (
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
      <div>
        <S.SubTitle>동아리 구성원</S.SubTitle>
        <S.Users>
          {users?.map((i) => (
            <S.UserBox key={i.email}>
              <S.UserImg src={i.userImg} alt="profile" />
              <h3>{i.name}</h3>
            </S.UserBox>
          ))}
          <S.UserBox>
            <SVG.PlusUser />
            <h3>추가하기</h3>
          </S.UserBox>
        </S.Users>
      </div>
      <div>
        <S.SubTitle>동아리 소개</S.SubTitle>
        <S.Textarea
          name="description"
          value={texts.description}
          onChange={onChange}
        ></S.Textarea>
      </div>
      <div>
        <S.SubTitle>
          홍보 링크<S.Choice>(선택)</S.Choice>
        </S.SubTitle>
        <S.LinkWrapper>
          <S.LinkTitle
            name="relatedLinkLd"
            id="name"
            value={texts.relatedLinkLd.name}
            onChange={onChange}
            placeholder="제목을 입력해주세요"
          />
          <S.Link
            name="relatedLinkLd"
            id="url"
            value={texts.relatedLinkLd.url}
            onChange={onChange}
          />
        </S.LinkWrapper>
      </div>
    </S.LeftFormWrapper>
  );
};

export default LeftForm;
