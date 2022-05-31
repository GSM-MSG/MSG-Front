/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "../../lib/api";
import { UserType } from "../../types";
import * as S from "./styles";
import { Tag, Tags } from "../ClubAll/styles";
import UserCard from "./UserCard";
import MemberCard from "./MemberCard";
import Loading from "../Loading";
import { ApplicantsType } from "../../types/ApplicantsType";

export default function Users() {
  const router = useRouter();
  const [users, setUsers] = useState<UserType[]>();
  const [applicants, setApplicants] = useState<ApplicantsType>();
  const [page, setPage] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        if (page) {
          const { data } = await api({ query: "/club/members", method: "get" });
          setUsers(data);
        } else {
          const { data } = await api({
            query: "/club/applicant",
            method: "get",
          });
          setApplicants(data);
        }
      } catch (e: any) {
        // if (e.response.data.status === 406) router.back();
        // else router.push("/login");
      }
    })();
  }, [page]);

  if ((!users && page) || (!applicants && !page)) return <Loading />;

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
          {/* {users?.map((user) => (
            <UserCard key={user.userId} user={user} />
          ))} */}
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
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
}
