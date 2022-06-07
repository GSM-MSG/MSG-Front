import { NextPage } from "next";
import { MemberType } from "../../types/MemberType";
import * as S from "./styles";

interface MemberCardProps {
  user: MemberType;
}

const MemberCard: NextPage<MemberCardProps> = ({ user }) => {
  return (
    <S.MemberWrapper>
      <S.UserImg src={user.user.userImg} />
      <S.Info>
        <div>
          <S.Name>{user.user.name}</S.Name>
          <S.Description>
            {user.user.grade}학년 {user.user.class}반 {user.user.num}번
          </S.Description>
        </div>
        <S.Bottom>
          <S.Approve>위임</S.Approve>
          <S.Refuse>강퇴</S.Refuse>
        </S.Bottom>
      </S.Info>
    </S.MemberWrapper>
  );
};

export default MemberCard;
