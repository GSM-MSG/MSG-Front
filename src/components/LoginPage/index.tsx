/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { useRouter } from "next/router";
import { useGoogleLogin } from "react-google-login";
import { client_id } from "../../lib/google";

import * as S from "./styles";

export default function LoginPage() {
  const router = useRouter();
  const { signIn, loaded } = useGoogleLogin({
    clientId: client_id,
    onSuccess: async (result: any) => {
      // result.tokenId
      router.push("/");
    },
  });

  return (
    <S.Wrapper>
      <S.Contents>
        <S.LoginButton onClick={() => signIn()}>
          <Image src="/png/GoogleLogo.png" width={32} height={35} />
          <div>Google 계정으로 로그인</div>
          <div></div>
        </S.LoginButton>
      </S.Contents>
    </S.Wrapper>
  );
}
