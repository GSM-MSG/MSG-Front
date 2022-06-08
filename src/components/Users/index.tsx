/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import * as S from "./styles";
import MemberCard from "./MemberCard";
import { MemberType, Member } from "../../types/MemberType";
import { NextPage } from "next";
import UserCard from "./UserCard";

interface UsersProps {
  users: MemberType;
  type: "MANAGE" | "APPLICATION";
}

const Users: NextPage<UsersProps> = ({ users, type }) => {
  const [member, setMember] = useState<Member[] | undefined>(users.requestUser);

  return (
    <S.UsersWrapper>
      <S.Title>
        {type === "MANAGE" ? "구성원 관리" : "신청자 명단 관리"}
      </S.Title>

      {users.userScope === "HEAD" ? (
        <S.CardList>
          {member?.map((user) => (
            <MemberCard key={user.email} user={user} />
          ))}
        </S.CardList>
      ) : (
        <S.CardList>
          {member?.map((user) => (
            <UserCard key={user.email} user={user} />
          ))}
        </S.CardList>
      )}
    </S.UsersWrapper>
  );
};

export default Users;
