import { NextPage } from "next";
import { Member } from "../../types/MemberType";
import * as S from "./styles";

interface MemberCardProps {
  user: Member;
}

const MemberCard: NextPage<MemberCardProps> = ({ user }) => {
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
          <S.Approve>위임</S.Approve>
          <S.Refuse>강퇴</S.Refuse>
        </S.Bottom>
      </S.Info>
    </S.MemberWrapper>
  );
};

export default MemberCard;
