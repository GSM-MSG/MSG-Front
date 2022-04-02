/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "../../lib/api";
import { UserType } from "../../types";
import * as S from "./styles";
import { Tag, Tags } from "../ClubAll/styles";

export default function Users() {
  const router = useRouter();
  const [users, setUsers] = useState<UserType[]>();
  const [page, setPage] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api({ query: "/club/members", method: "get" });
        setUsers(data);
      } catch (e: any) {
        // if (e.response.data.status === 406) router.back();
        // else router.push("/login");
      }
    })();
  }, []);

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
    </S.UsersWrapper>
  );
}
