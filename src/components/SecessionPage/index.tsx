import * as S from "./style";
import * as SVG from "../../SVG"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


export default function () {
    const [check, setClick] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        console.log(router.query);
    })

    return (
        <S.SecessionPage>
            <S.LogoWrapper>
                <SVG.LogoWhite />
            </S.LogoWrapper>
            <h1>탈퇴 하시기 전에 확인해 주세요!</h1>
            <S.Info>
                <ul>
                    <li>유저의 프로필, 아이디등이 사라지게 됩니다.</li>
                    <li>본인이 생성한 동아리는 삭제되지 않습니다.</li>
                </ul>
            </S.Info>
            <S.CheckBox onClick={(e: any) => { e.preventDefault(); setClick(!check) }}>
                <S.Check check={check}>
                    <input type="checkbox" />
                    <span />
                </S.Check>
                <p>위에 사항을 확인했으며, 동의합니다.</p>
            </S.CheckBox>
            <S.SecessionBtn onClick={() => { check === true && localStorage.setItem('stuNum', JSON.stringify(router.query)); router.push('/clubadmin/stuinfo') }}>탈퇴하기</S.SecessionBtn>
        </S.SecessionPage >
    );
}