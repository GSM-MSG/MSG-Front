/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules";
import { toggle_popup } from "../../modules/popup";
import { Alarm, Plus, Speaker } from "../../SVG";
import Popup from "../Popup";
import useSwr from "swr";

import * as S from "./styles";
import fetcher from "../../lib/fetcher";

export default function Header() {
  const { popup } = useSelector((state: RootState) => ({
    popup: state.popup,
  }));
  const dispatch = useDispatch();
  const router = useRouter();

  const { data } = useSwr("/", fetcher);

  return (
    <S.Wrapper>
      <Link href="/">
        <S.Logo>GCMS</S.Logo>
      </Link>
      {data && data.name ? (
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
          <Link href={`/user/${data.name}`}>
            <a>
              <S.UserImage src={data.picture} />
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
