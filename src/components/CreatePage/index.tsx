import { NextPage } from "next";
import * as S from "./styles";
import * as SVG from "../../SVG";
import { useRef } from "react";
import LeftForm from "./LeftForm";

const CreatePage: NextPage = () => {
  const bannerRef = useRef<HTMLInputElement>(null);

  return (
    <S.Wrapper>
      <input ref={bannerRef} type="file" style={{ display: "none" }} />
      <S.BannerImg onClick={() => bannerRef.current?.click()}>
        <SVG.AddImg />
        <S.Comment>
          배너를 추가해 주세요
          <br />
        </S.Comment>
        <S.Description>(1920 X 400)</S.Description>
      </S.BannerImg>
      <S.Forms>
        <LeftForm />
      </S.Forms>
    </S.Wrapper>
  );
};

export default CreatePage;
