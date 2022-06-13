import produce from "immer";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import api from "../../lib/api";
import checkQuery from "../../lib/checkQuery";
import { Member, MemberType } from "../../types/MemberType";
import * as S from "./styles";

interface MemberCardProps {
  member: MemberType;
  setMember: Dispatch<SetStateAction<MemberType>>;
  user: Member;
  type: "MANAGE" | "APPLICATION";
}

const MemberCard: NextPage<MemberCardProps> = ({
  member,
  setMember,
  user,
  type,
}) => {
  const router = useRouter();

  const urlArray = router.asPath.split("/");

  const Allow = async () => {
    if (type === "APPLICATION") {
      try {
        await checkQuery(() =>
          api.post("club/web/accept", {
            q: decodeURI(urlArray[2]),
            type: urlArray[1].toUpperCase(),
            userId: user.email,
          })
        );
        setMember(
          produce(member, (draft) => {
            draft;
          })
        );
        toast.success("승인에 성공했습니다.");
      } catch (e) {
        toast.error("승인에 실패했습니다.");
      }
      return;
    }

    try {
      await checkQuery(() =>
        api.put("/club/web/delegation", {
          q: decodeURI(urlArray[2]),
          type: urlArray[1].toUpperCase(),
          userId: user.email,
        })
      );
      setMember(
        produce(member, (draft) => {
          draft.userScope = "MEMBER";
        })
      );
      toast.success("위임에 성공했습니다!!");
    } catch (e) {
      toast.error("위임에 실패했습니다.");
    }
  };

  return (
    <S.MemberWrapper>
      <S.UserImg src={user.userImg} />
      <S.Info>
        <div>
          <S.Name>{user.name}</S.Name>
          <S.Description>
            {user.grade}학년 {user.class}반 {user.num}번
          </S.Description>
        </div>
        <S.Bottom>
          <S.Approve onClick={Allow}>
            {type === "MANAGE" ? "위임" : "승인"}
          </S.Approve>
          <S.Refuse>{type === "MANAGE" ? "강퇴" : "거절"}</S.Refuse>
        </S.Bottom>
      </S.Info>
    </S.MemberWrapper>
  );
};

export default MemberCard;
