import Header from "../../components/Header";
import React, { MouseEvent, useEffect, useState } from "react";
import * as S from "./styles";
import { list } from "./dummyData";
import * as Type from "../../types/AfterSchoolType";
import { Detail } from "../../components/Detail/AllDetail";
import * as SVG from "../../SVG";
import SelectButton from "../../components/SelectButton";
import { AdminFix } from "../../components/AdminFix";
import { CreateAfterSchool } from "../../components/CreateAfterSchool";

export default function AfterSchool() {
  type FilterDayType = {
    day: "MON" | "TUE" | "WED";
    check: boolean;
  };
  type FilterGradeType = {
    grade: number;
    check: boolean;
  };
  const [category, setCategory] = useState(4);
  console.log(category);
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
      return list;
    } else {
      const MakeList = list.filter(
        (e) =>
          e.afterSchool.title.includes(search) ||
          `${e.afterSchool.grade}` === search ||
          `${e.afterSchool.grade}학년` === search ||
          changeWeek(e.afterSchool.week[0]).includes(search) ||
          `${changeWeek(e.afterSchool.week[0])}요일`.includes(search)
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

  const makeSelectButton = (e: Type.PropListType) => {
    if (category === 0) {
      return (
        <S.SelectButton
          onClick={() => {
            setFix(true);
            setFixState(e);
          }}
          state={"blue"}
        >
          수정하기
        </S.SelectButton>
      );
    } else if (category === 1) {
      return (
        <S.SelectButton onClick={() => console.log("삭제하기")} state={"red"}>
          삭제하기
        </S.SelectButton>
      );
    } else if (category === 2) {
      return (
        <S.SelectButton onClick={() => console.log("통계보기")} state={"blue"}>
          통계보기
        </S.SelectButton>
      );
    } else {
      return (
        <S.SelectButton onClick={() => console.log("명단보기")} state={"blue"}>
          명단보기
        </S.SelectButton>
      );
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
        (e) => e.afterSchool.grade === CheckGrade[0].grade
      );
      setAfterList(kakoList);
    } else if (CheckDay.length === 1 && CheckGrade.length === 0) {
      kakoList = list.filter((e) =>
        e.afterSchool.week.includes(CheckDay[0].day)
      );
      setAfterList(kakoList);
    } else if (CheckDay.length === 1 && CheckGrade.length === 1) {
      kakoList = list.filter(
        (e) =>
          e.afterSchool.week.includes(CheckDay[0].day) &&
          e.afterSchool.grade === CheckGrade[0].grade
      );
      setAfterList(kakoList);
    }
  };

  const [closeDetail, setCloseDetail] = useState<boolean>(true);
  const [fix, setFix] = useState(false);
  const [create, setCreate] = useState(false);

  const [after, setAfter] = useState(false);

  const [fixState, setFixState] = useState({});
  const [afterState, setAfterState] = useState({});

  useEffect(() => {
    setAfterList(ChangeAfterList());
  }, [search]);

  useEffect(() => {
    MakeFilter();
  }, [grade, day]);

  return (
    <S.AfterSchool>
      <Header fn={setCreate} />
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
        <S.ScollBox>
          {afterList.map((e: Type.PropListType, i) => {
            return (
              <S.Enrolment key={i}>
                <div>
                  <p>{e.afterSchool.title}</p>
                  <p>{changeWeek(e.afterSchool.week[0])}</p>
                  <p>{e.afterSchool.grade}</p>
                </div>
                {makeSelectButton(e)}
              </S.Enrolment>
            );
          })}
        </S.ScollBox>
      </S.AfterSchoolBox>
      {/* {closeDetail && <Detail fun={setCloseDetail} name="Excomponentm" />} */}
      <SelectButton fn={setCategory} />
      {create && <CreateAfterSchool fn={setCreate} />}
      {fix && <AdminFix fn={setFix} state={fixState} />}
    </S.AfterSchool>
  );
}
