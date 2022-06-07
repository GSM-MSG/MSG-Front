import { current } from "immer";
import { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { Excomponent } from "./TriAngle";

export function AfterSchoolAdmin({ fun }: any) {
  const [detail, setDetail] = useState<number>(0);
  const checkEnter = useRef<any>(true);
  useEffect(() => {
    if (detail > 2) {
      fun(false);
    }
  }, [detail]);
  useEffect(() => {
    checkEnter.current.disabled = false;
    checkEnter.current.focus();
  }, []);

  const checkClickEvent = () => {
    checkEnter.current.focus();
    setDetail((current) => current + 1);
    console.log(detail);
  };
  const checkEnterEvent = (e: any) => {
    if (e.key === "Enter") {
      setDetail((current) => current + 1);
      console.log(detail);
    }
  };
  return (
    <S.BackGround onClick={checkClickEvent}>
      <S.ClubAdmin>
        <Excomponent
          Triheight={15}
          Triturn={115}
          NameLogo={"학생 정보 수정하기"}
          Ex={"학생 정보를 수정항할 수 있는 페이지로 이동합니다."}
          BoxTop={70}
          BoxLeft={30}
          ExTop={-12}
          ExLeft={-29}
          ExPosition={true}
        />
      </S.ClubAdmin>
      <S.AfterSchollAdmin>
        <Excomponent
          Triheight={15}
          Triturn={-115}
          NameLogo={"동아리 정보 수정하기"}
          Ex={"동아리 정보를 수정할 수 있는 페이지로 이동합니다."}
          BoxTop={80}
          BoxRight={20}
          ExTop={-11}
          ExLeft={9}
        />
      </S.AfterSchollAdmin>
      <S.Enter
        disabled
        type="text"
        ref={checkEnter}
        onKeyDown={checkEnterEvent}
      />
    </S.BackGround>
  );
}
