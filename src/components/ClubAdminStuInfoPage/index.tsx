import * as S from "./styles";
import * as SVG from "../../SVG";
import { useState, useEffect } from "react";
import Modify from "./Modify";
import { ClubMembersType } from "../../types";
import { userData } from "./DummyData";
import Link from "next/link";
import Introduce from "./Introduce";


export default function ClubAdminPage() {
    const [userList, setUserList] = useState<Array<ClubMembersType>>(userData);
    const [isModifying, setModifying] = useState<boolean>(false);
    const [isModify, setModify] = useState<any>(true);
    const [isSecession, setSecession] = useState<any>(true);
    const [modalNum, setModalNum] = useState<ClubMembersType | null>(null);
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
        setUserList(userList.filter(item => item.grade !== Number(e.grade) || item.class !== Number(e.class) || item.num !== Number(e.num)));
    }

    const onList = () => {
        return (
            userList.filter((item: any) => {
                const stuNum: string = item.grade + "학년" + item.class + "반" + item.num + "번";
                if (search === "" || item.name.toLowerCase().includes(search.toLowerCase()) || stuNum.includes(search.replace(/\s/gi, ""))) {
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
                            <Link
                                href={{
                                    pathname: '/clubadmin/stuinfo/secession',
                                    query: { grade: item.grade, class: item.class, num: item.num }
                                }}>
                                <button>탈퇴</button></Link> :
                            <button onClick={() => setModalNum(item)}>수정</button>
                    }
                </S.ListWrapper>
            ))
        )
    }

    useEffect(() => {
        const stuNum: object = JSON.parse(localStorage.getItem('stuNum' || '{}'));
        if (stuNum !== undefined && stuNum !== null) {
            onRemove(stuNum);
        }
        localStorage.removeItem('stuNum');
        localStorage.removeItem('Modify');
        localStorage.removeItem('Secession');
    }, [])

    useEffect(() => {
        if (localStorage.getItem('Modify') !== null) {
            setModify(false);
        }
        if (localStorage.getItem('Secession') !== null) {
            setSecession(false);
        }
    })

    return (
        <S.Wrapper isModal={modalNum !== null || isModify || (isSecession && isModifying) ? true : false}>
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
            <S.WithdrawalBtn onClick={() => { setModifying(!isModifying) }} bgcolor={isModifying}>
                {isModifying ? <SVG.ModifyPen /> : <SVG.TrashCan />}
            </S.WithdrawalBtn>
            {modalNum !== null && <Modify item={modalNum} onClose={(e) => onDone(e, 0)} />}
            {isModify && <Introduce onClose={setModify} name="Modify" />}
            {isModifying && isSecession && <Introduce onClose={setSecession} name="Secession" />}
        </S.Wrapper>
    );
}
