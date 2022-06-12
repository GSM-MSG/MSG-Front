import { useEffect, useState } from "react";
import { text } from "stream/consumers";
import * as S from "./styles";

export function CreateAfterSchool({ fn }: any) {
  const [afterSchool, setafterSchool] = useState<string>("Normal");
  const [day, setDay] = useState<string[]>(["MON"]);
  const [grade, setGrade] = useState<string[]>(["1"]);
  const [title, setTitle] = useState<string>("");
  const [dayOverlap, setDayOverlap] = useState(false);
  const [gradeOverlap, setGradeOverlap] = useState(false);

  const ChangeAfter = (e: any) => setafterSchool(e.target.name);
  const ChangeDay = (e: any) => {
    if (dayOverlap) {
      if (day.length === 2) {
        day.shift();
      }
      setDay([...day, e.target.name]);
    } else {
      setDay([e.target.name]);
    }
  };

  const ChangeGrade = (e: any) => {
    if (gradeOverlap) {
      if (grade.length === 2) {
        grade.shift();
      }
      setGrade([...grade, e.target.name]);
    } else {
      setGrade([e.target.name]);
    }
  };

  return (
    <>
      <S.box>
        <S.title>방과후 개설</S.title>
        <S.afterSchoolType>
          <h2>방과후 종류</h2>
          <div>
            <S.ChangrButton
              onClick={ChangeAfter}
              active={afterSchool === "Normal"}
              position="left"
              name="Normal"
            >
              일반
            </S.ChangrButton>
            <S.ChangrButton
              onClick={ChangeAfter}
              active={afterSchool === "EDITORIAL"}
              position="right"
              name="EDITORIAL"
            >
              공통
            </S.ChangrButton>
          </div>
        </S.afterSchoolType>
        <S.lectureTitle>
          <h2>강좌명</h2>
          <S.lectureInput
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </S.lectureTitle>
        <S.dayAndGrade>
          <S.day>
            <S.checkOverlap>
              <h2>강의요일</h2>
              <label htmlFor="day">
                중복
                <input
                  id="day"
                  type="checkbox"
                  checked={dayOverlap}
                  onChange={() => {
                    setDayOverlap(!dayOverlap);
                  }}
                />
              </label>
            </S.checkOverlap>
            <div>
              <S.ChangrButton
                onClick={ChangeDay}
                active={day.includes("MON")}
                position="left"
                name="MON"
              >
                월
              </S.ChangrButton>
              <S.ChangrButton
                onClick={ChangeDay}
                active={day.includes("TUE")}
                name="TUE"
              >
                화
              </S.ChangrButton>
              <S.ChangrButton
                onClick={ChangeDay}
                active={day.includes("WED")}
                position="right"
                name="WED"
              >
                수
              </S.ChangrButton>
            </div>
          </S.day>
          <S.grade>
            <S.checkOverlap>
              <h2>대상학년</h2>
              <label htmlFor="grade">
                중복
                <input
                  id="grade"
                  type="checkbox"
                  checked={gradeOverlap}
                  onChange={() => {
                    setGradeOverlap(!gradeOverlap);
                  }}
                />
              </label>
            </S.checkOverlap>
            <div>
              <S.ChangrButton
                onClick={ChangeGrade}
                active={grade.includes("1")}
                position="left"
                name="1"
              >
                1
              </S.ChangrButton>
              <S.ChangrButton
                onClick={ChangeGrade}
                active={grade.includes("2")}
                name="2"
              >
                2
              </S.ChangrButton>
              <S.ChangrButton
                onClick={ChangeGrade}
                active={grade.includes("3")}
                position="right"
                name="3"
              >
                3
              </S.ChangrButton>
            </div>
          </S.grade>
        </S.dayAndGrade>
        <S.submit onClick={() => fn(false)} type="submit" value="개설하기" />
      </S.box>
      <S.bg onClick={() => fn(false)} />
    </>
  );
}
