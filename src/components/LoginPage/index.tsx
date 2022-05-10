import * as S from "./styles";
import * as SVG from "../../SVG";

export default function LoginPage() {
  return (
    <S.Wrapper>
      <S.Contents>
        <S.Logo>
          <SVG.LogoWhite />
          <S.Title>
            GSM 동아리
            <br />
            관리의 모든것
          </S.Title>
        </S.Logo>
      </S.Contents>
    </S.Wrapper>
  );
}
