import * as S from "./styles";
import * as SVG from "../../SVG";
import { useEffect, useState } from "react";

export default function SelectButton({ fn }: any) {
  const [on, setOn] = useState(false);
  const list: Array<any> = [<SVG.Fix />, <SVG.Delete />, <SVG.Graph />];
  const [newList, setNweList] = useState<any[]>(list);
  const Select = (select: number) => {
    if (list.length === newList.length) {
      setNweList(list.filter((e, index) => index === select));
      fn(select);
    } else {
      setNweList(list);
      fn(4);
    }
  };

  return (
    <S.BtBox trun={on}>
      <S.Toggle onClick={() => setOn(!on)}>
        {on ? <SVG.X width="25" height="25" /> : <SVG.UpArrow />}
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
