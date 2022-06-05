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
  users: MemberType[];
}

const Users: NextPage<UsersProps> = ({ users }) => {
  const [member, setMember] = useState<MemberType[]>(users);
  const [applicants, setApplicants] = useState<ApplicantsType>();
  const [page, setPage] = useState<boolean>(true);

  return (
    <S.UsersWrapper>
      <S.Title>명단 관리</S.Title>
      <div>
        <Tags>
          <Tag active={page} onClick={() => setPage(true)}>
            구성원
          </Tag>
          <Tag active={!page} onClick={() => setPage(false)}>
            신청 명단
          </Tag>
        </Tags>
        <S.Hr />
      </div>
      {page ? (
        <S.CardList>
          {member?.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </S.CardList>
      ) : (
        <S.CardList>
          {/* {applicants?.list.map((user) => (
            <UserCard key={user.userId} user={user} />
          ))} */}
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </S.CardList>
      )}
    </S.UsersWrapper>
  );
};

export default Users;
