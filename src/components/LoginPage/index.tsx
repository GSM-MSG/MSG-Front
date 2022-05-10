import { useRouter } from "next/router";
import { ServerUrl } from "../../config/config";
import * as S from "./styles";
import * as SVG from "../../SVG";

export default function LoginPage() {
  const router = useRouter();
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
        <S.OauthButton onClick={() => router.push(`${ServerUrl}/auth/web`)}>
          <SVG.Google />
          <S.LoginText>Sign in with Google</S.LoginText>
        </S.OauthButton>
      </S.Contents>
    </S.Wrapper>
  );
}
