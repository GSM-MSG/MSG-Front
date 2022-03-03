/* eslint-disable @next/next/link-passhref */
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Alarm, Plus, Speaker } from "../../SVG";

import * as S from "./styles";

export default function Header() {
  const { data } = useSession();
  return (
    <S.Wrapper>
      <Link href="/">
        <S.Logo>GCMS</S.Logo>
      </Link>
      <S.Icons>
        <Plus />
        <Speaker />
        <Alarm />
        <Link href={`/user/${data?.user?.name}`}>
          <a>
            <S.UserImage src={data?.user?.image || ""} />
          </a>
        </Link>
      </S.Icons>
    </S.Wrapper>
  );
}
