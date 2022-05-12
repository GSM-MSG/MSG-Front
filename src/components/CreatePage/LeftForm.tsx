import { NextPage } from "next";
import * as S from "./styles";

const LeftForm: NextPage = () => {
  return (
    <S.LeftFormWrapper>
      <div>
        <S.SubTitle>동아리 이름</S.SubTitle>
        <S.TitleInput />
      </div>
      <div>
        <S.SubTitle>동아리 구성원</S.SubTitle>
      </div>
    </S.LeftFormWrapper>
  );
};

export default LeftForm;
