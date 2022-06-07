import { ApplicantsType } from "../../types/ApplicantsType";
import * as S from "./styles";

interface UserCardProps {
  user: ApplicantsType;
}

export default function ApplicationCard({ user }: UserCardProps) {
  return (
    <S.MemberWrapper>
      <S.UserImg src={user.userImg} />
      <S.Info>
        <div>
          <S.Name>{user.name}</S.Name>
          <S.Description>
            {user.grade}학년 {user.class}반 {user.num}번
          </S.Description>
        </div>
        <S.Bottom>
          <S.Approve>승인</S.Approve>
          <S.Refuse>거절</S.Refuse>
        </S.Bottom>
      </S.Info>
    </S.MemberWrapper>
  );
}
