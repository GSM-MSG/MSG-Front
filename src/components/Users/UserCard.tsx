<<<<<<< HEAD
import * as S from "./styles";

interface UserCardProps {
  user: {
    name: string;
    grade: number;
    class: number;
    number: number;
    userImg: string;
  };
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <S.UserCardWrapper>
      <S.UserImg src="https://bit.ly/3qTeTra" />
      <S.Info>
        <div>
          <S.Name>김준</S.Name>
          <S.Description>1학년 4반 6번</S.Description>
        </div>
        <S.Bottom>
          <S.Approve>승인</S.Approve>
          <S.Refuse>거절</S.Refuse>
        </S.Bottom>
      </S.Info>
    </S.UserCardWrapper>
  );
}
=======
import { NextPage } from "next";
import { Member } from "../../types/MemberType";
import * as S from "./styles";

interface UserCardProps {
  user: Member;
}

const UserCard: NextPage<UserCardProps> = ({ user }) => {
  if (!user) return <></>;
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
>>>>>>> d3d64d895a9211ab8d7046f521ec7cc3fd43d1a6
