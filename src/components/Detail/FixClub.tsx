import * as S from "./styles";
import { Excomponent } from "./TriAngle";
import * as SVG from "../../SVG";

export function FixClub() {
  return (
    <S.BackGround>
      <S.ExLogo>
        <S.Logo>GCMS</S.Logo>
        <Excomponent
          Triheight={7}
          Triturn={-45}
          NameLogo={"로고"}
          Ex={"클릭시 어드민페이지로 이동합니다."}
          BoxTop={5}
          BoxLeft={8}
          ExTop={3}
          ExLeft={4}
        />
      </S.ExLogo>
      <S.ExPlus>
        <SVG.Plus />
        <Excomponent
          Triheight={3}
          Triturn={40}
          NameLogo={"방과후 생성"}
          Ex={"빠르게 방과후를 생성할 수 있습니다."}
          BoxRight={-5}
          BoxTop={6}
          ExTop={2}
          ExLeft={-8}
        />
      </S.ExPlus>
      <S.ExClubSearch>
        <SVG.SearchIcon color="black" />
        <Excomponent
          Triheight={8}
          Triturn={-30}
          NameLogo={"검색"}
          Ex={"여기서 검색할 수 있습니다."}
          BoxTop={18}
          BoxRight={23}
          ExTop={6}
          ExLeft={3}
        />
      </S.ExClubSearch>
      <S.ExClubElement>
        <Excomponent
          Triheight={7}
          Triturn={-55}
          NameLogo={"동아리"}
          Ex={"클릭 시 동아리 상세 페이지로 이동합니다."}
          BoxTop={70}
          BoxLeft={50}
          ExTop={2}
          ExLeft={4}
        />
      </S.ExClubElement>
    </S.BackGround>
  );
}
