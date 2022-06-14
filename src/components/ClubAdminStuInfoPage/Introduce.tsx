import { useEffect, useRef, useState } from "react";
import Excomponent from "../Introduce";
import { descriptionData } from "./DummyData";
import * as S from "./styles";

export default function Introduce({ onClose, name }: any) {
    const [ID, setID] = useState<number>(0);
    const lists: any = descriptionData;
    const list = lists.filter((e: any) => e.name === name)[0].tag;

    useEffect(() => {
        document.addEventListener("keyup", (e) => { if (e.key === "Enter") setID(ID + 1) });
        if (ID >= list.length) {
            onClose(false);
            localStorage.setItem(`${name}`, String(name));
        }
    })

    return (
        <S.IntroduceLayout onClick={() => { setID(ID + 1) }}>
            {list.map((item: any, key: number) => {
                return <S.IntroduceWrapper key={key} isBeing={key <= ID}>{item}</S.IntroduceWrapper>;
            })}
        </S.IntroduceLayout>

    )
}