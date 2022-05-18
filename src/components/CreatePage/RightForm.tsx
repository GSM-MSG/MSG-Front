import { NextPage } from "next";
import { Dispatch, SetStateAction, useRef } from "react";
import * as S from "./styles";
import * as SVG from "../../SVG";
import { ClubKind } from "./types/ClubKind";
import { InfoType } from "./types/InfoType";

interface RightFormProps {
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
  kind: ClubKind;
  setKind: Dispatch<SetStateAction<ClubKind>>;
  info: InfoType;
  setInfo: Dispatch<SetStateAction<InfoType>>;
}

const RightForm: NextPage<RightFormProps> = ({ images }) => {
  const ImgRef = useRef<HTMLInputElement>(null);
  const Upload = async () => {
    // 이미지 업로드 하는 코드
    if (!ImgRef.current?.files) return;
    console.log(ImgRef.current?.files[0]);
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
          onChange={Upload}
          accept="image/png, image/jpeg"
        />
        <S.Imgs>
          {images?.map((i, idx) => (
            <S.Img src={i} key={idx} />
          ))}
          <S.Img src="https://bit.ly/3sHtpmI" />

          <S.ImgAddBox onClick={() => ImgRef.current?.click()}>
            <SVG.ImgIcon />
            <S.ImgAddComment>추가하기</S.ImgAddComment>
          </S.ImgAddBox>
        </S.Imgs>
      </div>
    </S.RightFormWrapper>
  );
};

export default RightForm;
