export interface MyPageType {
  userId: string;
  name: string;
  grade: 1;
  class: 2;
  number: 3;
  profileImageUrl: string;
  joinedMajorClub: {
    title: string;
    type: "MAJOR";
    bannerUrl: string;
  };
  joinedFreedomClub: {
    title: string;
    type: "FREEDOM";
    bannerUrl: string;
  };
  joinedEditorialClub: JoinedEditorialClub[];
}

interface JoinedEditorialClub {
  title: string;
  type: "EDITORIAL";
  bannerUrl: string;
}
