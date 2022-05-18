import { NextPage } from "next";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import * as SVG from "../../SVG";
import { UserType } from "../../types";
import * as S from "./styles";

interface LeftFormProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  users: UserType[];
  setUsers: Dispatch<SetStateAction<UserType[]>>;
}

const LeftForm: NextPage<LeftFormProps> = ({ title, setTitle, users }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <S.LeftFormWrapper>
      <div>
        <S.SubTitle>동아리 이름</S.SubTitle>
        <S.TitleInput
          value={title}
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
    </S.LeftFormWrapper>
  );
};

export default LeftForm;
