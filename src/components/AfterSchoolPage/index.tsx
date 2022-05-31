import React from "react";
import * as S from "./Style";
import * as SVG from "../../SVG";

export default function AfterSchoolPage() {
    return (
        <S.Wrapper>
            <S.InputContainer>
                <S.Title>학생정보 수정</S.Title>
                <S.InputWrapper>
                    <input placeholder="검색어를 입력하세요" />
                    <SVG.ReadingGlasses />
                </S.InputWrapper>
            </S.InputContainer>
        </S.Wrapper>
    );
}