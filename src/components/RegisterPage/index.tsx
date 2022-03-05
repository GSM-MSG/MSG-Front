import * as S from "./styles";
import { AddImg, ImgIcon, PlusUser } from "../../SVG";

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
      <S.Contents>
        <S.Article>
          <div>
            <h2>동아리 이름</h2>
            <S.NameInput placeholder="동아리 이름을 입력해 주세요" />
          </div>
          <div>
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
          </div>
          <div>
            <h2>동아리 소개</h2>
            <S.ClubIntroduce placeholder="동아리 소개를 입력해 주세요"></S.ClubIntroduce>
          </div>
        </S.Article>
        <S.Article>
          <div>
            <h2>동아리 홍보사진</h2>
            <S.GrayBg>
              <div>
                <ImgIcon />
                <p>추가하기</p>
              </div>
            </S.GrayBg>
          </div>
          <div>
            <h2>연락처</h2>
            <h3>부장</h3>
            <S.Context>
              <p>전화번호</p>
              <S.ContextInput maxLength={3} />
              <span>-</span>
              <S.ContextInput maxLength={4} />
              <span>-</span>
              <S.ContextInput maxLength={4} />
            </S.Context>
            <S.Context>
              <p>디스코드</p>
              <S.ContextInput />
              <span>#</span>
              <S.ContextInput maxLength={4} />
            </S.Context>
          </div>
          <div>
            <h2>동아리 종류</h2>
            <S.SelectWrapper>
              <S.SelectKind>
                <option value="hide">동아리 종류를 선택해 주세요</option>
                <option value="editorial">사설 동아리</option>
                <option value="freedom">자율 동아리</option>
                <option value="major">전공 동아리</option>
              </S.SelectKind>
            </S.SelectWrapper>
          </div>
        </S.Article>
      </S.Contents>
      <S.ButtonWrapper>
        <S.SubmitButton>등록하기</S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
