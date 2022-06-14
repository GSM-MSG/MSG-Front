import * as S from "./styles";
import * as SVG from "../../SVG";
import { useState, useEffect } from "react";
import { userData } from "./DummyData";
import Link from "next/link";
import Header from "../../components/Header";
import { StuSearch } from "../../components/StuSearch";

export default function adminpeople() {
  //몰라
  const [isModifying, setModifying] = useState<boolean>(false);
  //몰라
  const [isModify, setModify] = useState<any>(true);

  const [isSecession, setSecession] = useState<any>(true);
  const [modalNum, setModalNum] = useState<any | null>(null);

  //멤버 추가하기 모달 관리 state
  const [searchTurn, setSearchTurn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("Modify") !== null) {
      setModify(false);
    }
    if (localStorage.getItem("Secession") !== null) {
      setSecession(false);
    }
  });

  return (
    <>
      <Header />
      <S.Wrapper
        isModal={
          modalNum !== null || isModify || (isSecession && isModifying)
            ? true
            : false
        }
      >
        <S.DeleteInform>
          <S.Title>학생정보 수정</S.Title>
          <div>
            <p>월요일</p>
            <p>30명</p>
          </div>
        </S.DeleteInform>
        <S.ListContainer>
          <ul>
            {userData.map((item: any, idx: number) => (
              <S.ListWrapper key={idx}>
                <img src={item.img} />
                <div>
                  <p>{item.name}</p>
                  <p>
                    {item.grade +
                      "학년 " +
                      item.class +
                      "반 " +
                      item.num +
                      "번"}
                  </p>
                </div>
                <button>삭제</button>
              </S.ListWrapper>
            ))}
          </ul>
        </S.ListContainer>
      </S.Wrapper>
      <S.Inform>
        <button onClick={() => setSearchTurn(true)}>멤버 추가하기</button>
      </S.Inform>
      {/* <StuSearch fn={setSearchTurn} /> */}
      {searchTurn && <StuSearch fn={setSearchTurn} />}
    </>
  );
}
