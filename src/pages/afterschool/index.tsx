import Header from "../../components/Header";
import styled from "@emotion/styled";
import { Alarm, ReadingGlasses, SmallX, SearchFilter, SearchIcon } from "../../SVG";
import { text } from "stream/consumers";
import { stringifyQuery } from "next/dist/server/server-route-utils";
import { type } from "os";
import { useState } from "react";
import * as S from "./style"

type UserState = {
    id: number,
    title?: string,
    grade: number,
    week: string,
    personnel: number,
    maxPersonnel: number,
    isApplied: 0 | 1
};

type ListType = {
    lecture: string,
    week: "MON" | "TUE" | "WED",
    grade: number,
    personnel: number,
    maxPersonnel: number
}[];

type PropListType = {
    lecture: string,
    week: "MON" | "TUE" | "WED",
    grade: number,
    personnel: number,
    maxPersonnel: number
};

type ChangeWeekType = (e: "MON" | "TUE" | "WED") => any;

const AfterMoveBg = styled.div`
    z-index: 200;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #1E1E1C4D;
    /* background: rgba(243,244,245,0.5); */
    /* -webkit-backdrop-filter: blur(10px); */
    backdrop-filter: Blur(10px);
`
const AfterMoveBox = styled.div`
    z-index: 200;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    /* width: 900px;    */
    width: 56rem;
    height: 56rem;
    height: 37rem;
    border-radius: 10px;
    background-color: white;
    color: black;
`

export default function AfterSchool() {

    const [filter, setFilter] = useState(false);


    const userState: UserState = {
        id: 1,
        title: undefined,
        grade: 1,
        week: "MON",
        personnel: 13,
        maxPersonnel: 25,
        isApplied: 1
    };

    const makeSelectButton = ({ lecture, week }: { lecture: string, week: "MON" | "TUE" | "WED" }) => {

        if (userState.title === undefined) {

            return <S.SelectButton state={"null"}>신청</S.SelectButton>
        } else if (lecture === userState.title && week === userState.week && userState.isApplied === 1) {

            return <S.SelectButton state={"true"}>취소</S.SelectButton>

        } else {

            return <S.SelectButton state={"false"}></S.SelectButton>
        }

    };

    const [day, setDay] = useState([
        {
            day: "월요일",
            check: false
        },
        {
            day: "화요일",
            check: false
        },
        {
            day: "수요일",
            check: false
        }
    ])

    const [grade, setGrade] = useState([
        {
            grade: "1학년",
            check: false
        },
        {
            grade: "2학년",
            check: false
        },
        {
            grade: "3학년",
            check: false
        }
    ])

    const changeCheckDay = (e: any) => {
        const findCheckIndex: number = day.findIndex(element => element.day === e.target.outerText);
        const newList = day.map((item, i) => {
            if (i === findCheckIndex) {
                const newItem = {
                    day: item.day,
                    check: item.check === false ? true : false
                }
                return newItem;
            } else {
                return item;
            }
        })
        setDay(newList);
    };

    const changeCheckGrade = (e: any) => {
        const findCheckIndex: number = grade.findIndex(element => element.grade === e.target.outerText);
        const newList = grade.map((item, i) => {
            if (i === findCheckIndex) {
                const newItem = {
                    grade: item.grade,
                    check: item.check === false ? true : false
                }
                return newItem;
            } else {
                return item;
            }
        })
        setGrade(newList);
    };

    const changeWeek: ChangeWeekType = (e) => {
        switch (e) {
            case "MON":
                return "월";
            case "TUE":
                return "화";
            case "WED":
                return "수";
            default:
                console.error("Week Error")
                break;
        }
    }

    const list: ListType = [
        {
            lecture: "배드민턴",
            week: "MON",
            grade: 1,
            personnel: 12,
            maxPersonnel: 50
        },
        {
            lecture: "축구",
            week: "TUE",
            grade: 3,
            personnel: 18,
            maxPersonnel: 30
        },
        {
            lecture: "미술",
            week: "WED",
            grade: 2,
            personnel: 8,
            maxPersonnel: 10
        },
        {
            lecture: "치킨",
            week: "TUE",
            grade: 2,
            personnel: 8,
            maxPersonnel: 110
        },
        {
            lecture: "밥",
            week: "WED",
            grade: 2,
            personnel: 8,
            maxPersonnel: 110
        },
        {
            lecture: "밥",
            week: "WED",
            grade: 2,
            personnel: 8,
            maxPersonnel: 110
        },
        {
            lecture: "밥",
            week: "WED",
            grade: 2,
            personnel: 8,
            maxPersonnel: 110
        },
        {
            lecture: "밥",
            week: "WED",
            grade: 2,
            personnel: 8,
            maxPersonnel: 110
        },
        {
            lecture: "밥",
            week: "WED",
            grade: 2,
            personnel: 8,
            maxPersonnel: 110
        },
        {
            lecture: "밥",
            week: "WED",
            grade: 2,
            personnel: 8,
            maxPersonnel: 110
        },
        {
            lecture: "밥",
            week: "WED",
            grade: 2,
            personnel: 8,
            maxPersonnel: 110
        },
        {
            lecture: "밥",
            week: "WED",
            grade: 2,
            personnel: 8,
            maxPersonnel: 110
        },
        {
            lecture: "밥",
            week: "WED",
            grade: 2,
            personnel: 8,
            maxPersonnel: 110
        },
        {
            lecture: "밥",
            week: "WED",
            grade: 2,
            personnel: 8,
            maxPersonnel: 110
        }
    ];
    return (
        <>
            <Header />
            <S.AfterSchoolBox>
                <S.Search>
                    <S.Input
                        type="text"
                        name="search"
                        placeholder="검색어를 입력하세요."
                        autoComplete="off"
                    />
                    <SearchIcon />
                    <i onClick={() => setFilter(!filter)}>
                        <SearchFilter />
                    </i>
                </S.Search>
                {
                    filter ?
                        <S.FilterBox>
                            <S.FilterList>
                                <p>요일</p>
                                {
                                    day.map((e: any) => {
                                        return (
                                            <S.FilterElement state={e.check} onClick={changeCheckDay}>
                                                {e.day}
                                                {e.check ? <div onClick={changeCheckDay} ><SmallX /></div> : ""}
                                            </S.FilterElement>
                                        )
                                    })
                                }
                            </S.FilterList>
                            <S.FilterList>
                                <p>대상학년</p>
                                {
                                    grade.map((e: any) => {
                                        return (
                                            <S.FilterElement state={e.check} onClick={changeCheckGrade}>
                                                {e.grade}
                                                {e.check ? <div onClick={changeCheckGrade} ><SmallX /></div> : ""}
                                            </S.FilterElement>
                                        )
                                    })
                                }
                            </S.FilterList>
                        </S.FilterBox>
                        :
                        ""
                }

                <S.CurseList>
                    <span>강좌</span>
                    <span>강의시간</span>
                    <span>대상학년</span>
                    <span>수강인원</span>
                </S.CurseList>
                <S.ScollBox>
                    {
                        list.map((e: PropListType) => {
                            return (
                                <S.Enrolment>

                                    <p>{e.lecture}</p>
                                    <p>{changeWeek(e.week)} 8,9교시</p>
                                    <p>{e.grade}</p>
                                    <p>{e.personnel}/{e.maxPersonnel}</p>
                                    {
                                        makeSelectButton(e)
                                    }
                                </S.Enrolment>
                            )
                        })
                    }
                </S.ScollBox>
            </S.AfterSchoolBox>
            {/* <AfterMoveBg>
                    <AfterMoveBox>
                        ss
                    </AfterMoveBox>
            </AfterMoveBg> */}
        </>
    )
}
