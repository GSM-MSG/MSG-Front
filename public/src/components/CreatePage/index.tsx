import { NextPage } from "next";
import * as S from "./styles";
import * as SVG from "../../SVG";
import { useRef, useState } from "react";
import LeftForm from "./LeftForm";
import RightForm from "./RightForm";
import { UserType } from "../../types/UsersType";
import { TextsType } from "./types/TextsType";
import { ClubKind } from "./types/ClubKind";
import { InfoType } from "./types/InfoType";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import api from "../../lib/api";

const CreatePage: NextPage = () => {
  const bannerRef = useRef<HTMLInputElement>(null);
  const [texts, setTexts] = useState<TextsType>({
    title: "",
    description: "",
    relatedLinkLd: { name: "", url: "" },
  });
  const [users, setUsers] = useState<UserType[]>([
    {
      name: "윤지빈",
      email: "s12345",
      userImg: "https://bit.ly/3PrP38e",
      class: 4,
      grade: 2,
      num: 3,
    },
    {
      name: "안진형",
      email: "s54321",
      userImg: "https://bit.ly/3PrP38e",
      class: 4,
      grade: 2,
      num: 3,
    },
  ]);
  const [images, setImages] = useState<string[]>([]);
  const [kind, setKind] = useState<ClubKind>("MAJOR");
  const [info, setInfo] = useState<InfoType>({ teacher: "", contact: "" });

  const onSubmit = async () => {
    try {
      await api.post("/club", {
        images,
        kind,
        ...texts,
        ...info,
        member: users,
      });
    } catch (e) {
      toast.error("동아리 생성 실패");
    }
  };

  return (
    <S.Wrapper>
      <input
        ref={bannerRef}
        type="file"
        style={{ display: "none" }}
        accept="image/png, image/jpeg"
      />
      <S.BannerImg onClick={() => bannerRef.current?.click()}>
        <SVG.AddImg />
        <S.Comment>
          배너를 추가해 주세요
          <br />
        </S.Comment>
        <S.Description>(1920 X 400)</S.Description>
      </S.BannerImg>
      <S.Forms>
        <LeftForm
          users={users}
          setUsers={setUsers}
          texts={texts}
          setTexts={setTexts}
        />
        <RightForm
          images={images}
          setImages={setImages}
          kind={kind}
          setKind={setKind}
          info={info}
          setInfo={setInfo}
        />
      </S.Forms>

      <S.ButtonCenter>
        <S.SubmitButton onClick={onSubmit}>등록하기</S.SubmitButton>
      </S.ButtonCenter>

      <ToastContainer
        position="top-right"
        theme="dark"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </S.Wrapper>
  );
};

export default CreatePage;