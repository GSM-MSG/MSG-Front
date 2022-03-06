/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/link-passhref */
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules";
import { toggle_popup } from "../../modules/popup";
import { Alarm, Plus, Speaker } from "../../SVG";
import Popup from "../Popup";

import * as S from "./styles";

export default function Header() {
  const { popup } = useSelector((state: RootState) => ({
    popup: state.popup,
  }));
  const dispatch = useDispatch();
  const { data } = useSession();
  const router = useRouter();

  return (
    <S.Wrapper>
      <Link href="/">
        <S.Logo>GCMS</S.Logo>
      </Link>
      {data?.user?.name ? (
        <S.Icons>
          <Link href="/register">
            <a>
              <Plus />
            </a>
          </Link>
          <Speaker />
          <span onClick={() => dispatch(toggle_popup())}>
            <Alarm />
          </span>
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
      {popup && <Popup />}
    </S.Wrapper>
  );
}
