import { MemberType } from "../../types/MemberType";
import * as S from "./styles";

interface UserCardProps {
  user: MemberType;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <S.UserCardWrapper>
      <S.UserImg src={user.user.userImg} />
      <S.Info>
        <div>
          <S.Name>{user.user.name}</S.Name>
          <S.Description>
            {user.user.grade}학년 {user.user.class}반 {user.user.num}번
          </S.Description>
        </div>
        <S.Bottom>
          <S.Approve>승인</S.Approve>
          <S.Refuse>거절</S.Refuse>
        </S.Bottom>
      </S.Info>
    </S.UserCardWrapper>
  );
}
