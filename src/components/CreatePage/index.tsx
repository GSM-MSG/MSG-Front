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
import checkQuery from "../../lib/checkQuery";
import { useRouter } from "next/router";

const CreatePage: NextPage = () => {
  const router = useRouter();
  const bannerRef = useRef<HTMLInputElement | null>(null);
  const [texts, setTexts] = useState<TextsType>({
    title: "",
    description: "",
    notionLink: "",
  });
  const [users, setUsers] = useState<UserType[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [type, setType] = useState<ClubKind>("MAJOR");
  const [info, setInfo] = useState<InfoType>({ teacher: "", contact: "" });
  const [bannerUrl, setBannerUrl] = useState<string>("");

  const UploadImg = async () => {
    if (!bannerRef.current?.files || !bannerRef.current?.files[0]) return;
    if (!bannerRef?.current?.files[0].type.includes("image")) return;

    try {
      const formData = new FormData();
      formData.append("files", bannerRef.current?.files[0]);

      const data = await checkQuery(
        async () => await api.post("/image/web", formData)
      );

      setBannerUrl(data[0]);
    } catch (e) {
      toast.error("이미지 업로드 실패");
    }
  };

  const onSubmit = async () => {
    if (/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi.test(texts.title)) {
      toast.info("제목에 특수문자를 넣을 수 없습니다.");
      return;
    }
    try {
      await checkQuery(() =>
        api.post("/club/web", {
          activityUrls: images,
          type,
          ...texts,
          notionLink: texts.notionLink ? texts.notionLink : undefined,
          ...info,
          member: users.map((i) => i.email),
          bannerUrl,
        })
      );

      router.push("/");
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
        accept="image/*"
        onChange={UploadImg}
      />
      {bannerUrl ? (
        <S.BannerView
          src={bannerUrl}
          onDoubleClick={() => bannerRef.current?.click()}
        />
      ) : (
        <S.BannerImg onClick={() => bannerRef.current?.click()}>
          <SVG.AddImg />
          <S.Comment>
            배너를 추가해 주세요
            <br />
          </S.Comment>
          <S.Description>(1920 X 400)</S.Description>
        </S.BannerImg>
      )}
      <S.Forms>
        <LeftForm
          users={users}
          setUsers={setUsers}
          texts={texts}
          setTexts={setTexts}
          type={type}
        />
        <RightForm
          images={images}
          setImages={setImages}
          kind={type}
          setKind={setType}
          info={info}
          setInfo={setInfo}
          setUsers={setUsers}
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
