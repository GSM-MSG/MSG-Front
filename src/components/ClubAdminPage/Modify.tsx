import * as S from "./style";
import * as SVG from "../../SVG";
import React, { useEffect, useRef, useState } from "react";
import { Club, ClubMembersType } from "../../types";
import { clubData } from "./DummyData";


export default function Modify({ item, onClose }: { item: ClubMembersType, onClose: (e: any) => void }) {
    const [isFind, setFind] = useState<boolean>(false);
    const [clubList, setClubList] = useState<Array<Club>>(clubData);
    const [search, setSearch] = useState<string>(item.club);
    const [values, setValues] = useState({
        name: item.name,
        stuNum: item.grade * 1000 + item.class * 100 + item.num,
        club: item.club,
        role: item.role,
    });
    const [club, setClub] = useState<boolean>(false);

    const outside: any = useRef();
    const changeClub: any = useRef();

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

    const onList = () => {
        return (
            clubList.filter((item: any) => {
                if (search !== "" && item.title.toLowerCase() === search.toLowerCase()) {
                    return item;
                }
            }).map((item: any, idx: number) => (
                <>
                    <S.ClubBanner src={item.bannerUrl} />
                    <S.ClubName key={idx} ref={changeClub}>{item.title}</S.ClubName>
                </>
            ))
        )
    }

    useEffect(() => {
        setClub(changeClub.current !== null && changeClub.current !== undefined ? true : false);
    })

    return (
        <S.ModifyLayout ref={outside} onClick={(e: any) => { outside.current === e.target && onClose(null) }}>
            <S.ModifyBox isModal={isFind}>
                {isFind ?
                    <>
                        <h2>동아리 조회</h2>
                        <S.InputWrapper>
                            <input placeholder="검색어를 입력하세요" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                            <SVG.ReadingGlasses />
                        </S.InputWrapper>
                        <S.ClubInfo>
                            {onList()}
                        </S.ClubInfo>
                        <S.DoneBtn isModal={isFind} club={club} onClick={() => { setFind(false); /*setValues({...values, club:})*/ }}>선택</S.DoneBtn>
                    </> : <>
                        <h2>학생정보 수정</h2>
                        <S.ProfileImg src="png/Loading.png" />
                        <div>
                            <ul>
                                <li>
                                    <p>이름</p>
                                    <S.ModifyInput value={values.name} onChange={(e: any) => setValues({ ...values, name: e.target.value })} />
                                </li>
                                <li>
                                    <p>학번</p>
                                    <S.ModifyInput value={values.stuNum} onChange={(e: any) => { setValues({ ...values, stuNum: +e.target.value }) }} readOnly />
                                </li>
                                <li>
                                    <p>동아리</p>
                                    <S.ModifyInput value={values.club} onChange={(e: any) => setValues({ ...values, club: e.target.value })} readOnly />
                                    <S.FindBtn onClick={() => setFind(true)}>찾아보기</S.FindBtn>
                                </li>
                                <li>
                                    <p>역할</p>
                                    <S.ModifyInput value={values.role} onChange={(e: any) => setValues({ ...values, role: e.target.value })} />
                                </li>
                            </ul>
                        </div>
                        <S.DoneBtn isModal={isFind} club={true} onClick={() => ModalClose()}>완료</S.DoneBtn>
                    </>
                }
            </S.ModifyBox>
        </S.ModifyLayout >
    );
}