import * as S from "./styles";
import { Excomponent } from "./TriAngle";
import * as SVG from "../../SVG";

export function AfterAdmin() {
  return (
    <>
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
        <S.ExSearch>
          <SVG.SearchIcon color="black" />
          <Excomponent
            Triheight={7}
            Triturn={0}
            NameLogo={"검색"}
            Ex={"여기서 검색할 수 있습니다."}
            BoxTop={20}
            BoxRight={27}
            ExTop={6}
            ExLeft={0}
          />
        </S.ExSearch>
        <S.ExFilter>
          <SVG.SearchFilter color="black" />
          <Excomponent
            Triheight={5.5}
            Triturn={-45}
            NameLogo={"필터"}
            Ex={"검색할 항목을 특정할 수 있습니다."}
            BoxTop={19}
            BoxRight={19}
            ExTop={1}
            ExLeft={3}
          />
        </S.ExFilter>
        <S.ExListButton>
          <button>명단보기</button>
          <Excomponent
            Triheight={4.5}
            Triturn={-35}
            NameLogo={"명단보기"}
            Ex={"방과후를 신청한 명단을 볼 수 있다."}
            BoxTop={59.7}
            BoxRight={14.5}
            ExTop={3}
            ExLeft={2.5}
          />
        </S.ExListButton>
        <S.ExManageButton>
          <Excomponent
            Triheight={8}
            Triturn={35}
            NameLogo={"관리하기"}
            Ex={"마우스를 올릴 시 방과후를 수정,삭제 할 수 있다."}
            BoxTop={80}
            BoxRight={0}
            ExTop={6}
            ExLeft={-3}
          />
        </S.ExManageButton>
      </S.BackGround>
    </>
  );
}
