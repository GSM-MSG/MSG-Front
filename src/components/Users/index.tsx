/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import * as S from "./styles";
import { Tag, Tags } from "../ClubAll/styles";
import MemberCard from "./MemberCard";
import { MemberType, Member } from "../../types/MemberType";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ClubKind } from "../CreatePage/types/ClubKind";
import UserCard from "./UserCard";

interface UsersProps {
  users: MemberType;
  page: boolean;
  type: ClubKind;
}

const Users: NextPage<UsersProps> = ({ users, page, type }) => {
  const router = useRouter();
  const [member, setMember] = useState<Member[] | undefined>(
    users?.requestUser
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
      <S.CardList>
        {member?.map((user) => (
          <MemberCard key={user.id} user={user.user} />
        ))}
      </S.CardList>
    </S.UsersWrapper>
  );
};

export default Users;
