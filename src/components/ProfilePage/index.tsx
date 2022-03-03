import Card from "../Card";
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
      <S.ClubsKinds>
        <div>
          <h2>내가 가입한 사설 동아리</h2>
          <S.Clubs>
            <Card link="/major/티모가 좋아서" width={10} />
            <Card link="/major/LoveTeemo" width={10} />
          </S.Clubs>
        </div>
        <div>
          <h2>내가 가입한 전공 동아리</h2>
          <S.Clubs>
            <Card link="/major/하핳" width={10} />
          </S.Clubs>
        </div>
        <div>
          <h2>내가 가입한 자율 동아리</h2>
          <S.Clubs>
            <Card link="/autonomous/msg" width={10} />
          </S.Clubs>
        </div>
      </S.ClubsKinds>
    </S.Wrapper>
  );
}
