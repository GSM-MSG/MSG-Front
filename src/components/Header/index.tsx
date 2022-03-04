/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/link-passhref */
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Alarm, Plus, Speaker } from "../../SVG";

import * as S from "./styles";

export default function Header() {
  const { data } = useSession();
  const router = useRouter();

  return (
    <S.Wrapper>
      <Link href="/">
        <S.Logo>GCMS</S.Logo>
      </Link>
      {data?.user?.name ? (
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
      ) : (
        <S.LoginButton onClick={() => router.push("/login")}>
          <Image src="/png/GoogleLogo.png" width={25} height={25} />
          <div>Google Login</div>
        </S.LoginButton>
      )}
    </S.Wrapper>
  );
}
