import * as S from "./styles";
import { Excomponent } from "./TriAngle";

export function Admin() {
  return (
    <S.BackGround>
      <S.ClubAdmin>
        <Excomponent
          Triheight={15}
          Triturn={115}
          NameLogo={"동아리 어드민페이지"}
          Ex={"동아리 어드민페이지로 이동합니다."}
          BoxTop={70}
          BoxLeft={30}
          ExTop={-11}
          ExLeft={-23}
          ExPosition={true}
        />
      </S.ClubAdmin>
      <S.AfterSchollAdmin>
        <Excomponent
          Triheight={15}
          Triturn={-115}
          NameLogo={"방과후 어드민페이지"}
          Ex={"방과후 어드민페이지로 이동합니다."}
          BoxTop={80}
          BoxRight={20}
          ExTop={-11}
          ExLeft={9}
        />
      </S.AfterSchollAdmin>
    </S.BackGround>
  );
}
