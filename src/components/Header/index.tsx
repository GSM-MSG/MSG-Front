import Link from "next/link";
import { useEffect } from "react";

import * as SVG from "../../SVG";
import * as S from "./styles";

export default function Header({
  turn = true,
  fn,
}: // link = "/create",
{
  turn?: boolean;
  fn?: any;
}) {
  useEffect(() => {}, []);

  return (
    <S.Wrapper>
      <Link href="/">
        <S.Logo>GCMS</S.Logo>
      </Link>
      <S.Icons>
        {turn && (
          <Link href={fn ? "/afterschooladmin" : "/create"}>
            <a onClick={() => fn(true)}>
              <SVG.Plus />
            </a>
          </Link>
        )}
        <Link href="/my">
          <a>
            <SVG.UserIcon />
          </a>
        </Link>
      </S.Icons>
    </S.Wrapper>
  );
}
