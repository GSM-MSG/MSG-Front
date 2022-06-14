import { useEffect, useRef, useState } from "react";
import * as SVG from "../../SVG";
import * as S from "../ClubAdminStuInfoPage/styles";
import { Club, CreateClub } from "../../types";
import { clubData } from "./DummyData";
import { userData } from "../../components/ClubAdminStuInfoPage/DummyData"


export default function Modify({ onClose, data }: { onClose: (e: any) => void, data: CreateClub }) {
    const [isFind, setFind] = useState<boolean>(false);
    const [clubList, setClubList] = useState<Array<CreateClub>>(clubData);
    const [search, setSearch] = useState<string>(data.clubmember[0]);
    const [values, setValues] = useState({
        photo: data.photo,
        name: data.name,
        clubmember: data.clubmember,
        teacher: data.teacher,

    });
    const [club, setClub] = useState<boolean>(false);

    const outside: any = useRef();
    const changeClub: any = useRef();

    const ModalClose = () => {
        onClose({
            ...data,
            photo: values.photo,
            name: values.name,
            clubmember: values.clubmember,
            teacher: values.teacher,
        });
    }

    const stu = userData.find((item: any) => {
        return search !== "" && item.name.toLowerCase() === search.toLowerCase();
    })

    useEffect(() => {
        setClub(changeClub.current !== null && changeClub.current !== undefined ? true : false);
    })

    useEffect(() => {
        console.log(userData);
    }, [])

    return (
        <S.ModifyLayout ref={outside} onClick={(e: any) => { outside.current === e.target && onClose(null) }}>
            <S.ModifyBox isModal={isFind}>
                {isFind ?
                    <>
                        <h2>학생 조회</h2>
                        <S.InputWrapper>
                            <input placeholder="검색어를 입력하세요" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                            <SVG.ReadingGlasses />
                        </S.InputWrapper>
                        <S.ClubInfo>
                            {stu &&
                                <S.ListWrapper bgcolor={true} isModal={true}>
                                    <img src={stu?.img} />
                                    <div>
                                        <p>{stu?.name}</p>
                                        <p>{stu?.grade + "학년 " + stu?.class + "반 " + stu?.num + "번"}</p>
                                    </div>
                                </S.ListWrapper>
                            }
                        </S.ClubInfo>
                        <S.DoneBtn isModal={isFind} club={stu} onClick={() => { stu && setFind(false); /*setValues({...values, club:})*/ }}>선택</S.DoneBtn>
                    </> : <>
                        <h2>동아리 정보 수정</h2>
                        <S.ProfileImg src="/png/Loading.png" />
                        <div>
                            <ul>
                                <li>
                                    <p>이름</p>
                                    <S.ModifyInput value={values.name} onChange={(e: any) => setValues({ ...values, name: e.target.value })} />
                                </li>
                                <li>
                                    <p>부장</p>
                                    <S.ModifyInput value={values.clubmember[0]} onChange={(e: any) => { setValues({ ...values, clubmember: e.target.value }) }} readOnly />
                                    <S.FindBtn onClick={() => setFind(true)}>찾아보기</S.FindBtn>
                                </li>
                                <li>
                                    <p>담당선생님</p>
                                    <S.ModifyInput value={values.teacher} onChange={(e: any) => setValues({ ...values, teacher: e.target.value })} readOnly />
                                </li>
                            </ul>
                        </div>
                        <S.DoneBtn isModal={isFind} club={true} onClick={() => ModalClose()}>완료</S.DoneBtn>
                    </>
                }
            </S.ModifyBox>
        </S.ModifyLayout >
    )
}