import { NextPage } from "next";
import { Dispatch, SetStateAction, useRef } from "react";
import * as S from "./styles";
import * as SVG from "../../SVG";
import { ClubKind } from "./types/ClubKind";
import { InfoType } from "./types/InfoType";
import checkQuery from "../../lib/checkQuery";
import api from "../../lib/api";
import { toast } from "react-toastify";

interface RightFormProps {
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
  kind: ClubKind;
  setKind: Dispatch<SetStateAction<ClubKind>>;
  info: InfoType;
  setInfo: Dispatch<SetStateAction<InfoType>>;
}

const RightForm: NextPage<RightFormProps> = ({
  images,
  setImages,
  kind,
  setKind,
}) => {
  const ImgRef = useRef<HTMLInputElement>(null);
  const ChangeKind = (e: any) => setKind(e.target.name);

  const UploadImg = async () => {
    if (!ImgRef || !ImgRef.current || !ImgRef.current.files) return;

    try {
      const formData = new FormData();
      formData.append("files", ImgRef.current.files[0]);

      const data = await checkQuery(
        async () => await api.post("/image/web", formData)
      );

      setImages([...images, data]);
    } catch (e) {
      toast.error("이미지 업로드에 실패했습니다.");
    }
  };

  return (
    <S.RightFormWrapper>
      <div>
        <S.SubTitle>
          동아리 홍보 사진<S.Choice>(선택)</S.Choice>
        </S.SubTitle>
        <input
          style={{ display: "none" }}
          type="file"
          ref={ImgRef}
          onChange={UploadImg}
          accept="image/png, image/jpeg"
        />
        <S.Imgs>
          {images?.map((i: string, idx: number) => (
            <S.Img src={i} key={idx} />
          ))}
          {images.length < 4 && (
            <S.ImgAddBox onClick={() => ImgRef.current?.click()}>
              <SVG.ImgIcon />
              <S.ImgAddComment>추가하기</S.ImgAddComment>
            </S.ImgAddBox>
          )}
        </S.Imgs>
      </div>
      <div>
        <S.SubTitle>동아리 종류</S.SubTitle>
        <S.ClubButton
          onClick={ChangeKind}
          active={kind === "MAJOR"}
          position="left"
          name="MAJOR"
        >
          전공
        </S.ClubButton>
        <S.ClubButton
          onClick={ChangeKind}
          active={kind === "FREEDOM"}
          name="FREEDOM"
        >
          자율
        </S.ClubButton>
        <S.ClubButton
          onClick={ChangeKind}
          active={kind === "EDITORIAL"}
          position="right"
          name="EDITORIAL"
        >
          사설
        </S.ClubButton>
      </div>
      <div>
        <S.SubTitle>정보</S.SubTitle>
        <h3>
          선생님<S.Choice>(선택)</S.Choice>
        </h3>
        <S.InfoInput placeholder="이름을 입력해 주세요" />
        <h3>부장</h3>
        <S.InfoInput placeholder="연락처를 입력해 주세요" />
      </div>
    </S.RightFormWrapper>
  );
};

export default RightForm;
