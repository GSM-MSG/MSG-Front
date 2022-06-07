import { NextPage } from "next";
import { ApplicantsType } from "../../types/ApplicantsType";
import { MemberType } from "../../types/MemberType";
import * as S from "./styles";

interface UserCardProps {
  user: MemberType | ApplicantsType;
}

const UserCard: NextPage<UserCardProps> = ({ user }) => {
  if (user instanceof MemberType)
    return <S.UserCardWrapper></S.UserCardWrapper>;
};

export default UserCard;
