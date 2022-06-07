import Header from "../../components/Header";
import React, { MouseEvent, useEffect, useState } from "react";
import * as S from "./style";
import { list } from "./dummyData";
import { GoAfter } from "../../components/GoAfter";
import { AlarmAfterSchool } from "../../components/AlarmAfterSchool";
import * as Type from "../../types/AfterSchoolType";
import { type } from "os";
import { AfterAdmin } from "../../components/Detail/Excomponent";
import { FixClub } from "../../components/Detail/FixClub";
import { Admin } from "../../components/Detail/Admin";
import { AfterSchoolAdmin } from "../../components/Detail/AfterSchollAdmin";
// import ProfilePageY from "../../components/ProfilePage";
import * as SVG from "../../SVG";

export default function AfterSchool() {
  type FilterDayType = {
    day: "MON" | "TUE" | "WED";
    check: boolean;
  };
  type FilterGradeType = {
    grade: number;
    check: boolean;
  };

  const [day, setDay] = useState<FilterDayType[]>([
    {
      day: "MON",
      check: false,
    },
    {
      day: "TUE",
      check: false,
    },
    {
      day: "WED",
      check: false,
    },
  ]);

  const [grade, setGrade] = useState<FilterGradeType[]>([
    {
      grade: 1,
      check: false,
    },
    {
      grade: 2,
      check: false,
    },
    {
      grade: 3,
      check: false,
    },
  ]);
  const [filter, setFilter] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [afterList, setAfterList] = useState<Type.PropListType[]>([]);

  const ChangeAfterList = () => {
    if (search === "") {
      return [];
      // return list;
    } else {
      const MakeList = list.filter(
        (e) =>
          e.lecture.includes(search) ||
          `${e.grade}` === search ||
          `${e.grade}학년` === search ||
          changeWeek(e.week).includes(search) ||
          `${changeWeek(e.week)}요일`.includes(search)
      );
      return MakeList;
    }
  };

  const userState: Type.UserState = {
    id: 1,
    title: undefined,
    grade: 1,
    week: "MON",
    personnel: 13,
    maxPersonnel: 25,
    isApplied: false,
  };

  const makeSelectButton = ({
    lecture,
    week,
  }: {
    lecture: string;
    week: "MON" | "TUE" | "WED";
  }) => {
    if (userState.title === undefined) {
      return <S.SelectButton state={"null"}>신청</S.SelectButton>;
    } else if (
      lecture === userState.title &&
      week === userState.week &&
      userState.isApplied === false
    ) {
      return <S.SelectButton state={"true"}>취소</S.SelectButton>;
    } else {
      return <S.SelectButton state={"false"}></S.SelectButton>;
    }
  };

  const changeCheckDay = (e: MouseEvent) => {
    const findCheckIndex: number = day.findIndex(
      (element) =>
        changeWeek(element.day) + "요일" ===
        (e.target as HTMLSpanElement).outerText
    );
    const newList = day.map((item, i) => {
      if (i === findCheckIndex) {
        const newItem = {
          day: item.day,
          check: !item.check ? true : false,
        };
        return newItem;
      } else if (item.check === true) {
        const newItem = {
          day: item.day,
          check: false,
        };
        return newItem;
      } else {
        return item;
      }
    });

    setDay(newList);
  };

  const changeCheckGrade = (e: MouseEvent) => {
    const findCheckIndex: number = grade.findIndex(
      (element) =>
        element.grade === parseInt((e.target as HTMLSpanElement).outerText)
    );
    const newList = grade.map((item, i) => {
      if (i === findCheckIndex) {
        const newItem = {
          grade: item.grade,
          check: !item.check ? true : false,
        };
        return newItem;
      } else if (item.check === true) {
        const newItem = {
          grade: item.grade,
          check: false,
        };
        return newItem;
      } else {
        return item;
      }
    });
    setGrade(newList);
  };

  const changeWeek: Type.ChangeWeekType = (e) => {
    switch (e) {
      case "MON":
        return "월";
      case "TUE":
        return "화";
      case "WED":
        return "수";
      default:
        console.error("Week Error");
        break;
    }
  };

  const MakeFilter = () => {
    const CheckDay = day.filter((e) => e.check === true);
    const CheckGrade = grade.filter((e) => e.check === true);

    let kakoList: Type.PropListType[] = [];

    if (CheckDay.length === 0 && CheckGrade.length === 0) {
      setAfterList(ChangeAfterList());
    } else if (CheckDay.length === 0 && CheckGrade.length === 1) {
      kakoList = list.filter(
        // kakoList = ChangeAfterList().filter(
        (e) => e.grade === CheckGrade[0].grade
      );
      setAfterList(kakoList);
    } else if (CheckDay.length === 1 && CheckGrade.length === 0) {
      kakoList = list.filter((e) => e.week === CheckDay[0].day);
      // kakoList = ChangeAfterList().filter((e) => e.week === CheckDay[0].day);
      setAfterList(kakoList);
    } else if (CheckDay.length === 1 && CheckGrade.length === 1) {
      kakoList = list.filter(
        // kakoList = ChangeAfterList().filter(
        (e) => e.week === CheckDay[0].day && e.grade === CheckGrade[0].grade
      );
      setAfterList(kakoList);
    }
  };

  const [closeDetail, setCloseDetail] = useState<boolean>(true);

  useEffect(() => {
    setAfterList(ChangeAfterList());
  }, [search]);

  useEffect(() => {
    MakeFilter();
  }, [grade, day]);

  return (
    <S.AfterSchool>
      <Header />
      <S.Search>
        <S.Input
          type="text"
          name="search"
          placeholder="검색어를 입력하세요."
          autoComplete="off"
          value={search}
          onChange={(e: { target: HTMLInputElement }) => {
            setSearch(e.target.value);
          }}
        />
        <i onClick={ChangeAfterList}>
          <SVG.SearchIcon />
        </i>
        <i onClick={() => setFilter(!filter)}>
          <SVG.SearchFilter />
        </i>
      </S.Search>
      {filter ? (
        <S.FilterBox>
          <S.FilterList>
            <p>요일</p>
            {day.map((e: any, i) => {
              return (
                <S.FilterElement
                  key={i}
                  state={e.check}
                  onClick={changeCheckDay}
                >
                  {changeWeek(e.day) + "요일"}
                </S.FilterElement>
              );
            })}
          </S.FilterList>
          <S.FilterList>
            <p>대상학년</p>
            {grade.map((e: any, i) => {
              return (
                <S.FilterElement
                  key={i}
                  state={e.check}
                  onClick={changeCheckGrade}
                >
                  {e.grade + "학년"}
                </S.FilterElement>
              );
            })}
          </S.FilterList>
        </S.FilterBox>
      ) : (
        ""
      )}
      <S.AfterSchoolBox filter={`${filter}`}>
        <S.CurseList>
          <span>강좌</span>
          <span>강의시간</span>
          <span>대상학년</span>
        </S.CurseList>
        {afterList.length === 0 ? (
          <S.NotFilter>
            <SVG.Whale />
            <p>
              검색이나 필터를 사용해서
              <br />
              방과후를 검색해주세요.
            </p>
          </S.NotFilter>
        ) : (
          <>
            <S.ScollBox>
              {afterList.map((e: Type.PropListType, i) => (
                <S.Enrolment key={i}>
                  <div>
                    <p>{e.lecture}</p>
                    <p>{changeWeek(e.week)}</p>
                    <p>{e.grade}</p>
                  </div>
                  {makeSelectButton(e)}
                </S.Enrolment>
              ))}
            </S.ScollBox>
          </>
        )}
      </S.AfterSchoolBox>
      {closeDetail && <AfterSchoolAdmin fun={setCloseDetail} />}
      {/* <Admin /> */}
      {/* <FixClub /> */}
      {/* {detail ? "" : <AfterAdmin />} */}
      {/* <GoAfter /> */}
      {/* <AlarmAfterSchool /> */}
    </S.AfterSchool>
  );
}
