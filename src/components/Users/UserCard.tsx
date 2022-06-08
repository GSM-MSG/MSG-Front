import { NextPage } from "next";
import * as S from "./styles";

interface UserCardProps {
  user: {
    email: string;
    name: string;
    grade: number;
    class: number;
    num: number;
    userImg: string;
  };
}

const UserCard: NextPage<UserCardProps> = ({ user }) => {
  console.log(user);
  return (
    <S.UserCardWrapper>
      <S.UserCardImg src={user.userImg} />
      <S.UserInfo>
        <S.UserName>{user.name}</S.UserName>
        <S.UserData>
          {user.grade}학년 {user.class}반 {user.num}번
        </S.UserData>
      </S.UserInfo>
    </S.UserCardWrapper>
  );
};

export default UserCard;
