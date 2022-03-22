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
        <h1>소개</h1>
        <S.Introduce>
          혜윰은 ‘생각’이라는 뜻의 우리말로, 같이 생각해서 더 좋은 결과를
          이루자는 뜻으로 동아리를 개설하였습니다.
          <br />
          <br />
          활동 설명 : 같이혜움은 전공을 연계한 봉사활동(멘토링)부터 공모전까지
          아울러 학내 학우들과 서로 소통하고 호흡해 공동으로 선의의 결과물을
          만들고 있으며, 도시재생지원센터 도시재생대학 프로그램을 통해 주민들과
          함께 호흡하는 활동 또한 참여하고 있습니다.
        </S.Introduce>
        <S.Footer>
          <S.Promotion>
            <h1>홍보 사진</h1>
            <S.Imgs>
              <S.Img />
              <S.Img />
              <S.Img />
              <S.Img />
              <S.Img />
              <S.Img />
            </S.Imgs>
          </S.Promotion>
          <S.Contect>
            <h1>연락처</h1>
            <S.ContectUser>
              <S.ContectUserInfo>
                <S.UserImg src="https://bit.ly/3sD3hKh" />
                <S.Badge>선생님</S.Badge>
                <S.UserName>Teemo</S.UserName>
              </S.ContectUserInfo>
              <S.ContectInfo>
                <S.Info>전화번호 : 010 - ****-****</S.Info>
                <S.Info>디스코드 : 선생님#14213</S.Info>
                <S.Info>위치 : 2학년 교무실</S.Info>
              </S.ContectInfo>
            </S.ContectUser>
            <S.ContectUser>
              <S.ContectUserInfo>
                <S.UserImg src="https://bit.ly/3sD3hKh" />
                <S.Badge>선생님</S.Badge>
                <S.UserName>Teemo</S.UserName>
              </S.ContectUserInfo>
              <S.ContectInfo>
                <S.Info>전화번호 : 010 - ****-****</S.Info>
                <S.Info>디스코드 : 선생님#14213</S.Info>
                <S.Info>위치 : 2학년 교무실</S.Info>
              </S.ContectInfo>
            </S.ContectUser>
          </S.Contect>
        </S.Footer>
      </S.Contents>
      <S.ButtonWrapper>
        {/* 동아리 부장인지 조건식까지 */}
        {/* <S.Button>{ "동아리 신청 명단" : "신청하기"}</S.Button> */}
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
