import * as S from "./styles";
import { AddImg, ImgIcon, PlusUser } from "../../SVG";
import { ChangeEvent, useRef, useState } from "react";
import { CreateClub } from "../../types";
import produce from "immer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules";
import {
  change,
  delete_activityUrls,
  push_activityUrls,
} from "../../modules/register";

export default function RegisterPage() {
  const {
    activityUrls,
    bannerUrl,
    contact,
    description,
    member,
    relatedLink,
    teacher,
    title,
    type,
  } = useSelector((state: RootState) => ({
    ...state.register,
  }));
  const dispatch = useDispatch();
  const CoverImgRef = useRef<HTMLInputElement>(null);
  const IntroImgRef = useRef<HTMLInputElement>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "bannerUrl":
        if (!e.target.files || !e.target.files[0]) return;
        const reader = new FileReader();
        reader.onload = () => {
          dispatch(change("bannerUrl", reader.result as string));
        };
        reader.readAsDataURL(e.target.files[0]);
        return;

      case "title":
        dispatch(change("title", e.target.value));
        return;

      case "clubphoto":
        if (!e.target.files || !e.target.files[0]) return;
        const imgReader = new FileReader();
        imgReader.onload = () => {
          dispatch(push_activityUrls(imgReader.result as string));
        };
        imgReader.readAsDataURL(e.target.files[0]);
      default:
        return;
    }
  };

  const deleteImg = (i: number) => {
    if (!confirm("정말 지우시겠습니까?")) return;
    dispatch(delete_activityUrls(i));
  };

  return (
    <S.Wrapper>
      <input
        type="file"
        accept="image/gif,image/jpeg,image/png"
        name="bannerUrl"
        onChange={onChange}
        ref={CoverImgRef}
        style={{ display: "none" }}
      />
      {bannerUrl ? (
        <S.Img src={bannerUrl} onClick={() => CoverImgRef.current?.click()} />
      ) : (
        <S.CoverImg onClick={() => CoverImgRef.current?.click()}>
          <S.CoverImgInfo>
            <AddImg />
            <h2>배너를 추가해주세요</h2>
            <h4>(1920 X 200)</h4>
          </S.CoverImgInfo>
        </S.CoverImg>
      )}

      <S.Contents>
        <S.Article>
          <div>
            <h2>동아리 이름</h2>
            <S.NameInput
              name="title"
              value={title}
              onChange={onChange}
              placeholder="동아리 이름을 입력해 주세요"
            />
          </div>
          <div>
            <h2>동아리 구성원</h2>
            <S.UserList>
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
            <S.ClubIntroduce
              value={description}
              onChange={(e: any) =>
                dispatch(change("description", e.target.value))
              }
              placeholder="동아리 소개를 입력해 주세요"
            ></S.ClubIntroduce>
          </div>
        </S.Article>
        <S.Article>
          <S.ImageKind>
            <div>
              <h2>
                동아리 홍보사진 <S.Optional>(선택)</S.Optional>
              </h2>
              <S.ImagesWrapper>
                {activityUrls.map((photo, i) => (
                  <S.IntroImage
                    src={photo}
                    onClick={() => deleteImg(i)}
                    key={i}
                  />
                ))}
                {activityUrls.length < 4 && (
                  <>
                    <input
                      type="file"
                      accept="image/gif,image/jpeg,image/png"
                      ref={IntroImgRef}
                      name="clubphoto"
                      onChange={onChange}
                      style={{ display: "none" }}
                    />
                    <S.GrayBg onClick={() => IntroImgRef.current?.click()}>
                      <div>
                        <ImgIcon />
                        <p>추가하기</p>
                      </div>
                    </S.GrayBg>
                  </>
                )}
              </S.ImagesWrapper>
            </div>
            <div>
              <h2>동아리 종류</h2>
              <div>
                <S.KindOption name="MAJOR" left active>
                  전공
                </S.KindOption>
                <S.KindOption name="FREEDOM">자율</S.KindOption>
                <S.KindOption name="EDITORIAL" right>
                  사설
                </S.KindOption>
              </div>
            </div>
          </S.ImageKind>
          <div>
            <div>
              <h2>연락처</h2>
              <S.Contact>
                <h3>선생님</h3>
                <S.Optional>(선택)</S.Optional>
                <S.ContactInput />
              </S.Contact>
              <S.Contact>
                <h3>부장</h3>
                <S.ContactInput />
              </S.Contact>
            </div>
          </div>
          <div>
            <h2>
              홍보 링크 <S.Optional>(선택)</S.Optional>
            </h2>
            <div>
              <S.PromotionLink>
                <S.LinkNameInput placeholder="제목을 입력하세요" />
                <S.LinkInput placeholder="link를 입력해주세요" />
              </S.PromotionLink>
            </div>
          </div>
        </S.Article>
      </S.Contents>
      <S.ButtonWrapper>
        <S.SubmitButton>등록하기</S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
