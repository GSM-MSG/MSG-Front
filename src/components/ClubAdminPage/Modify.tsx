import * as S from "./style";
import * as SVG from "../../SVG";
import React, { useRef, useState } from "react";
import { ClubMembersType } from "../../types";


export default function Modify({ item, onClose }: { item: ClubMembersType, onClose: (e: any) => void }) {
    const [isSearch, setSearch] = useState<boolean>(false);
    const [values, setValues] = useState({
        name: item.name,
        stuNum: item.grade * 1000 + item.class * 100 + item.num,
        club: item.club,
        role: item.role,
    });
    const outside: any = useRef();

    const ModalClose = () => {
        onClose({
            ...item,
            grade: Math.floor(values.stuNum / 1000),
            class: Math.floor(values.stuNum % 1000 / 100),
            num: Math.floor(values.stuNum % 100),
            name: values.name,
            club: values.club,
            role: values.role,
        });
    }

    return (
        <S.ModifyLayout ref={outside} onClick={(e) => { outside.current === e.target && onClose(null) }}>
            <S.ModifyBox isModal={isSearch}>
                {isSearch ?
                    <>
                        <h2>동아리 조회</h2>
                        <S.InputWrapper>
                            <input placeholder="검색어를 입력하세요" />
                            <SVG.ReadingGlasses />
                        </S.InputWrapper>
                        <S.ClubInfo>
                            <S.ClubBanner src="png/404.png" />
                            <S.ClubName>MSG</S.ClubName>
                        </S.ClubInfo>
                        <S.DoneBtn isModal={isSearch} onClick={() => setSearch(false)}>선택</S.DoneBtn>
                    </> : <>
                        <h2>학생정보 수정</h2>
                        <S.ProfileImg src="png/Loading.png" />
                        <div>
                            <ul>
                                <li>
                                    <p>이름</p>
                                    <S.ModifyInput value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} />
                                </li>
                                <li>
                                    <p>학번</p>
                                    <S.ModifyInput value={values.stuNum} onChange={(e) => { setValues({ ...values, stuNum: +e.target.value }) }} readOnly/>
                                </li>
                                <li>
                                    <p>동아리</p>
                                    <S.ModifyInput value={values.club} onChange={(e) => setValues({ ...values, club: e.target.value })} />
                                    <S.FindBtn onClick={() => setSearch(true)}>찾아보기</S.FindBtn>
                                </li>
                                <li>
                                    <p>역할</p>
                                    <S.ModifyInput value={values.role} onChange={(e) => setValues({ ...values, role: e.target.value })} />
                                </li>
                            </ul>
                        </div>
                        <S.DoneBtn isModal={isSearch} onClick={() => ModalClose()}>완료</S.DoneBtn>
                    </>
                }
            </S.ModifyBox>
        </S.ModifyLayout>
    );
}