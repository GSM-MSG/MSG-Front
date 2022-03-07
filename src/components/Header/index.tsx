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
  const { popup, user } = useSelector((state: RootState) => ({
    popup: state.popup,
    user: state.user,
  }));
  const dispatch = useDispatch();
  const router = useRouter();

  console.log(user);

  return (
    <S.Wrapper>
      <Link href="/">
        <S.Logo>GCMS</S.Logo>
      </Link>
      {user.email === "authenticated" ? (
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
          <Link href={`/user/${user?.name}`}>
            <a>
              <S.UserImage src={user?.image || ""} />
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
