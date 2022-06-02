import * as S from "./style";
import * as SVG from "../../SVG";
import { useState, useEffect } from "react";
import Modify from "./Modify";
import { ClubMembersType } from "../../types";
import { userData } from "./DummyData";


export default function ClubAdminPage() {
    const [userList, setUserList] = useState<Array<ClubMembersType>>(userData);
    const [isModifying, setModifying] = useState<boolean>(false);
    const [modalNum, setModalNum] = useState<ClubMembersType|null>(null);
    const [search, setSearch] = useState<string>("");

    const onDone = (e: ClubMembersType, num: number) => {
        if (e !== null && e !== undefined) {
            setUserList(
                userList.map((item) =>
                    e.grade === item.grade && e.class === item.class && e.num === item.num ? e : item
                )
            )
        }
        setModalNum(null);
    }

    const onRemove = (e: any) => {
        setUserList(userList.filter(item => item.grade !== e[0] || item.class !== e[1] || item.num !== e[2]));
    }

    const onList = () => {
        return (
            userList.filter((item: any) => {
                const stuNum: string = item.grade + "학년" + item.class + "반" + item.num + "번";
                if (item.name.toLowerCase().includes(search.toLowerCase()) || stuNum.includes(search.replace(/\s/gi, "")) || search === "") {
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
                            <button onClick={() => setModalNum(item)}>수정</button>
                    }
                </S.ListWrapper>
            ))
        )
    }

    useEffect(() => {
        console.log(modalNum);
    }, [])

    return (
        <S.Wrapper isModal={modalNum !== null ? true : false}>
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
            {modalNum !== null && <Modify item={modalNum} onClose={(e) => onDone(e, 0)} />}
        </S.Wrapper>
    );
}
