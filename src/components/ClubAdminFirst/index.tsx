import * as S from "./styles";
import * as SVG from "../../SVG";
import { Detail } from "../Detail/AllDetail";
import { useState } from "react";

export default function ClubAdminFirst() {
  const [closeDetail, setCloseDetail] = useState<boolean>(true);

  return (
    <>
      <S.Wrapper>
        <S.Contents>
          <S.Logo>
            <SVG.LogoWhite />
            <S.Title>방과후 어드민 페이지</S.Title>
          </S.Logo>
          <S.ButtonBox>
            <S.Button color="#FFFFFF">
              <S.LoginText color="#1E1E1C">학생 정보 수정하기</S.LoginText>
            </S.Button>
            <S.Button color="#FFFFFF">
              <S.LoginText color="#1E1E1C">동아리 정보 수정하기</S.LoginText>
            </S.Button>
          </S.ButtonBox>
        </S.Contents>
      </S.Wrapper>
      {closeDetail && <Detail fun={setCloseDetail} name="ClubAdminFirst" />}
    </>
  );
}
