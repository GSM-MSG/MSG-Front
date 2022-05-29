import Header from "../../components/Header";
import styled from "@emotion/styled";
import { Alarm, ReadingGlasses, SmallX, SearchFilter, SearchIcon, Letter, Plus, LeftArrow } from "../../SVG";
import { text } from "stream/consumers";
import { stringifyQuery } from "next/dist/server/server-route-utils";
import { type } from "os";
import { useState } from "react";
import * as S from "./style"
import { AlarmAfterSchool } from "../../components/AlarmAfterSchool";
import { GoAfter } from "../../components/GoAfter";
import {list}  from "./dummyData"


type UserState = {
    id: number,
    title?: string,
    grade: number,
    week: string,
    personnel: number,
    maxPersonnel: number,
    isApplied: boolean
};


type PropListType = {
    lecture: string,
    week: "MON" | "TUE" | "WED",
    grade: number,
    personnel: number,
    maxPersonnel: number
};

type ChangeWeekType = (e: "MON" | "TUE" | "WED") => any;


export default function AfterSchool() {

    const [filter, setFilter] = useState(false);


    const userState: UserState = {
        id: 1,
        title: undefined,
        grade: 1,
        week: "MON",
        personnel: 13,
        maxPersonnel: 25,
        isApplied: false
    };

    const makeSelectButton = ({ lecture, week }: { lecture: string, week: "MON" | "TUE" | "WED" }) => {

        if (userState.title === undefined) {

            return <S.SelectButton state={"null"}>신청</S.SelectButton>
        } else if (lecture === userState.title && week === userState.week && userState.isApplied === false) {

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
        </>
    )
}
