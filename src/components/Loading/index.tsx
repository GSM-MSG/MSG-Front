import Image from "next/image";
import * as S from "./styled";

export default function index() {
  return (
    <S.Wrapper>
      <S.LoadingImg src="/png/Loading.png" />
    </S.Wrapper>
  );
}
