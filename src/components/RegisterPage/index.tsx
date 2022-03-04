import * as S from "./styles";
import { AddImg, PlusUser } from "../../SVG";

export default function RegisterPage() {
  return (
    <S.Wrapper>
      <S.CoverImg>
        <S.CoverImgInfo>
          <AddImg />
          <h2>배너를 추가해주세요</h2>
          <h4>(1920 X 200)</h4>
        </S.CoverImgInfo>
      </S.CoverImg>
      <S.Constents>
        <S.Article>
          <S.Section>
            <h2>동아리 이름</h2>
            <S.NameInput placeholder="동아리 이름을 입력해 주세요" />
          </S.Section>
          <S.Section>
            <h2>동아리 구성원</h2>
            <S.UserList>
              <S.User>
                <S.UserImg />
                <S.UserName>이름</S.UserName>
              </S.User>
              <S.User>
                <S.UserImg />
                <S.UserName>이름</S.UserName>
              </S.User>
              <S.User>
                <S.Circle style={{ cursor: "pointer" }}>
                  <PlusUser />
                </S.Circle>
                <S.UserName>추가하기</S.UserName>
              </S.User>
            </S.UserList>
          </S.Section>
          <S.Section>
            <h2>동아리 소개</h2>
            <S.ClubIntroduce placeholder="동아리 소개를 입력해 주세요"></S.ClubIntroduce>
          </S.Section>
        </S.Article>
        <S.Article>
          <h2>동아리 홍보사진</h2>
        </S.Article>
      </S.Constents>
    </S.Wrapper>
  );
}
