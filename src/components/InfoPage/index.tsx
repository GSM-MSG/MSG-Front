import * as S from "./styles";
import { ClubDetail } from "../../types/ClubDetail";
import Link from "next/link";
import * as SVG from "../../SVG";
import { useRouter } from "next/router";

interface InfoPageProps {
  clubData: ClubDetail;
}

export default function InfoPage({ clubData }: InfoPageProps) {
  const router = useRouter();

  return (
    <S.Wrapper>
      <S.CoverImg src={clubData.club.bannerUrl || "/png/Loading.png"} />
      <S.Contents>
        <S.ClubName>{clubData.club.title}</S.ClubName>
        <S.Users>
          {clubData.club.teacher && (
            <S.User>
              <SVG.Teacher />
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
          {clubData.scope === "HEAD" && (
            <Link href={`${router.asPath}/users`}>
              <a style={{ cursor: "pointer" }}>
                <S.User>
                  <SVG.EditUser />
                  <S.UserName>관리하기</S.UserName>
                </S.User>
              </a>
            </Link>
          )}
        </S.Users>
      </S.Contents>
      <S.Info>
        <S.Left>
          <S.Introduce>
            <h2>소개</h2>
            <p>{clubData.club.description}</p>
          </S.Introduce>

          <S.ContactMeans>
            <div>
              <h2>연락처</h2>
              <S.ContactUser>
                <S.User>
                  <S.UserImg src={clubData.head.userImg} />
                  <S.Badge>부장</S.Badge>
                  <S.UserName>{clubData.head.name}</S.UserName>
                </S.User>
                <S.Contact>{clubData.club.contact}</S.Contact>
              </S.ContactUser>
            </div>
            <S.NotionLink>
              <S.Title>노션 링크</S.Title>
              <S.Link href={clubData.club.notionLink}>
                {clubData.club.notionLink}
              </S.Link>
            </S.NotionLink>
          </S.ContactMeans>
        </S.Left>
        <S.Right>
          <S.ImgTitle>홍보 사진</S.ImgTitle>
          <S.Images>
            {clubData.activityurls.map((url, idx) => (
              <S.Img key={idx} src={url} />
            ))}
          </S.Images>
        </S.Right>
      </S.Info>
    </S.Wrapper>
  );
}
