import Link from "next/link";
import { Dispatch, SetStateAction, useEffect } from "react";

import * as SVG from "../../SVG";
import * as S from "./styles";

export default function Header({
  turn = true,
  clickModal,
}: {
  turn?: boolean;
  clickModal?: Dispatch<SetStateAction<boolean>>;
}) {
  useEffect(() => {}, []);

  return (
    <S.Wrapper>
      <Link href="/">
        <S.Logo>GCMS</S.Logo>
      </Link>
      <S.Icons>
        {turn && (
          <Link href={clickModal ? "/admin/afterSchool" : "/create"}>
            <a onClick={() => clickModal && clickModal(true)}>
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
