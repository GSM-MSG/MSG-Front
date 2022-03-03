import * as S from "./styles";

interface ProfilePageProps {
  username: string;
}

export default function ProfilePage({ username }: ProfilePageProps) {
  return (
    <S.Wrapper>
      <S.User>
        <div>
          <S.Username>{username}</S.Username>
          <S.UserNum>학번: 2109</S.UserNum>
        </div>
        <S.UserImg />
      </S.User>
    </S.Wrapper>
  );
}
