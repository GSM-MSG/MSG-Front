/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import * as S from "./styles";
import { Tag, Tags } from "../ClubAll/styles";
import ApplicationCard from "./ApplicationCard";
import MemberCard from "./MemberCard";
import { ApplicantsType } from "../../types/ApplicantsType";
import { MemberType } from "../../types/MemberType";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ClubKind } from "../CreatePage/types/ClubKind";
import UserCard from "./UserCard";

interface UsersProps {
  users?: MemberType[];
  applications?: ApplicantsType[];
  page: boolean;
  type: ClubKind;
}

const Users: NextPage<UsersProps> = ({ users, applications, page, type }) => {
  const router = useRouter();
  const [member, setMember] = useState<MemberType[] | undefined>(users);
  const [application, setApplication] = useState<ApplicantsType[] | undefined>(
    applications
  );

  return (
    <S.UsersWrapper>
      <S.Title>명단 관리</S.Title>
      <div>
        <Tags>
          <Link href={`/${type.toLowerCase()}/${router.query.clubName}/users`}>
            <a>
              <Tag active={page}>구성원</Tag>
            </a>
          </Link>
          <Link
            href={`/${type.toLowerCase()}/${router.query.clubName}/application`}
          >
            <a>
              <Tag active={!page}>신청 명단</Tag>
            </a>
          </Link>
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
          {application?.map((user) => (
            <ApplicationCard key={user.userId} user={user} />
          ))}
        </S.CardList>
      )}
    </S.UsersWrapper>
  );
};

export default Users;
