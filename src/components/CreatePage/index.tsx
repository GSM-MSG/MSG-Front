import { NextPage } from "next";
import * as S from "./styles";
import * as SVG from "../../SVG";
import { useRef, useState } from "react";
import LeftForm from "./LeftForm";
import { UserType } from "../../types/UsersType";

const CreatePage: NextPage = () => {
  const bannerRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState<string>("");
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
        <LeftForm
          title={title}
          setTitle={setTitle}
          users={users}
          setUsers={setUsers}
        />
      </S.Forms>
    </S.Wrapper>
  );
};

export default CreatePage;
