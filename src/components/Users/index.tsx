<<<<<<< HEAD
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
=======
import { useState } from "react";
import * as S from "./styles";
import MemberCard from "./MemberCard";
import { MemberType } from "../../types/MemberType";
import { NextPage } from "next";
import UserCard from "./UserCard";
import Header from "../Header";
import checkQuery from "../../lib/checkQuery";
import api from "../../lib/api";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

interface UsersProps {
  users: MemberType;
  type: "MANAGE" | "APPLICATION";
}

const Users: NextPage<UsersProps> = ({ users, type }) => {
  const router = useRouter();
  const [member, setMember] = useState<MemberType>(users);

  const urlArray = router.asPath.split("/");

  const onClick = async () => {
    try {
      await checkQuery(async () =>
        api.put("/club/web/close", {
          q: decodeURI(urlArray[2]),
          type: urlArray[1].toUpperCase(),
        })
      );

      toast.success("동아리 마감에 성공했습니다.");
      router.push(`/${urlArray[1]}/${urlArray[2]}`);
    } catch (e) {
      toast.error("동아리 마감에 실패했습니다.");
    }
  };

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
            {type === "APPLICATION" && (
              <S.ButtonWrapper>
                <S.CloseButton onClick={onClick}>신청 마감하기</S.CloseButton>
              </S.ButtonWrapper>
            )}
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
>>>>>>> d3d64d895a9211ab8d7046f521ec7cc3fd43d1a6
