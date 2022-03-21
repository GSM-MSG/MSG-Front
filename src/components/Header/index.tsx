/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import { useEffect } from "react";

import * as SVG from "../../SVG";
import * as S from "./styles";

export default function Header() {
  useEffect(() => {}, []);

  return (
    <S.Wrapper>
      <Link href="/">
        <S.Logo>GCMS</S.Logo>
      </Link>
      <S.Icons>
        <Link href="/register">
          <a>
            <SVG.Plus />
          </a>
        </Link>
        <Link href={`/user/${"사람"}`}>
          <a>
            <SVG.UserIcon />
          </a>
        </Link>
      </S.Icons>
    </S.Wrapper>
  );
}
