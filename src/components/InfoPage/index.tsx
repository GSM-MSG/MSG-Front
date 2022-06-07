import * as S from "./styles";
import { ClubDetail } from "../../types/ClubDetail";
import Link from "next/link";

interface InfoPageProps {
  clubData: ClubDetail;
}

export default function InfoPage({ clubData }: InfoPageProps) {
  return (
    <S.Wrapper>
      <S.CoverImg src={clubData.club.bannerUrl || "/png/Loading.png"} />
      <S.Contents>
        <S.ClubName>{clubData.club.title}</S.ClubName>
        <S.Users>
          {clubData.club.teacher && (
            <S.User>
              <S.UserImg />
              <S.Badge>선생님</S.Badge>
              <S.UserName>{clubData.club.teacher}</S.UserName>
            </S.User>
          )}
          <S.User>
            <S.UserImg src={clubData.head.userImg} />
            <S.Badge>부장</S.Badge>
            <S.UserName>{clubData.head.name}</S.UserName>
          </S.User>
          {clubData.member.map((i, idx) => (
            <S.User key={idx}>
              <S.UserImg src={i.userImg} />
              <S.Badge>
                {i.grade}-{i.class}
              </S.Badge>
              <S.UserName>{i.name}</S.UserName>
            </S.User>
          ))}
        </S.Users>
      </S.Contents>
      <S.Info>
        <S.AllInfo>
          {clubData.club.description && (
            <S.Introduce>
              <h2>소개</h2>
              <div>{clubData.club.description}</div>
            </S.Introduce>
          )}

          <S.SubInfo>
            {clubData.club.contact && (
              <div>
                <h2>연락처</h2>
                <S.Contect>
                  <div>
                    <S.User>
                      <S.UserImg src={clubData.head.userImg} />
                      <S.Badge>부장</S.Badge>
                      <S.UserName>{clubData.head.name}</S.UserName>
                    </S.User>
                  </div>
                  <S.UserContact>
                    <h3>discord</h3>
                    <p>{clubData.club.contact}</p>
                  </S.UserContact>
                </S.Contect>
              </div>
            )}

            {clubData.club.notionLink && (
              <div>
                <h2>노션 링크</h2>
                <S.LinkButton href={clubData.club.notionLink}>
                  {clubData.club.notionLink}
                </S.LinkButton>
              </div>
            )}
          </S.SubInfo>
        </S.AllInfo>
        {clubData.activityurls[0] && (
          <div>
            <h2>홍보 사진</h2>
            <S.Imgs>
              {clubData.activityurls.map((i, idx) => (
                <S.Img key={idx} src={i} />
              ))}
            </S.Imgs>
          </div>
        )}
      </S.Info>
      <S.ButtonWrapper>
        {clubData.scope === "USER" && clubData.club.isOpened && (
          <S.Button>신청하기</S.Button>
        )}
        {clubData.scope === "MEMBER" && (
          <S.Button style={{ background: "#FF5C5C" }}>탈퇴하기</S.Button>
        )}
        {clubData.scope === "HEAD" && (
          <Link
            href={`/${clubData.club.type.toLowerCase()}/${
              clubData.club.title
            }/users`}
          >
            <S.Button>명단 관리하기</S.Button>
          </Link>
        )}
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
