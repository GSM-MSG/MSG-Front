import { useEffect, useState } from "react";
import * as S from "./styles";
import { Excomponent } from "./TriAngle";
import * as SVG from "../../SVG";
export function Detail({ fun, name }: any) {
  const [detail, setDetail] = useState<number>(0);
  const [detailList, setDetailList] = useState<any>([
    {
      name: "ClubAdminFirst",
      tag: [
        <S.FirstButtonOne>
          <S.Button color="#FFFFFF">
            <S.LoginText color="#1E1E1C">학생 정보 수정하기</S.LoginText>
          </S.Button>
          <Excomponent
            Triheight={15}
            Triturn={115}
            NameLogo={"학생 정보 수정하기"}
            Ex={"학생 정보를 수정항할 수 있는 페이지로 이동합니다."}
            BoxTop={66}
            BoxLeft={35}
            ExTop={-12}
            ExLeft={-29}
            ExPosition={true}
          />
        </S.FirstButtonOne>,
        <S.FirstButtonTwo>
          <S.Button color="#FFFFFF">
            <S.LoginText color="#1E1E1C">동아리 정보 수정하기</S.LoginText>
          </S.Button>
          <Excomponent
            Triheight={15}
            Triturn={-115}
            NameLogo={"동아리 정보 수정하기"}
            Ex={"동아리 정보를 수정할 수 있는 페이지로 이동합니다."}
            BoxTop={76}
            BoxRight={15}
            ExTop={-11}
            ExLeft={9}
          />
        </S.FirstButtonTwo>,
      ],
    },
    {
      name: "AdminFirst",
      tag: [
        <S.FirstButtonOne>
          <S.Button color="#4C53FF">
            <S.LoginText color="#FFFFFF">동아리 어드민 페이지</S.LoginText>
          </S.Button>
          <Excomponent
            Triheight={15}
            Triturn={115}
            NameLogo={"동아리 어드민페이지"}
            Ex={"동아리 어드민페이지로 이동합니다."}
            BoxTop={66}
            BoxLeft={35}
            ExTop={-11}
            ExLeft={-23}
            ExPosition={true}
          />
        </S.FirstButtonOne>,
        <S.FirstButtonTwo>
          <S.Button color="#FFFFFF">
            <S.LoginText color="#1E1E1C">방과후 어드민 페이지</S.LoginText>
          </S.Button>
          <Excomponent
            Triheight={15}
            Triturn={-115}
            NameLogo={"방과후 어드민페이지"}
            Ex={"방과후 어드민페이지로 이동합니다."}
            BoxTop={76}
            BoxRight={21}
            ExTop={-11}
            ExLeft={9}
          />
        </S.FirstButtonTwo>,
      ],
    },
    {
      name: "Excomponentm",
      tag: [
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
        </S.ExLogo>,
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
        </S.ExPlus>,
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
        </S.ExSearch>,
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
        </S.ExFilter>,
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
        </S.ExListButton>,
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
        </S.ExManageButton>,
      ],
    },
    {
      name: "FixClub",
      tag: [
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
        </S.ExLogo>,
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
        </S.ExPlus>,
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
        </S.ExClubSearch>,
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
        </S.ExClubElement>,
      ],
    },
  ]);
  const list = detailList.filter((e: any) => e.name === name)[0].tag;

  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.key === "Enter") setDetail(detail + 1);
    });
    if (detail > list.length - 1) {
      fun(false);
    }
  });

  return (
    <S.BackGround onClick={() => setDetail((current) => current + 1)}>
      {list.map((item: any, key: number) => {
        return (
          <S.Sibal key={key} isBeing={key <= detail}>
            {item}
          </S.Sibal>
        );
      })}
    </S.BackGround>
  );
}
