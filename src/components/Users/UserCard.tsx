import * as S from "./styles";

interface UserCardProps {
  user: {
    name: string;
    grade: number;
    class: number;
    number: number;
    userImg: string;
  };
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <S.UserCardWrapper>
      <S.UserImg src="https://bit.ly/3qTeTra" />
      <S.Info>
        <div>
          <S.Name>김준</S.Name>
          <S.Description>1학년 4반 6번</S.Description>
        </div>
        <S.Bottom>
          <S.Approve>승인</S.Approve>
          <S.Refuse>거절</S.Refuse>
        </S.Bottom>
      </S.Info>
    </S.UserCardWrapper>
  );
}
