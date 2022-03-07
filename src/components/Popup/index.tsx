import { useDispatch } from "react-redux";
import { close_popup } from "../../modules/popup";
import * as S from "./styles";

export default function Popup() {
  const dispatch = useDispatch();

  return (
    <>
      <S.Wrapper>
        <S.Title>알림</S.Title>
        <S.Alarms>
          <S.Notice>
            <S.NoticeTitle>
              <S.GroupName>동아리 이름</S.GroupName>
              <S.NoticeDate>이번주</S.NoticeDate>
            </S.NoticeTitle>
            <S.NoticeInfo>
              공지 내용 공지 내용 공지 내용 공지 내용 공지 내용 공지 내용 공지
              내용 공지 내용 공지 내용 공지 내용 공지 내용...
            </S.NoticeInfo>
          </S.Notice>
          <S.Notice>
            <S.NoticeTitle>
              <S.GroupName>동아리 이름</S.GroupName>
              <S.NoticeDate>이번주</S.NoticeDate>
            </S.NoticeTitle>
            <S.NoticeInfo>
              공지 내용 공지 내용 공지 내용 공지 내용 공지 내용 공지 내용 공지
              내용 공지 내용 공지 내용 공지 내용 공지 내용...
            </S.NoticeInfo>
          </S.Notice>
          <S.Notice>
            <S.NoticeTitle>
              <S.GroupName>동아리 이름</S.GroupName>
              <S.NoticeDate>이번주</S.NoticeDate>
            </S.NoticeTitle>
            <S.NoticeInfo>
              공지 내용 공지 내용 공지 내용 공지 내용 공지 내용 공지 내용 공지
              내용 공지 내용 공지 내용 공지 내용 공지 내용...
            </S.NoticeInfo>
          </S.Notice>
          <S.Notice>
            <S.NoticeTitle>
              <S.GroupName>동아리 이름</S.GroupName>
              <S.NoticeDate>이번주</S.NoticeDate>
            </S.NoticeTitle>
            <S.NoticeInfo>
              공지 내용 공지 내용 공지 내용 공지 내용 공지 내용 공지 내용 공지
              내용 공지 내용 공지 내용 공지 내용 공지 내용...
            </S.NoticeInfo>
          </S.Notice>
        </S.Alarms>
      </S.Wrapper>
      <S.Background onClick={() => dispatch(close_popup())} />
    </>
  );
}
