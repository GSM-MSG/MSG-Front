/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import * as S from "./styles";
import { Tag, Tags } from "../ClubAll/styles";
import UserCard from "./UserCard";
import MemberCard from "./MemberCard";
import { ApplicantsType } from "../../types/ApplicantsType";
import { MemberType } from "../../types/MemberType";
import { NextPage } from "next";

interface UsersProps {
  users?: MemberType[];
  applications?: ApplicantsType[];
  page: boolean;
}

const Users: NextPage<UsersProps> = ({ users, applications, page }) => {
  const [member, setMember] = useState<MemberType[] | undefined>(users);
  const [application, setApplication] = useState<ApplicantsType[] | undefined>(
    applications
  );

  return (
    <S.UsersWrapper>
      <S.Title>명단 관리</S.Title>
      <div>
        <Tags>
          <Tag active={page}>구성원</Tag>
          <Tag active={!page}>신청 명단</Tag>
        </Tags>
        <S.Hr />
      </div>
      {page ? (
        <S.CardList>
          {member?.map((user) => (
            <MemberCard key={user.id} user={user} />
          ))}
        </S.CardList>
      ) : (
        <S.CardList>
          {users.map((user) => (
            <UserCard key={user.userId} user={user} />
          ))}
        </S.CardList>
      )}
    </S.UsersWrapper>
  );
};

export default Users;
