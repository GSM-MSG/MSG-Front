import * as S from "./styles";
import { AddImg, ImgIcon, PlusUser } from "../../SVG";
import { ChangeEvent, useRef, useState } from "react";
import { CreateClub } from "../../types";
import { useSession } from "next-auth/react";
import { getURL } from "next/dist/shared/lib/utils";

export default function RegisterPage() {
  const { data } = useSession();
  const CoverImgRef = useRef<HTMLInputElement>(null);
  const [contects, setContects] = useState({
    contect1: "",
    contect2: "",
    contect3: "",
  });
  const [value, setValue] = useState<CreateClub>({
    name: "",
    clubmember: [data?.user?.name || ""],
    description: "",
    clubphoto: [],
    discord: "#",
    photo: "",
    teacher: "",
    type: "",
    contect: `${contects.contect1}${contects.contect2}${contects.contect3}`,
  });

  const ChangeContect = (e: ChangeEvent<HTMLInputElement>) =>
    setContects({ ...contects, [e.target.name]: e.target.value });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "photo":
        if (!e.target.files || !e.target.files[0]) return;
        const reader = new FileReader();
        reader.onload = () => {
          setValue({ ...value, photo: `${reader.result}` });
        };
        reader.readAsDataURL(e.target.files[0]);
        return;

      case "name":
        setValue({ ...value, name: e.target.value });
        return;

      case "discordName":
        const values = value.discord.split("#");
        setValue({ ...value, discord: `${e.target.value}#${values[1]}` });
        return;

      case "discordNumber":
        const discords = value.discord.split("#");
        setValue({ ...value, discord: `${discords[0]}#${e.target.value}` });
        return;

      default:
        return;
    }
  };

  return (
    <S.Wrapper>
      <input
        type="file"
        accept="image/gif,image/jpeg,image/png"
        name="photo"
        onChange={onChange}
        ref={CoverImgRef}
        style={{ display: "none" }}
      />
      {value.photo ? (
        <S.Img src={value.photo} onClick={() => CoverImgRef.current?.click()} />
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
              name="name"
              value={value.name}
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
            <S.Contect>
              <p>전화번호</p>
              <S.ContectInput
                name="contect1"
                onChange={ChangeContect}
                value={contects.contect1}
                maxLength={3}
              />
              <span>-</span>
              <S.ContectInput
                name="contect2"
                onChange={ChangeContect}
                value={contects.contect2}
                maxLength={4}
              />
              <span>-</span>
              <S.ContectInput
                name="contect3"
                onChange={ChangeContect}
                value={contects.contect3}
                maxLength={4}
              />
            </S.Contect>
            <S.Contect>
              <p>디스코드</p>
              <S.ContectInput name="discordName" />
              <span>#</span>
              <S.ContectInput name="discordNumber" maxLength={4} />
            </S.Contect>
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
