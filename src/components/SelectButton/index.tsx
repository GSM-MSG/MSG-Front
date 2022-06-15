import * as S from "./styles";
import * as SVG from "../../SVG";
import { useEffect, useState } from "react";

export default function SelectButton({ setCategory }: any) {
  //버튼 on,off관리
  const [selectButton, setSelectButton] = useState(false);
  //각 버튼 SVG정보 배열
  const list: Array<any> = [
    <SVG.Fix />,
    <SVG.Delete />,
    <SVG.Graph />,
    <SVG.Open />,
  ];
  //클릭시 바뀌는 버튼 오브젝트 배열 값 관리 state
  const [newList, setNweList] = useState<any[]>(list);
  //선택한 SVG인덱스 찾아주는 람수
  const Select = (select: number) => {
    if (list.length === newList.length) {
      setNweList(list.filter((e, index) => index === select));
      setCategory(select);
    } else {
      setNweList(list);
      setCategory();
    }
  };

  return (
    <S.BtBox trun={selectButton}>
      <S.Toggle onClick={() => setSelectButton(!selectButton)}>
        {selectButton ? <SVG.X width="25" height="25" /> : <SVG.UpArrow />}
      </S.Toggle>
      {newList.map((e, index) => {
        return (
          <S.Button
            onClick={() => Select(index)}
            className="bt"
            key={index}
            num={index}
          >
            {e}
          </S.Button>
        );
      })}
    </S.BtBox>
  );
}
