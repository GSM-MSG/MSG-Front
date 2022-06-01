import * as S from "./style";
import * as SVG from "../../SVG";
import { useState } from "react";
import Modify from "./Modify";
import DummyData from "./DummyData";
import { ClubMembersType } from "../../types";


export default function ClubAdminPage() {
    const [list, setList] = useState<Array<ClubMembersType>>(DummyData);
    const [isModifying, setModifying] = useState<boolean>(false);
    const [modalNum, setModalNum] = useState<number>(-1);
    const [search, setSearch] = useState<string>("");

    const onDone = (e: ClubMembersType, num: number) => {
        var a: number = 0;
        if (e !== null && e !== undefined) {
            setList(
                list.map((item) =>
                    a++ === num ? e : item
                )
            )
        }
        setModalNum(-1);
    }

    const onRemove = (e: any) => {
        console.log(e[2]);
        setList(list.filter(item => item.grade !== e[0] || item.class !== e[1] || item.num !== e[2]));
    }

    const onList = () => {
        return (
            list.filter((item: any) => {
                const stuNum: string = item.grade + "학년 " + item.class + "반 " + item.num + "번";
                console.log(search, item.name);
                if (item.name.toLowerCase().includes(search.toLowerCase()) || stuNum.toLowerCase().includes(search.toLowerCase()) || search === "") {
                    return item;
                }
            }).map((item: any, idx: number) => (
                <S.ListWrapper key={idx} bgcolor={isModifying} >
                    <img src={item.img} />
                    <div>
                        <p>{item.name}</p>
                        <p>{item.grade + "학년 " + item.class + "반 " + item.num + "번"}</p>
                    </div>
                    {
                        isModifying ?
                            <button onClick={() => { onRemove([item.grade, item.class, item.num]) }}>탈퇴</button> :
                            <button onClick={() => setModalNum(idx)}>수정</button>
                    }
                </S.ListWrapper>
            ))
        )
    }

    return (
        <S.Wrapper isModal={modalNum !== -1 ? true : false}>
            <S.InputContainer>
                <S.Title>학생정보 수정</S.Title>
                <S.InputWrapper>
                    <input placeholder="검색어를 입력하세요" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <S.SearchBtn />
                </S.InputWrapper>
            </S.InputContainer>
            <S.ListContainer>
                <ul>
                    {onList()}
                </ul>
            </S.ListContainer>
            <S.WithdrawalBtn onClick={() => setModifying(!isModifying)} bgcolor={isModifying}>
                {isModifying ? <SVG.ModifyPen /> : <SVG.TrashCan />}
            </S.WithdrawalBtn>
            {modalNum !== -1 && <Modify item={list[modalNum]} onClose={(e) => onDone(e, modalNum)} />}
        </S.Wrapper>
    );
}
