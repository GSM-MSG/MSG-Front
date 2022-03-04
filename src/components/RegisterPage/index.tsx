import * as S from "./styles";
import { AddImg } from "../../SVG";

export default function RegisterPage() {
  return (
    <S.Wrapper>
      <S.CoverImg>
        <S.CoverImgInfo>
          <AddImg />
          <h2>배너를 추가해주세요</h2>
          <h4>(1920 X 200)</h4>
        </S.CoverImgInfo>
      </S.CoverImg>
    </S.Wrapper>
  );
}
