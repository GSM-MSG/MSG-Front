import * as S from "./styles";
import { ServerUrl } from "../../config/config";

interface InfoPageProps {
  clubName: string;
}

export default function InfoPage({ clubName }: InfoPageProps) {
  return (
    <S.Wrapper>
      <S.CoverImg src="https://bit.ly/3hA8mg3" />
      <S.Contents>
        <S.ClubName>{clubName}</S.ClubName>
        <S.Users>
          <S.User>
            <S.UserImg src="https://bit.ly/3sD3hKh" />
            <S.Badge>선생님</S.Badge>
            <S.UserName>Teemo</S.UserName>
          </S.User>
          <S.User>
            <S.UserImg src="https://bit.ly/3sD3hKh" />
            <S.Badge>부장</S.Badge>
            <S.UserName>Teemo</S.UserName>
          </S.User>
          <S.User>
            <S.UserImg src="https://bit.ly/3sD3hKh" />
            <S.UserName>Teemo</S.UserName>
          </S.User>
          <S.User>
            <S.UserImg src="https://bit.ly/3sD3hKh" />
            <S.UserName>Teemo</S.UserName>
          </S.User>
          <S.User>
            <S.UserImg src="https://bit.ly/3sD3hKh" />
            <S.UserName>Teemo</S.UserName>
          </S.User>
        </S.Users>
      </S.Contents>
      <S.ButtonWrapper>
        {/* 동아리 부장인지 조건식까지 */}
        {/* <S.Button>{ "동아리 신청 명단" : "신청하기"}</S.Button> */}
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
