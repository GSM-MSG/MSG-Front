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
      <S.Info>
        <S.AllInfo>
          <S.Introduce>
            <h2>소개</h2>
            <div>
              혜윰은 ‘생각’이라는 뜻의 우리말로, 같이 생각해서 더 좋은 결과를
              이루자는 뜻으로 동아리를 개설하였습니다. 활동 설명 : 같이혜움은
              전공을 연계한 봉사활동(멘토링)부터 공모전까지 아울러 학내 학우들과
              서로 소통하고 호흡해 공동으로 선의의 결과물을 만들고 있으며,
              도시재생지원센터 도시재생대학 프로그램을 통해 주민들과 함께
              호흡하는 활동 또한 참여하고 있습니다.
            </div>
          </S.Introduce>
          <S.SubInfo>
            <div>
              <h2>연락처</h2>
              <S.Contect>
                <div>
                  <S.User>
                    <S.UserImg src="https://bit.ly/3sD3hKh" />
                    <S.Badge>부장</S.Badge>
                    <S.UserName>Teemo</S.UserName>
                  </S.User>
                </div>
                <S.UserContact>
                  <h3>discord</h3>
                  <p>김부장#1234</p>
                </S.UserContact>
              </S.Contect>
            </div>
            <div>
              <h2>유튜브 링크</h2>
              <S.LinkButton>
                https://www.youtube.com/watch?v=7_0tJ8zkluc
              </S.LinkButton>
            </div>
          </S.SubInfo>
        </S.AllInfo>
        <div>
          <h2>홍보 사진</h2>
          <S.Imgs>
            <S.Img />
            <S.Img />
            <S.Img />
            <S.Img />
          </S.Imgs>
        </div>
      </S.Info>
      <S.ButtonWrapper>
        {/* 동아리 부장인지 조건식까지 */}
        {/* <S.Button>{ "동아리 신청 명단" : "신청하기"}</S.Button> */}
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
