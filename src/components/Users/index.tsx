/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import * as S from "./styles";
import MemberCard from "./MemberCard";
import { MemberType } from "../../types/MemberType";
import { NextPage } from "next";
import UserCard from "./UserCard";
import Header from "../Header";

interface UsersProps {
  users: MemberType;
  type: "MANAGE" | "APPLICATION";
}

const Users: NextPage<UsersProps> = ({ users, type }) => {
  const [member, setMember] = useState<MemberType>(users);

  return (
    <>
      <Header />
      <S.UsersWrapper>
        <S.Title>
          {type === "MANAGE" ? "구성원 관리" : "신청자 명단 관리"}
        </S.Title>

        {users.userScope === "HEAD" && member !== undefined ? (
          <>
            <S.CardList>
              <UserCard
                user={
                  member.requestUser?.filter((user) => user.scope === "HEAD")[0]
                }
              />
              {member.requestUser
                ?.filter((user) => user.scope !== "HEAD")
                ?.map((user) => (
                  <MemberCard
                    key={user.email}
                    member={member}
                    setMember={setMember}
                    user={user}
                    type={type}
                  />
                ))}
            </S.CardList>
            <S.ButtonWrapper>
              <S.CloseButton>신청 마감하기</S.CloseButton>
            </S.ButtonWrapper>
          </>
        ) : (
          <S.CardList>
            {member?.requestUser.map((user) => (
              <UserCard key={user.email} user={user} />
            ))}
          </S.CardList>
        )}
      </S.UsersWrapper>
    </>
  );
};

export default Users;
